import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Universal Architect OS",
  description:
    "Governance, innovation, and infrastructure for the intelligence age. Built for AI researchers, technology founders, policy leaders, philanthropic funders, and research institutions.",
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
