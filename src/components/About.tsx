import { Briefcase, GraduationCap, Code2, Award, Zap, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, label: "Projects", value: "5+", color: "text-blue-500" },
    { icon: Award, label: "Internships", value: "2", color: "text-purple-500" },
    { icon: Code2, label: "Technologies", value: "10+", color: "text-pink-500" },
    { icon: TrendingUp, label: "Experience", value: "4 Mo", color: "text-green-500" },
  ];

  const highlights = [
    { 
      icon: Zap, 
      title: "Performance Focused", 
      description: "Optimized web applications for faster load times and better user experience",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    { 
      icon: Users, 
      title: "Team Collaboration", 
      description: "Cross-functional experience working with designers, developers, and stakeholders",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    { 
      icon: TrendingUp, 
      title: "Continuous Learner", 
      description: "Always exploring new technologies and best practices in web development",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    { 
      icon: Award, 
      title: "Quality Driven", 
      description: "Writing clean, maintainable code with focus on accessibility and standards",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey and experience
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & About */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Text Card */}
            <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">I am a Frontend Developer</strong> with experience in building responsive, accessible, and performance-optimized web applications. I specialize in <span className="text-blue-400">HTML, CSS, JavaScript, React.js, and Bootstrap</span>, with strong fundamentals in <span className="text-blue-400">Python, C++, and Data Structures & Algorithms</span>.
                </p>
                <p>
                  I have <strong className="text-white">hands-on industry experience</strong> through internships where I worked on real-world projects and collaborated with cross-functional teams to deliver high-quality solutions.
                </p>
                
                {/* International Achievement Highlight */}
                <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        🏆 International Recognition –<strong className="text-yellow-400"> Dubai </strong>(October 2024)
                      </h4>
                      <p className="text-sm text-gray-300 mb-2">
                        <strong className="text-yellow-400">Youngest Leader in Training – Coding & Robotics</strong> awarded by Leadership Federation
                      </p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4">
                        <li>• Honored internationally in Dubai for leadership in Coding and Robotics</li>
                        <li>• Recognized for community service and youth leadership</li>
                        <li>• Led initiatives to train underprivileged students in Basic IT skills, Coding fundamentals, and Robotics education</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 italic">
                  Passionate about creating seamless user experiences and constantly learning new technologies to stay ahead in the ever-evolving web development landscape.
                </p>
              </div>
            </article>

            {/* Core Highlights */}
            <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold">What I Bring</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl hover:border-gray-600 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            {/* Timeline */}
            <div className="relative space-y-6">
              
              {/* Experience 1 */}
              <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 relative pl-16">
                <div className="absolute left-4 top-6 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-4 border-gray-900 z-10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg text-white">Neno Technology</h4>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">1 Month</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3 font-medium">AI Automation Intern</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Worked on AI-based automation workflows and optimization solutions to improve efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">Python</span>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">AI/ML</span>
                  </div>
                </div>
              </article>

              {/* Experience 2 */}
              <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 relative pl-16">
                <div className="absolute left-4 top-6 w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center border-4 border-gray-900 z-10">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg text-white">Acmegrade</h4>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">3 Months</span>
                  </div>
                  <p className="text-purple-400 text-sm mb-3 font-medium">Frontend Developer Intern • Remote</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Developed responsive UI components and improved user experience with modern web technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">React</span>
                    <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">JavaScript</span>
                    <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">CSS</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-6 rounded-xl text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <h4 className="font-semibold mb-2">Let's Collaborate</h4>
              <p className="text-sm text-gray-400 mb-4">
                Open to new opportunities and exciting projects
              </p>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
