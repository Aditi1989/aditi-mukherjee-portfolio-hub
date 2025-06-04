
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary">Aditi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
            Aspiring Software Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I build AI-powered and data-driven solutions with purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3"
              onClick={() => window.open('/lovable-uploads/f0df6db1-c4cd-4210-95e2-3fe774cfef3d.png', '_blank')}
            >
              View Resume
            </Button>
          </div>

          <div className="flex justify-center md:justify-start gap-6">
            <a 
              href="https://github.com/Aditi1989" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditi-mukherjee-2a9953262" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:01aditimukherjee@gmail.com"
              className="px-4 py-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all duration-200 text-sm font-medium"
            >
              Email
            </a>
            <a 
              href="https://leetcode.com/u/Aditi_Mukherjee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-3 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all duration-200 text-sm font-medium"
            >
              LeetCode
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full absolute -top-4 -left-4"></div>
            <img 
              src="/lovable-uploads/dd022323-e902-4854-aa01-99a2100583f2.png" 
              alt="Aditi Mukherjee" 
              className="w-80 h-80 object-cover rounded-full shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
