import React from "react";

export default function Research() {
  const pillars = [
    { num: "01", title: "Governance", desc: "Rules, institutions, and oversight mechanisms for responsible development of intelligence-age systems.", color: "text-accent", border: "border-accent" },
    { num: "02", title: "Knowledge", desc: "Global networks for discovery — universities, research labs, and interdisciplinary collaborations.", color: "text-purple", border: "border-purple" },
    { num: "03", title: "Infrastructure", desc: "Technological systems including data platforms, AI models, and simulation environments.", color: "text-accent", border: "border-accent" },
    { num: "04", title: "Economics", desc: "Resource allocation, funding mechanisms, and innovation ecosystems that sustain progress.", color: "text-purple", border: "border-purple" },
  ];

  const engines = [
    { title: "Research", desc: "Whitepapers, academic studies, and system design frameworks that build the knowledge base.", icon: "📄", color: "text-accent" },
    { title: "Technology", desc: "Prototypes, digital platforms, and visualization tools that translate ideas into working systems.", icon: "⚙️", color: "text-purple" },
    { title: "Policy", desc: "Governance proposals, advisory reports, and regulatory frameworks for institutional adoption.", icon: "🏛️", color: "text-accent" },
    { title: "Capital", desc: "Grants, philanthropic initiatives, and institutional partnerships that fund and scale initiatives.", icon: "💎", color: "text-purple" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Whitepaper</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3 leading-tight">
          The Base-44 Coordination Framework
        </h1>
        <p className="text-xl text-text-muted mb-16">From Architecture to Action</p>

        {/* Introduction */}
        <div className="prose-custom mb-20">
          <p className="text-text-muted text-lg leading-relaxed">
            Architectural frameworks help explain how complex systems are organized. However, frameworks alone 
            are not sufficient for guiding real-world implementation. Large-scale initiatives require structured 
            processes that move ideas from conceptual models into research programs, prototypes, and institutional 
            collaboration. The Base-44 Coordination Framework provides this operational structure.
          </p>
        </div>

        {/* Civilization Stack intro */}
        <div className="mb-20 p-8 bg-surface rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold text-text-primary mb-4">The Civilization Stack</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            The Civilization Stack is the architectural model that describes the four interdependent layers 
            of intelligence-age civilization. It provides a map of the terrain — showing how AI governance, 
            knowledge systems, technological infrastructure, and economic structures relate to one another.
          </p>
          <p className="text-text-muted leading-relaxed">
            The Base-44 Framework is the operational complement to the Civilization Stack. Where the Stack 
            describes <em className="text-text-primary">what</em> must be built, Base-44 describes 
            <em className="text-text-primary"> how</em> to build it — through four pillars and four execution engines 
            working in concert.
          </p>
        </div>

        {/* Four Pillars */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-2">The Four Pillars</h2>
          <p className="text-text-muted mb-8">The structural domains of intelligence-age civilization</p>
          <div className="grid md:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.num} className={`border-l-2 ${p.border} bg-surface rounded-r-xl p-6`}>
                <div className={`text-xs font-bold tracking-widest ${p.color} mb-2`}>{p.num}</div>
                <h3 className={`text-lg font-semibold ${p.color} mb-2`}>{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Four Execution Engines */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-2">The Four Execution Engines</h2>
          <p className="text-text-muted mb-8">The operational modes through which pillars become reality</p>
          <div className="grid md:grid-cols-2 gap-4">
            {engines.map((e) => (
              <div key={e.title} className="bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/20 transition-colors">
                <div className="text-2xl mb-3">{e.icon}</div>
                <h3 className={`text-lg font-semibold ${e.color} mb-2`}>{e.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Base-44 Matrix */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-2">The Base-44 Matrix</h2>
          <p className="text-text-muted mb-8">Four pillars × four engines = sixteen operational domains</p>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] bg-surface rounded-2xl p-6 border border-white/5">
              {/* Matrix grid */}
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1" />
                {["Research", "Technology", "Policy", "Capital"].map((e) => (
                  <div key={e} className="text-center text-xs font-semibold text-accent pb-2">{e}</div>
                ))}
                {["Governance", "Knowledge", "Infrastructure", "Economics"].map((pillar, pi) => (
                  <React.Fragment key={pillar}>
                    <div className={`text-xs font-semibold py-3 ${pi % 2 === 0 ? "text-accent" : "text-purple"}`}>{pillar}</div>
                    {["Research", "Technology", "Policy", "Capital"].map((engine) => (
                      <div key={`${pillar}-${engine}`} className={`rounded-lg p-2 flex items-center justify-center ${pi % 2 === 0 ? "bg-accent/5 border border-accent/10" : "bg-purple/5 border border-purple/10"}`}>
                        <span className="text-xs text-text-muted text-center">●</span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principle */}
        <section className="p-8 border border-accent/20 rounded-2xl bg-accent/5">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">Base-44 Operating Principle</p>
          <blockquote className="text-2xl md:text-3xl font-medium text-text-primary leading-relaxed">
            &ldquo;Every initiative should engage multiple pillars and execution engines simultaneously.&rdquo;
          </blockquote>
          <p className="text-text-muted mt-6 leading-relaxed">
            The power of the Base-44 Framework lies in its insistence on multi-domain engagement. 
            An initiative that addresses governance without infrastructure, or research without capital, 
            will fail to achieve systemic change. The framework demands integration by design.
          </p>
        </section>
      </div>
    </div>
  );
}
