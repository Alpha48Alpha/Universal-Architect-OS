import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Universal Architect OS",
  description: "Platform for understanding and shaping civilizational complexity in the intelligence age.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary min-h-screen">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-white/5 py-8 mt-24">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-text-muted text-sm">© 2025 Universal Architect OS</span>
            <span className="text-text-muted text-sm">Building infrastructure for the intelligence age.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
