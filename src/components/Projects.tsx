import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import portfolioImg from "@/assets/projects/portfolio.png";
import skyraaImg from "@/assets/projects/skyraa.png";
import nikeImg from "@/assets/projects/nike.jpg";
import codecraftersImg from "@/assets/projects/codecrafters.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Premium responsive design with glassmorphism effects, ATS-optimized semantic HTML structure, and smooth animations with modern UI/UX.",
    image: portfolioImg,
    tech: ["React.js", "CSS", "JavaScript", "Framer Motion"],
    liveUrl: "https://harshilportfolio7.netlify.app/",
    githubUrl: "https://github.com/HarshilPanchal-7",
    featured: true,
  },
  {
    title: "Skyraa Global Export",
    description: "Export of premium Indian spices, masala, and agricultural products with direct sourcing from Indian farms and export-grade quality control.",
    image: skyraaImg,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://skyraaglobalexports.netlify.app/",
    githubUrl: "https://github.com/HarshilPanchal-7",
    featured: true,
  },
  {
    title: "Nike-Inspired Sneakers Website",
    description: "Static sneaker showcase website with Nike-inspired UI and layout design. Built from scratch as a first personal project.",
    image: nikeImg,
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/HarshilPanchal-7",
    featured: false,
  },
  {
    title: "Code Crafters – Personal Portfolio",
    description: "Single-page personal portfolio website with clean and modern UI featuring a purple theme and responsive layout with smooth navigation.",
    image: codecraftersImg,
    tech: ["TypeScript", "HTML", "CSS", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/HarshilPanchal-7",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="section-glow top-1/4 -left-40" />
      <div className="section-glow bottom-1/4 -right-40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_18%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_18%/0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`project-card group ${project.featured ? 'lg:col-span-1' : ''}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button variant="glass" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com/HarshilPanchal-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
