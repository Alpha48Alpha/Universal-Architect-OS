export default function Manifesto() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Manifesto</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-16 leading-tight">
          A Framework for<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
            Civilizational Complexity
          </span>
        </h1>

        <div className="space-y-8 text-text-muted leading-relaxed text-lg">
          <p>
            We are entering an era of unprecedented complexity. The systems that govern our world — 
            political, economic, technological, ecological — are becoming interdependent in ways that 
            no single institution or discipline can fully comprehend.
          </p>

          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="text-text-primary text-xl font-medium">
              Universal Architect OS is a platform for those who seek to understand and shape that complexity.
            </p>
          </div>

          <p>
            We believe that the intelligence age requires new frameworks — not just for building technology, 
            but for organizing knowledge, governance, and economic systems in ways that serve humanity&apos;s 
            long-term interests.
          </p>

          <div className="bg-surface rounded-xl p-6 border border-white/5">
            <p className="text-text-primary leading-relaxed">
              The <span className="text-accent font-semibold">Civilization Stack</span> is our architectural model. 
              <span className="text-purple font-semibold"> Base-44</span> is our operational framework. Together, 
              they provide tools for navigating the systems that will define the coming century.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {[
              {
                title: "For Researchers",
                desc: "Conceptual tools for understanding civilizational systems and their interdependencies.",
                color: "border-accent",
              },
              {
                title: "For Policymakers",
                desc: "Architectural frameworks for designing governance structures fit for the intelligence age.",
                color: "border-purple",
              },
              {
                title: "For Technologists",
                desc: "Systems thinking applied to the infrastructure that will define the next century.",
                color: "border-purple",
              },
              {
                title: "For Funders",
                desc: "Strategic frameworks for allocating capital across the pillars of civilizational infrastructure.",
                color: "border-accent",
              },
            ].map((item) => (
              <div key={item.title} className={`border-l-2 ${item.color} pl-4 py-2 bg-surface/50 rounded-r-lg pr-4`}>
                <h3 className="text-text-primary font-semibold mb-1">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
