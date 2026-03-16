const layers = [
  {
    num: "Layer 1",
    title: "AI Governance",
    desc: "The apex layer governing all systems beneath it. Encompasses international treaties, regulatory bodies, safety standards, ethics frameworks, and democratic oversight mechanisms that ensure artificial intelligence development proceeds in accordance with human values and long-term interests.",
    tags: ["International Treaties", "Regulatory Bodies", "Safety Standards", "Ethics Frameworks", "Democratic Oversight"],
    accent: "#00D4FF",
    borderColor: "border-accent",
    tagBg: "bg-accent/10 text-accent border-accent/20",
    numColor: "text-accent",
    glow: "shadow-[0_0_40px_rgba(0,212,255,0.08)]",
  },
  {
    num: "Layer 2",
    title: "Global Knowledge Networks",
    desc: "The epistemic infrastructure of civilization. Universities, research institutions, open science platforms, and interdisciplinary collaborations that generate, curate, and distribute knowledge. This layer bridges theoretical understanding with practical implementation.",
    tags: ["Universities", "Research Labs", "Open Science", "Interdisciplinary Collaboration", "Knowledge Commons"],
    accent: "#6B46FF",
    borderColor: "border-purple",
    tagBg: "bg-purple/10 text-purple border-purple/20",
    numColor: "text-purple",
    glow: "shadow-[0_0_40px_rgba(107,70,255,0.08)]",
  },
  {
    num: "Layer 3",
    title: "Planetary Intelligence Infrastructure",
    desc: "The technological substrate enabling intelligence at scale. Includes data platforms, foundation AI models, simulation environments, sensor networks, and compute infrastructure. This layer translates knowledge into operational capability.",
    tags: ["Data Platforms", "AI Models", "Simulation Environments", "Sensor Networks", "Compute Infrastructure"],
    accent: "#00D4FF",
    borderColor: "border-accent",
    tagBg: "bg-accent/10 text-accent border-accent/20",
    numColor: "text-accent",
    glow: "shadow-[0_0_40px_rgba(0,212,255,0.08)]",
  },
  {
    num: "Layer 4",
    title: "Economic Systems",
    desc: "The foundational resource layer. Funding mechanisms, market structures, investment frameworks, and innovation ecosystems that provide the material conditions for all layers above. Includes philanthropy, venture capital, public funding, and new economic models.",
    tags: ["Funding Mechanisms", "Innovation Ecosystems", "Venture Capital", "Philanthropy", "Public Investment"],
    accent: "#6B46FF",
    borderColor: "border-purple",
    tagBg: "bg-purple/10 text-purple border-purple/20",
    numColor: "text-purple",
    glow: "shadow-[0_0_40px_rgba(107,70,255,0.08)]",
  },
];

export default function Architecture() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">System Diagram</p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">The Civilization Stack</h1>
          <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
            A layered architectural model for understanding the interdependent systems of intelligence-age civilization. 
            Each layer depends on and influences the layers around it.
          </p>
        </div>

        {/* Stack diagram */}
        <div className="relative">
          {/* Vertical axis label */}
          <div className="hidden md:flex absolute -left-16 top-0 bottom-0 items-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-text-muted rotate-[-90deg] whitespace-nowrap tracking-widest">GOVERNANCE ↑</span>
            </div>
          </div>
          
          {/* Layer stack */}
          <div className="space-y-2">
            {layers.map((layer, i) => (
              <div key={i} className={`border-l-4 ${layer.borderColor} bg-surface rounded-r-2xl p-6 md:p-8 ${layer.glow} hover:translate-x-1 transition-transform`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-32 flex-shrink-0">
                    <div className={`text-xs font-bold tracking-widest ${layer.numColor} uppercase mb-1`}>{layer.num}</div>
                    <div className="h-px bg-white/5 md:hidden" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3">{layer.title}</h2>
                    <p className="text-text-muted leading-relaxed mb-4">{layer.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border ${layer.tagBg}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom label */}
          <div className="mt-4 text-center">
            <span className="text-xs text-text-muted tracking-widest uppercase">Foundation Layer ↓</span>
          </div>
        </div>

        {/* SVG diagram */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Layer Interdependencies</h2>
          <div className="bg-surface rounded-2xl p-8 overflow-x-auto">
            <svg viewBox="0 0 700 280" className="w-full max-w-2xl mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Layer 1 */}
              <rect x="50" y="20" width="600" height="48" rx="6" fill="#0F1F3D" stroke="#00D4FF" strokeWidth="1.5"/>
              <text x="70" y="50" fill="#00D4FF" fontSize="11" fontWeight="600" fontFamily="monospace">LAYER 1</text>
              <text x="170" y="50" fill="#E8EAF0" fontSize="13" fontWeight="600" fontFamily="sans-serif">AI Governance</text>
              <text x="500" y="50" fill="#8892A4" fontSize="10" fontFamily="sans-serif">Rules · Institutions · Oversight</text>
              {/* Arrow */}
              <line x1="350" y1="68" x2="350" y2="88" stroke="#00D4FF" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
              <polygon points="346,86 354,86 350,92" fill="#00D4FF" opacity="0.4"/>
              {/* Layer 2 */}
              <rect x="50" y="92" width="600" height="48" rx="6" fill="#0F1F3D" stroke="#6B46FF" strokeWidth="1.5"/>
              <text x="70" y="122" fill="#6B46FF" fontSize="11" fontWeight="600" fontFamily="monospace">LAYER 2</text>
              <text x="170" y="122" fill="#E8EAF0" fontSize="13" fontWeight="600" fontFamily="sans-serif">Global Knowledge Networks</text>
              <text x="500" y="122" fill="#8892A4" fontSize="10" fontFamily="sans-serif">Universities · Labs · Science</text>
              {/* Arrow */}
              <line x1="350" y1="140" x2="350" y2="160" stroke="#6B46FF" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
              <polygon points="346,158 354,158 350,164" fill="#6B46FF" opacity="0.4"/>
              {/* Layer 3 */}
              <rect x="50" y="164" width="600" height="48" rx="6" fill="#0F1F3D" stroke="#00D4FF" strokeWidth="1.5"/>
              <text x="70" y="194" fill="#00D4FF" fontSize="11" fontWeight="600" fontFamily="monospace">LAYER 3</text>
              <text x="170" y="194" fill="#E8EAF0" fontSize="13" fontWeight="600" fontFamily="sans-serif">Planetary Intelligence Infrastructure</text>
              <text x="500" y="194" fill="#8892A4" fontSize="10" fontFamily="sans-serif">Data · Models · Simulation</text>
              {/* Arrow */}
              <line x1="350" y1="212" x2="350" y2="232" stroke="#00D4FF" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
              <polygon points="346,230 354,230 350,236" fill="#00D4FF" opacity="0.4"/>
              {/* Layer 4 */}
              <rect x="50" y="236" width="600" height="48" rx="6" fill="#0F1F3D" stroke="#6B46FF" strokeWidth="1.5"/>
              <text x="70" y="266" fill="#6B46FF" fontSize="11" fontWeight="600" fontFamily="monospace">LAYER 4</text>
              <text x="170" y="266" fill="#E8EAF0" fontSize="13" fontWeight="600" fontFamily="sans-serif">Economic Systems</text>
              <text x="500" y="266" fill="#8892A4" fontSize="10" fontFamily="sans-serif">Funding · Markets · Ecosystems</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
