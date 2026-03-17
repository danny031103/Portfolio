export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#a3a3a3] text-xs font-mono">
          © {new Date().getFullYear()} Daniel Brito
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/danny031103" target="_blank" rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-white text-xs font-mono transition-colors duration-200">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/daniel-brito-5a4160221/" target="_blank" rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-white text-xs font-mono transition-colors duration-200">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/dannybrito_" target="_blank" rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-white text-xs font-mono transition-colors duration-200">
            Instagram
          </a>
          <a href="https://www.instagram.com/britosreef" target="_blank" rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-white text-xs font-mono transition-colors duration-200">
            Reef Instagram
          </a>
          <a href="https://www.reef2reef.com/search/6537825/?c[users]=danielbrito0311&o=date" target="_blank" rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-white text-xs font-mono transition-colors duration-200">
            Reef2Reef
          </a>
          <a href="mailto:db4471@nyu.edu"
            className="text-[#a3a3a3] hover:text-white text-xs font-mono transition-colors duration-200">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
