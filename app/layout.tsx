import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam's Allowance Tracker",
  description: "A cheerful place for Sam to earn, save, give, and spend wisely.",
  openGraph: {
    title: "Sam's Allowance Tracker",
    description: "Earn • Save • Give • Spend",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Sam's Allowance Tracker capybara theme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam's Allowance Tracker",
    description: "Earn • Save • Give • Spend",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
