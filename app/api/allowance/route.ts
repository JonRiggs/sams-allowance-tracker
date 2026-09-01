import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { chores, goals, transactions } from "@/db/schema";

export async function GET() {
  try {
    const db = getDb();
    const [ledger, choreRows, goalRows] = await Promise.all([
      db.select().from(transactions).orderBy(desc(transactions.occurredOn), desc(transactions.id)).limit(100),
      db.select().from(chores).orderBy(chores.id),
      db.select().from(goals).orderBy(goals.id),
    ]);
    return Response.json({ transactions: ledger, chores: choreRows, goals: goalRows });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to load allowance data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const action = String(body.action ?? "");
    const db = getDb();
    if (action === "transaction") {
      const amountCents = Math.round(Number(body.amount) * 100);
      const description = String(body.description ?? "").trim();
      const kind = String(body.kind ?? "earned");
      if (!description || !Number.isFinite(amountCents) || amountCents <= 0 || !["earned", "spent", "saved", "given"].includes(kind)) return Response.json({ error: "Enter a description and an amount greater than zero." }, { status: 400 });
      const [row] = await db.insert(transactions).values({ kind, amountCents, description, status: body.approved ? "approved" : "pending", occurredOn: new Date().toISOString().slice(0, 10) }).returning();
      return Response.json({ transaction: row }, { status: 201 });
    }
    if (action === "approve" || action === "reject") {
      await db.update(transactions).set({ status: action === "approve" ? "approved" : "rejected" }).where(eq(transactions.id, Number(body.id)));
      return Response.json({ ok: true });
    }
    if (action === "chore") {
      const name = String(body.name ?? "").trim();
      const valueCents = Math.round(Number(body.amount) * 100);
      if (!name || valueCents <= 0) return Response.json({ error: "Add a chore name and value." }, { status: 400 });
      const [row] = await db.insert(chores).values({ name, valueCents }).returning();
      return Response.json({ chore: row }, { status: 201 });
    }
    if (action === "completeChore") {
      const [chore] = await db.select().from(chores).where(eq(chores.id, Number(body.id))).limit(1);
      if (!chore) return Response.json({ error: "Chore not found." }, { status: 404 });
      await db.insert(transactions).values({ kind: "earned", amountCents: chore.valueCents, description: chore.name, status: "pending", occurredOn: new Date().toISOString().slice(0, 10) });
      return Response.json({ ok: true }, { status: 201 });
    }
    if (action === "goal") {
      const name = String(body.name ?? "").trim();
      const targetCents = Math.round(Number(body.amount) * 100);
      if (!name || targetCents <= 0) return Response.json({ error: "Add a goal name and target." }, { status: 400 });
      const [row] = await db.insert(goals).values({ name, targetCents }).returning();
      return Response.json({ goal: row }, { status: 201 });
    }
    return Response.json({ error: "Unknown action." }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to save" }, { status: 500 });
  }
}
