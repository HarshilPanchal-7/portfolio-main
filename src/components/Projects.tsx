import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      shortDescription: [
        "Premium responsive design with glassmorphism effects",
        "ATS-optimized semantic HTML structure",
        "Smooth animations and modern UI/UX"
      ],
      technologies: ["React.js", "CSS", "JavaScript", "Bootstrap", "HTML"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/premium-portfolio-main/src/assets/images/portfolio.png",
    },

    {
      title: "Skyraa Global Export",
      shortDescription: [
        "Export of premium Indian spices, masala, and agricultural products",
        "Direct sourcing from Indian farms with export-grade quality control",
        "Global distribution of spices, oilseeds, pulses, and herbs"
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Netlify"
      ],
      liveUrl: "https://skyraaglobalexports.netlify.app",
      githubUrl: "#",
      image: "/premium-portfolio-main/src/assets/images/skyraa.png",
    },

    {
      title: "Nike-Inspired Sneakers Website",
      shortDescription: [
        "Static sneaker showcase website",
        "Nike-inspired UI and layout design",
        "Built from scratch as a first personal project"
      ],
      technologies: ["HTML", "CSS","Bootstrap", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/premium-portfolio-main/src/assets/images/nike.jpg"
    },
   
    {
  title: "Code Crafters – Personal Portfolio",
  shortDescription: [
    "Single-page personal portfolio website",
    "Clean and modern UI with purple theme",
    "Responsive layout with smooth navigation"
  ],
  technologies: [
  
    "TypeScript",
    "HTML",
    "CSS",
    "Single Page Design"
  ],
  liveUrl: "#", // add your deployed link later
  githubUrl: "#", // add your GitHub repo link
  image: "/premium-portfolio-main/src/assets/images/web page.png",
}
,
    
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 border border-gray-800 hover:border-blue-500/50 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Links Overlay */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg hover:bg-blue-500 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg hover:bg-blue-500 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <ul className="text-sm text-gray-400 mb-4 space-y-2 flex-grow">
                  {project.shortDescription.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Gradient Line */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
