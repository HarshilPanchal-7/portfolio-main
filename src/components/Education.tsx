import { GraduationCap, School, BookOpen, Award, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const education = [
    {
      level: "Secondary Education (5th - 10th)",
      degree: "General Education",
      institution: "Jawahar Navodaya Vidyalaya , Gandhinagar",
      duration: "July 2017 – Apr 2022",
      description: "Residential CBSE education focused on academic excellence, discipline, leadership, and holistic personality development in a highly competitive environment.",
      highlights: [
        "Selected for Jawahar Navodaya Vidyalaya, a highly competitive national-level residential school",
        "Hostel life experience: developed independence, discipline, time management, and adaptability",
        "Strong academic performance with excellent Class 10 CBSE results",
        "Learned life skills: leadership, teamwork, resilience, and self-growth"
      ],
      icon: School,
      color: "from-blue-500 to-cyan-500"
    },
    {
      level: "Higher Secondary (11th - 12th)",
      degree: "Science Stream - PCM",
      institution: "Aditya International School , Ahmedabad",
      duration: "June 2022 - Apr 2024",
      description: "Focused academic phase dedicated to competitive exam preparation and advanced problem-solving through JEE-oriented coaching.",
      highlights: [
        "Learned consistency, pressure handling, and self-discipline through competitive preparation",
        "Developed deep analytical thinking and problem-solving abilities",
        "Learned consistency, pressure handling, and self-discipline through competitive preparation",
        "Exposure to high-performance peer environment and structured learning system"
      ],
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      level: "Bachelor's Degree",
      degree: "B.Tech in Computer Science",
      institution: "ASIOT, Ahmedabad",
      duration: "2024 – Present | 4th Semester",
      description: "Undergraduate IT student focused on automation, AI-driven systems, software development, and real-world problem solving.",
      highlights: [
        "Currently specializing in Automation, AI-based systems, and software development",
        "Hands-on experience with Automation workflows (n8n) , AI automated calling systems , Coding & system integration",
        "Actively building skills in freelancing, real-world projects, and applied AI",
        "Strong interest in using technology for social impact and scalability"
      ],
      icon: GraduationCap,
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            const isExpanded = expandedIndex === index;

            return (
              <article
                key={edu.level}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                  isExpanded ? "neon-glow" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 ${
                      isExpanded ? "scale-110 rotate-6" : ""
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary inline-flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.duration}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{edu.institution}</span>
                      </div>

                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isExpanded ? "text-primary" : ""
                      }`}>
                        {edu.level}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-primary/90 mb-3">
                        {edu.degree}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Expandable Highlights */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                      }`}>
                        <div className="pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-sm">Key Highlights & Achievements</span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            {edu.highlights.map((highlight, idx) => (
                              <div 
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Button */}
                      <button className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors mt-2 group">
                        <span>{isExpanded ? "Show less" : "View highlights"}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Education;