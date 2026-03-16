const experiences = [
  {
    company: 'Vision Aquatics',
    role: 'Founder & Software Engineer',
    period: 'Jan 2026 – Present',
    location: 'New York, NY',
    tag: 'Startup',
    tagColor: 'text-[#3b82f6] border-[#3b82f6]/30 bg-[#3b82f6]/5',
    bullets: [
      'Founded and independently built a computer vision startup delivering 24/7 automated monitoring for aquariums, detecting anomalies and preventing disasters before they occur.',
      'Engineered a working prototype using Python and ML models to analyze live footage and trigger real-time alerts; built full-stack infrastructure across cloud backend, TypeScript web client, and mobile app.',
    ],
  },
  {
    company: 'PepsiCo',
    role: 'Technology Business Analyst & Project Coordinator',
    period: 'Sept 2025 – Present',
    location: 'New York, NY',
    tag: 'Full-time',
    tagColor: 'text-[#d4d4d4] border-[#d4d4d4]/30 bg-[#d4d4d4]/5',
    bullets: [
      'Led end-to-end migration of critical financial applications, including Hyperion Planning, to cloud infrastructure, improving system reliability and scalability across the organization.',
      'Engineered a financial planning dashboard to centralize business-critical reporting for tax teams and coordinated cross-functional delivery between engineering and finance stakeholders.',
    ],
  },
  {
    company: 'PepsiCo',
    role: 'Software Engineering Intern',
    period: 'May 2024 – Aug 2024',
    location: 'New York, NY',
    tag: 'Internship',
    tagColor: 'text-[#d4d4d4] border-[#d4d4d4]/30 bg-[#d4d4d4]/5',
    bullets: [
      'Developed a Python-based ML model to predict business outcomes, delivering data-driven insights to support operational decision-making.',
      'Supported DevSecOps team in global deployment of business-critical applications, contributing to CI/CD pipeline management via GitHub Actions.',
    ],
  },
  {
    company: 'Marine Biology Lab · NYU Abu Dhabi',
    role: 'Research Assistant to Dr. Jeneen Hadj-Hammou',
    period: 'Sept 2023 – June 2024',
    location: 'New York, NY',
    tag: 'Research',
    tagColor: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
    bullets: [
      "Became the first and only NYC-based NYU student embedded in the lab by proactively networking across NYU's entire Marine Biology faculty.",
      'Developed R-based data pipelines to clean, analyze, and visualize large environmental datasets tracking coral reef responses to rising sea temperatures across 20 locations in the Arabian Gulf.',
    ],
  },
  {
    company: 'NYU Courant Institute',
    role: 'Research Assistant to Sebastian Wolff',
    period: 'May 2023 – July 2023',
    location: 'New York, NY',
    tag: 'Research',
    tagColor: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
    bullets: [
      'Applied formal verification techniques and Python-based tooling to validate post-graduate research on recursive integer program verification.',
      'Received open offer to return as research assistant in the future.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-[#3b82f6] tracking-[0.2em] uppercase">
          // experience
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-16">Experience</h2>

        <div className="relative">
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-[#1f1f1f]" />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-4 md:gap-0">
                {/* Date column */}
                <div className="md:w-[200px] md:pr-12 shrink-0">
                  <p className="text-xs text-[#a3a3a3] font-mono leading-relaxed md:text-right">
                    {exp.period}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[196px] top-1 w-[9px] h-[9px] rounded-full bg-[#0a0a0a] border-2 border-[#404040]" />

                {/* Content */}
                <div className="md:pl-12 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold text-base">{exp.company}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${exp.tagColor}`}>
                      {exp.tag}
                    </span>
                  </div>
                  <p className="text-[#3b82f6] text-sm font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-[#d4d4d4] text-sm leading-relaxed flex gap-3">
                        <span className="text-[#3b82f6] mt-1.5 shrink-0 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 pt-16 border-t border-[#1f1f1f]">
          <span className="text-xs font-mono text-[#3b82f6] tracking-[0.2em] uppercase">
            // education
          </span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-8">Education</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-[#1f1f1f] bg-[#111111]">
            <div>
              <h3 className="text-white font-semibold text-base">New York University</h3>
              <p className="text-[#3b82f6] text-sm mt-1">Bachelor of Arts in Computer Science</p>
              <p className="text-[#a3a3a3] text-xs mt-2 font-mono">
                Agile Software Development · Software Engineering · Machine Learning · Algorithms · Operating Systems · Data Management
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right shrink-0">
              <p className="text-[#d4d4d4] text-sm font-mono">Aug 2021 – May 2025</p>
              <p className="text-[#a3a3a3] text-xs mt-1">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
