import Link from "next/link";

const layers = [
  {
    num: "01",
    title: "AI Governance",
    desc: "Rules, institutions, and oversight mechanisms for responsible development",
    color: "border-accent",
    textColor: "text-accent",
    bg: "bg-accent/5",
  },
  {
    num: "02",
    title: "Global Knowledge Networks",
    desc: "Universities, research labs, and open science infrastructure",
    color: "border-purple",
    textColor: "text-purple",
    bg: "bg-purple/5",
  },
  {
    num: "03",
    title: "Planetary Intelligence Infrastructure",
    desc: "Data platforms, AI models, and simulation environments",
    color: "border-accent",
    textColor: "text-accent",
    bg: "bg-accent/5",
  },
  {
    num: "04",
    title: "Economic Systems",
    desc: "Funding mechanisms, markets, and innovation ecosystems",
    color: "border-purple",
    textColor: "text-purple",
    bg: "bg-purple/5",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 text-xs text-accent border border-accent/30 rounded-full px-3 py-1 mb-8 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Intelligence Age Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-6 leading-none">
            Universal<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">Architect OS</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 leading-relaxed">
            A platform for understanding and shaping civilizational complexity. 
            Built for AI researchers, policymakers, and those who seek to navigate 
            the systems defining our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/architecture"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors"
            >
              Explore Architecture →
            </Link>
            <Link
              href="/manifesto"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-text-primary font-semibold text-sm rounded-lg hover:border-accent/30 hover:text-accent transition-colors"
            >
              Read Manifesto
            </Link>
          </div>
        </div>
      </section>

      {/* Civilization Stack */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Framework</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">The Civilization Stack</h2>
          <p className="text-text-muted max-w-xl">
            Four interdependent layers that comprise the architectural model for intelligence-age civilization.
          </p>
        </div>

        {/* Stack diagram */}
        <div className="relative max-w-3xl">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-purple/40 to-accent/10" />
          <div className="space-y-3">
            {layers.map((layer, i) => (
              <div
                key={i}
                className={`relative pl-16 pr-6 py-5 border-l-2 ${layer.color} ${layer.bg} rounded-r-xl hover:translate-x-1 transition-transform`}
              >
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border ${layer.color} flex items-center justify-center bg-background`}>
                  <span className={`text-xs font-bold ${layer.textColor}`}>{layer.num}</span>
                </div>
                <h3 className={`font-semibold ${layer.textColor} mb-1`}>{layer.title}</h3>
                <p className="text-text-muted text-sm">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              href: "/research",
              label: "Research",
              desc: "The Base-44 Coordination Framework: from architecture to action.",
              accent: "text-accent",
            },
            {
              href: "/founder",
              label: "Founder",
              desc: "Learn about the vision and expertise behind Universal Architect OS.",
              accent: "text-purple",
            },
            {
              href: "/collaborate",
              label: "Collaborate",
              desc: "Join the effort. Connect with our research, policy, and technology work.",
              accent: "text-accent",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 border border-white/5 rounded-xl hover:border-accent/20 bg-surface hover:bg-surface-2 transition-all"
            >
              <p className={`text-sm font-semibold ${item.accent} mb-2 group-hover:translate-x-1 transition-transform`}>
                {item.label} →
              </p>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
