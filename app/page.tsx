"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Check, Gift, HandCoins, Heart, PiggyBank, Plus, ShoppingBag, Sparkles, Target, WalletCards, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Tx = { id:number; kind:"earned"|"spent"|"saved"|"given"; amountCents:number; description:string; status:"pending"|"approved"|"rejected"; occurredOn:string };
type Chore = { id:number; name:string; valueCents:number; active:boolean };
type Goal = { id:number; name:string; targetCents:number; savedCents:number };
type Data = { transactions:Tx[]; chores:Chore[]; goals:Goal[] };
const money = (c:number) => new Intl.NumberFormat("en-US", { style:"currency", currency:"USD" }).format(c/100);

export default function Home() {
  const [data, setData] = useState<Data>({ transactions:[], chores:[], goals:[] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<Tx["kind"]>("earned");
  const load = async () => { try { const r=await fetch("/api/allowance", { cache:"no-store" }); const j=await r.json(); if(!r.ok) throw new Error(j.error); setData(j); setError(""); } catch(e){ setError(e instanceof Error?e.message:"Could not load"); } finally { setLoading(false); } };
  useEffect(() => { load(); }, []);
  const post = async (body:Record<string,unknown>) => { const r=await fetch("/api/allowance", { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(body) }); const j=await r.json(); if(!r.ok) throw new Error(j.error); await load(); };
  const totals = useMemo(() => { const approved=data.transactions.filter(t=>t.status==="approved"); const sum=(k:Tx["kind"])=>approved.filter(t=>t.kind===k).reduce((n,t)=>n+t.amountCents,0); const earned=sum("earned"), spent=sum("spent"), saved=sum("saved"), given=sum("given"); return { earned, spent, saved, given, available:earned-spent-saved-given, pending:data.transactions.filter(t=>t.status==="pending") }; },[data]);
  async function submitTransaction(formData:FormData){ try { await post({action:"transaction",kind,description:formData.get("description"),amount:formData.get("amount")}); setOpen(false); } catch(e){ setError(e instanceof Error?e.message:"Could not save"); } }

  return <main className="min-h-screen pb-16">
    <header className="topbar"><div className="shell flex items-center justify-between gap-4 py-4"><div className="flex items-center gap-3"><div className="mini-capy"><img src="/capybara.png" alt="Sam's cheerful capybara mascot" /></div><div><p className="eyebrow">SAM&apos;S MONEY MEADOW</p><h1>Allowance Tracker</h1></div></div><span className="family-badge">Riggs family</span></div></header>
    <div className="shell space-y-6 pt-6">
      {error && <div className="error-card">{error}</div>}
      <section className="balance-card"><div className="balance-copy"><p className="eyebrow">READY TO SPEND</p><div className="balance">{loading?"—":money(totals.available)}</div><p>Earn it, plan it, enjoy it. You&apos;ve got this, Sam.</p>
        <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button className="add-button"><Plus/> Add money activity</Button></DialogTrigger><DialogContent className="rounded-[28px] border-rose-200 bg-[#fffaf5]"><DialogHeader><DialogTitle>Add money activity</DialogTitle><DialogDescription>This will wait for a parent to approve.</DialogDescription></DialogHeader><form action={submitTransaction} className="space-y-4"><div className="kind-grid">{(["earned","spent","saved","given"] as const).map(k=><button type="button" key={k} onClick={()=>setKind(k)} className={kind===k?"kind-choice active":"kind-choice"}>{k}</button>)}</div><Input name="description" required placeholder="What was it for?"/><Input name="amount" required min="0.01" step="0.01" type="number" placeholder="Amount"/><Button className="w-full add-button" type="submit">Send for approval</Button></form></DialogContent></Dialog>
      </div><img className="hero-capy" src="/capybara.png" alt="Capybara with Sam's school backpack" /></section>
      <section className="bucket-grid"><Bucket icon={<WalletCards/>} label="Available" value={totals.available} color="blue"/><Bucket icon={<PiggyBank/>} label="Saved" value={totals.saved} color="rose"/><Bucket icon={<Heart/>} label="Given" value={totals.given} color="cream"/></section>
      <div className="content-grid">
        <section className="panel"><div className="panel-head"><div><p className="eyebrow">THIS WEEK</p><h2>Chores & earnings</h2></div><Sparkles className="text-rose-400"/></div><div className="stack">{data.chores.length===0?<Empty text="Add Sam's first paid chore below."/>:data.chores.map(c=><div className="row" key={c.id}><div className="row-icon"><Check/></div><div className="grow"><strong>{c.name}</strong><span>{money(c.valueCents)}</span></div><Button variant="outline" size="sm" onClick={()=>post({action:"completeChore",id:c.id})}>Mark done</Button></div>)}</div><InlineForm labels={["Chore name","Value"]} onSave={(a,b)=>post({action:"chore",name:a,amount:b})} button="Add chore"/></section>
        <section className="panel"><div className="panel-head"><div><p className="eyebrow">LOOKING AHEAD</p><h2>Savings goals</h2></div><Target className="text-blue-500"/></div><div className="stack">{data.goals.length===0?<Empty text="Create a goal for something Sam wants."/>:data.goals.map(g=><div className="goal" key={g.id}><div className="flex justify-between gap-3"><strong>{g.name}</strong><span>{money(totals.saved)} / {money(g.targetCents)}</span></div><div className="goal-track"><div style={{width:Math.min(100,totals.saved/g.targetCents*100)+"%"}}/></div></div>)}</div><InlineForm labels={["Goal name","Target"]} onSave={(a,b)=>post({action:"goal",name:a,amount:b})} button="Add goal"/></section>
      </div>
      <section className="panel"><div className="panel-head"><div><p className="eyebrow">PARENT CHECK</p><h2>Waiting for approval <span className="count">{totals.pending.length}</span></h2></div><HandCoins className="text-rose-400"/></div><div className="stack">{totals.pending.length===0?<Empty text="Nothing waiting. All caught up!"/>:totals.pending.map(t=><div className="row" key={t.id}><TxIcon kind={t.kind}/><div className="grow"><strong>{t.description}</strong><span className="capitalize">{t.kind} · {t.occurredOn}</span></div><b>{money(t.amountCents)}</b><Button size="icon-sm" aria-label="Approve" onClick={()=>post({action:"approve",id:t.id})}><Check/></Button><Button size="icon-sm" variant="outline" aria-label="Reject" onClick={()=>post({action:"reject",id:t.id})}><X/></Button></div>)}</div></section>
      <section className="panel"><div className="panel-head"><div><p className="eyebrow">MONEY STORY</p><h2>Recent activity</h2></div></div><div className="stack">{data.transactions.filter(t=>t.status==="approved").length===0?<Empty text="Approved activity will show up here."/>:data.transactions.filter(t=>t.status==="approved").slice(0,8).map(t=><div className="row" key={t.id}><TxIcon kind={t.kind}/><div className="grow"><strong>{t.description}</strong><span className="capitalize">{t.kind} · {t.occurredOn}</span></div><b className={t.kind==="earned"?"positive":""}>{t.kind==="earned"?"+":"−"}{money(t.amountCents)}</b></div>)}</div></section>
    </div>
  </main>;
}

function TxIcon({kind}:{kind:Tx["kind"]}){return <div className={"row-icon "+kind}>{kind==="earned"?<Gift/>:kind==="spent"?<ShoppingBag/>:kind==="saved"?<PiggyBank/>:<Heart/>}</div>}
function Bucket({icon,label,value,color}:{icon:ReactNode;label:string;value:number;color:string}){return <article className={"bucket "+color}><div className="bucket-icon">{icon}</div><div><span>{label}</span><strong>{money(value)}</strong></div></article>}
function Empty({text}:{text:string}){return <div className="empty"><Sparkles/><span>{text}</span></div>}
function InlineForm({labels,onSave,button}:{labels:[string,string];onSave:(a:string,b:string)=>Promise<void>;button:string}){const [show,setShow]=useState(false);return show?<form className="inline-form" onSubmit={async e=>{e.preventDefault();const f=new FormData(e.currentTarget);await onSave(String(f.get("a")),String(f.get("b")));setShow(false)}}><Input name="a" required placeholder={labels[0]}/><Input name="b" required min="0.01" step="0.01" type="number" placeholder={labels[1]}/><Button type="submit">Save</Button></form>:<Button variant="ghost" className="mt-3 text-rose-700" onClick={()=>setShow(true)}><Plus/>{button}</Button>}
