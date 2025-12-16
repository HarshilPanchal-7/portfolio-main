import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/images/harshil.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16 pb-16"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-6s" }} />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Enhanced Layout */}
          <div className="text-center lg:text-left space-y-5 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for work</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block gradient-text">Harshil Panchal</span>
              </h1>
              
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-secondary" />
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              I craft beautiful, responsive web experiences with modern technologies. 
              Specializing in React, TypeScript, and creating pixel-perfect user interfaces 
              that users love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#projects" 
                className="btn-neon inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold group"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn-outline-neon inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/HarshilPanchal-7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshilpanchal07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hrshil0708@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-40 animate-glow-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: "-2s" }} />
              
              {/* Profile Container with Enhanced Effects */}
              <div className="relative">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px] animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                
                {/* Profile Image */}
                <div className="relative glass-card rounded-full p-2 neon-glow">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
                    <img 
                      src={profileImg} 
                      alt="Harshil Panchal - Frontend Developer Portfolio" 
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                 
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Additional CSS for animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;