import { Code, Database, Brain, Palette, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "primary",
      gradient: "from-blue-500 to-cyan-500",
      description: "Building beautiful, responsive user interfaces",
      skills: [
        { name: "HTML", projects: "Portfolio websites, Landing pages" },
        { name: "CSS", projects: "Custom animations, Responsive layouts" },
        { name: "JavaScript", projects: "Interactive web apps, DOM manipulation" },
        { name: "React.js", projects: "Single-page applications, Component libraries" },
        { name: "Bootstrap", projects: "Rapid prototyping, Grid systems" },
        { name: "Tailwind CSS", projects: "Modern UI designs, Utility-first styling" }
      ],
    },
    {
      title: "Programming Languages",
      icon: Database,
      color: "secondary",
      gradient: "from-purple-500 to-pink-500",
      description: "Core programming expertise",
      skills: [
        { name: "Python", projects: "Data analysis, Automation scripts, Backend APIs" },
        { name: "C++", projects: "Algorithm implementation, Problem solving" },
        { name: "TypeScript", projects: "Type-safe applications, React projects" }
      ],
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "accent",
      gradient: "from-orange-500 to-red-500",
      description: "Fundamental computer science knowledge",
      skills: [
        { name: "Data Structures", projects: "Arrays, Trees, Graphs, Hash tables" },
        { name: "Algorithms", projects: "Sorting, Searching, Dynamic programming" },
        { name: "Problem Solving", projects: "LeetCode, Competitive programming" },
        { name: "OOP", projects: "Class design, Inheritance, Polymorphism" }
      ],
    },
    {
      title: "Other Skills",
      icon: Palette,
      color: "primary",
      gradient: "from-green-500 to-teal-500",
      description: "Additional technical capabilities",
      skills: [
        { name: "AI Automation", projects: "Workflow automation, AI integrations" },
        { name: "Responsive Design", projects: "Mobile-first layouts, Cross-browser compatibility" },
        { name: "UI/UX", projects: "User-centered design, Prototyping" },
        { name: "Git/GitHub", projects: "Version control, Collaboration, Open source" }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world experience and hands-on expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <article
              key={category.title}
              className={`glass-card p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                selectedCategory === categoryIndex ? "ring-2 ring-primary neon-glow" : ""
              }`}
              onClick={() => setSelectedCategory(selectedCategory === categoryIndex ? null : categoryIndex)}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group"
                  >
                    <div className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === categoryIndex 
                        ? "bg-white/5" 
                        : "hover:bg-white/5"
                    }`}>
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                        selectedCategory === categoryIndex 
                          ? "text-primary scale-110" 
                          : "text-muted-foreground group-hover:text-primary"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                          {skill.name}
                          {selectedCategory === categoryIndex && (
                            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                          )}
                        </div>
                        <p className={`text-xs text-muted-foreground transition-all duration-300 ${
                          selectedCategory === categoryIndex 
                            ? "opacity-100 max-h-20" 
                            : "opacity-0 max-h-0 overflow-hidden"
                        }`}>
                          {skill.projects}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-primary/70 flex items-center justify-center gap-1">
                  {selectedCategory === categoryIndex ? (
                    <>Click to collapse</>
                  ) : (
                    <>Click to see what I've built</>
                  )}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;