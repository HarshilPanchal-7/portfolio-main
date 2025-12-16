import { ExternalLink, Github } from "lucide-react";

import portfolioImg from "../assets/images/portfolio.png";
import skyraaImg from "../assets/images/skyraa.png";
import nikeImg from "../assets/images/nike.jpg";
import codeCraftersImg from "../assets/images/web-page.png";

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
    image: portfolioImg,
  },
  {
    title: "Skyraa Global Export",
    shortDescription: [
      "Export of premium Indian spices, masala, and agricultural products",
      "Direct sourcing from Indian farms with export-grade quality control",
      "Global distribution of spices, oilseeds, pulses, and herbs"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    liveUrl: "https://skyraaglobalexports.netlify.app",
    githubUrl: "#",
    image: skyraaImg,
  },
  {
    title: "Nike-Inspired Sneakers Website",
    shortDescription: [
      "Static sneaker showcase website",
      "Nike-inspired UI and layout design",
      "Built from scratch as a first personal project"
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    image: nikeImg,
  },
  {
    title: "Code Crafters – Personal Portfolio",
    shortDescription: [
      "Single-page personal portfolio website",
      "Clean and modern UI with purple theme",
      "Responsive layout with smooth navigation"
    ],
    technologies: ["TypeScript", "HTML", "CSS", "Single Page Design"],
    liveUrl: "#",
    githubUrl: "#",
    image: codeCraftersImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
