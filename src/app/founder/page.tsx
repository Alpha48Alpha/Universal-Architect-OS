export default function Founder() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Founder</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-16 leading-tight">
          The Conviction Behind<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
            the Platform
          </span>
        </h1>

        <div className="space-y-8">
          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="text-text-primary text-xl font-medium leading-relaxed">
              Universal Architect OS was founded with a single conviction: that the greatest challenge 
              of the intelligence age is not technological capability — it is coordination.
            </p>
          </div>

          <p className="text-text-muted text-lg leading-relaxed">
            We have powerful tools. We lack the architectural frameworks and institutional structures 
            to deploy them wisely.
          </p>

          <p className="text-text-muted text-lg leading-relaxed">
            The founder of Universal Architect OS brings together expertise in systems design, technology 
            governance, and institutional innovation to build the infrastructure for the intelligence age.
          </p>

          <div className="bg-surface border border-white/5 rounded-2xl p-8">
            <p className="text-text-primary leading-relaxed text-lg mb-6">
              Our work sits at the intersection of research, technology, policy, and capital — engaging 
              all four pillars of the Base-44 framework to ensure that ideas move from vision to implementation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Research", "Technology", "Policy", "Capital"].map((pillar, i) => (
                <div key={pillar} className={`text-center p-3 rounded-lg border ${i % 2 === 0 ? "border-accent/20 bg-accent/5 text-accent" : "border-purple/20 bg-purple/5 text-purple"} text-sm font-semibold`}>
                  {pillar}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-4">
            {[
              { title: "Systems Design", desc: "Architectural frameworks for understanding civilizational complexity." },
              { title: "Technology Governance", desc: "Institutional structures for responsible AI development." },
              { title: "Institutional Innovation", desc: "New models for organizing knowledge and coordination at scale." },
            ].map((item, i) => (
              <div key={item.title} className={`border-t-2 ${i % 2 === 0 ? "border-accent" : "border-purple"} pt-4 bg-surface/50 rounded-b-lg p-4`}>
                <h3 className="text-text-primary font-semibold mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
