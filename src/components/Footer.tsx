import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {currentYear} Harshil Panchal | Frontend Developer
          </p>
          <p className="text-muted-foreground text-sm font-body flex items-center gap-1">
            Built By   using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
