const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'Java', 'C', 'R', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['Next.js', 'Flask', 'Pandas', 'MongoDB', 'Docker', 'GitHub Actions', 'Git', 'CI/CD'],
  },
  {
    label: 'Domains',
    items: [
      'Machine Learning',
      'Computer Vision',
      'DevSecOps',
      'Cloud Infrastructure',
      'Data Analysis',
      'Agile / PM',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-[#3b82f6] tracking-[0.2em] uppercase">
          // skills
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-16">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-mono text-[#a3a3a3] uppercase tracking-widest mb-5 pb-3 border-b border-[#1f1f1f]">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm text-[#d4d4d4] border border-[#1f1f1f] bg-[#111111] hover:border-[#3b82f6]/40 hover:text-white transition-all duration-200 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-[#1f1f1f]">
          <h3 className="text-xs font-mono text-[#a3a3a3] uppercase tracking-widest mb-5">
            Spoken Languages
          </h3>
          <div className="flex flex-wrap gap-8">
            {[
              { lang: 'English', level: 'Native' },
              { lang: 'Spanish', level: 'Native' },
              { lang: 'Italian', level: 'Elementary' },
              { lang: 'Portuguese', level: 'Elementary' },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">{lang}</span>
                <span className="text-xs text-[#a3a3a3] font-mono">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
