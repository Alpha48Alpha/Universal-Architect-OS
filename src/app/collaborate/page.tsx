"use client";
import { useState } from "react";

export default function Collaborate() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    area: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Collaborate</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Shape the Intelligence Age<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
            Together
          </span>
        </h1>
        <p className="text-text-muted text-lg leading-relaxed mb-16 max-w-2xl">
          Universal Architect OS is building the frameworks, platforms, and institutions for intelligence-age 
          civilization. We collaborate with researchers, policymakers, technologists, and funders who share 
          the conviction that coordination is the defining challenge of our era.
        </p>

        {/* Collaboration areas */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Research Collaboration", desc: "Co-develop whitepapers, frameworks, and academic studies across disciplines.", color: "border-accent" },
            { title: "Policy Engagement", desc: "Advisory relationships with governments, international bodies, and regulatory institutions.", color: "border-purple" },
            { title: "Technology Partnerships", desc: "Joint development of platforms, tools, and prototypes in the Base-44 framework.", color: "border-purple" },
            { title: "Capital & Funding", desc: "Philanthropic initiatives, grants, and institutional investment in civilizational infrastructure.", color: "border-accent" },
          ].map((item) => (
            <div key={item.title} className={`border-l-2 ${item.color} bg-surface rounded-r-xl p-5`}>
              <h3 className="text-text-primary font-semibold mb-1">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        {submitted ? (
          <div className="border border-accent/30 bg-accent/5 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">Message Received</h2>
            <p className="text-text-muted leading-relaxed">
              Thank you for reaching out. We review all collaboration inquiries and will be in touch 
              if there is a strong alignment with our current work.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface border border-white/5 rounded-2xl p-8 space-y-6">
            <h2 className="text-xl font-bold text-text-primary mb-2">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Your organization"
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Area of Interest *</label>
              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
              >
                <option value="" disabled>Select an area</option>
                <option value="governance">Governance</option>
                <option value="research">Research</option>
                <option value="technology">Technology</option>
                <option value="policy">Policy</option>
                <option value="capital">Capital</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your collaboration interest, background, and what you hope to contribute or explore..."
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-background font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
