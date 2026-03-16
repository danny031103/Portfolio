const featured = {
  name: 'Vision Aquatics',
  description:
    'Founded and built a computer vision startup that monitors aquariums 24/7, detecting anomalies and alerting owners before small problems turn into disasters. A working prototype runs on a repurposed phone, using Python and ML models to analyze live footage and trigger real-time alerts.',
  status: 'In Development',
  tags: ['Python', 'Computer Vision', 'Machine Learning', 'TypeScript', 'Mobile', 'Cloud'],
  github: 'https://github.com/danny031103',
  role: 'Founder & Software Engineer',
}

const projects = [
  {
    name: 'Coraldex',
    description:
      'Interactive web app featuring a coral encyclopedia and personalized reef recommendation algorithm based on individual tank specifications.',
    tags: ['Python', 'Flask', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/danny031103/Coraldex',
  },
  {
    name: 'NYU Bus App',
    description:
      'iOS app giving NYU students accurate real-time shuttle bus arrival and departure information in a clean, readable interface.',
    tags: ['Swift', 'iOS', 'REST APIs'],
    github: 'https://github.com/danny031103/NYU-Bus-App',
  },
  {
    name: 'ReefLog',
    description:
      'Java application to track and visualize aquarium parameters over time using JFreeChart — replacing a manual process across 10+ tracked metrics.',
    tags: ['Java', 'JFreeChart', 'Data Visualization'],
    github: 'https://github.com/danny031103/Reef-Params-Tracker',
  },
  {
    name: 'ML Model Checking',
    description:
      'Python-based tooling to validate post-graduate research on recursive integer program verification, applying formal verification methods to ML systems.',
    tags: ['Python', 'Machine Learning', 'Formal Verification'],
    github: 'https://github.com/danny031103/Machine-Learning-Model-Checking',
  },
]

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-[#3b82f6] tracking-[0.2em] uppercase">
          // projects
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-16">Projects</h2>

        {/* Featured: Vision Aquatics */}
        <div className="mb-10 p-8 border border-[#3b82f6]/20 bg-[#111111] hover:border-[#3b82f6]/40 transition-colors duration-300">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-mono text-[#3b82f6] tracking-[0.15em] uppercase">
              Featured Project
            </span>
            <span className="text-xs px-2 py-0.5 border border-[#3b82f6]/30 text-[#3b82f6] font-mono bg-[#3b82f6]/5">
              {featured.status}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{featured.name}</h3>
          <p className="text-sm text-[#d4d4d4] font-medium mb-5">{featured.role}</p>
          <p className="text-[#d4d4d4] leading-relaxed mb-6 max-w-2xl text-sm">{featured.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[#161616] border border-[#1f1f1f] text-[#d4d4d4] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={featured.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#3b82f6] hover:text-white transition-colors duration-200"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 border border-[#1f1f1f] bg-[#111111] hover:border-[#2a2a2a] group transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <svg
                  className="text-[#3b82f6]"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a3a3a3] hover:text-white transition-colors duration-200"
                  aria-label={`GitHub — ${project.name}`}
                >
                  <GitHubIcon />
                </a>
              </div>
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#3b82f6] transition-colors duration-200">
                {project.name}
              </h3>
              <p className="text-[#d4d4d4] text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#a3a3a3] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/danny031103"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#d4d4d4] hover:text-white transition-colors duration-200 border border-[#1f1f1f] px-6 py-3 hover:border-[#404040]"
          >
            View all projects on GitHub
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
