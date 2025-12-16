import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Home, User, Code, Briefcase, Mail } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-card shadow-lg backdrop-blur-xl py-2.5 border-b border-border/50" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="w-full px-10 flex items-center justify-between"> 
        {/* Logo with animated gradient */}
   <a
  href="#home"
  className="text-xl md:text-2xl font-extrabold tracking-wide"
>
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Harshil
  </span>
 <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    ’s Portfolio
  </span>
</a>




        

        {/* Desktop Navigation with Icons */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 group ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-primary" : ""}`} />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
          
          {/* Theme Toggle with smooth transition */}
          <li className="ml-2">
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-lg bg-muted hover:bg-primary/10 transition-all hover:scale-105 active:scale-95 overflow-hidden group"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative z-10">
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-primary rotate-0 transition-transform group-hover:rotate-180 duration-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary rotate-0 transition-transform group-hover:-rotate-180 duration-500" />
                )}
              </div>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-muted hover:bg-primary/10 transition-all active:scale-95 overflow-hidden group"
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10">
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </div>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-all active:scale-95 relative overflow-hidden group"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              {isOpen ? (
                <X className="w-6 h-6 text-foreground rotate-0 transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }} />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with Icons */}
        <div
          className={`absolute top-full left-0 right-0 glass-card md:hidden transition-all duration-300 border-b border-border/50 ${
            isOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? "text-primary" : ""}`} />
                    <span>{link.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;