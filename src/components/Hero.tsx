
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Dark Mode Toggle */}
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="icon"
        className="fixed top-24 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:scale-110 transition-all duration-300"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left animate-fade-in space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Aditi</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
              Aspiring Software Engineer & UI/UX Designer
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
              I build AI-powered and data-driven solutions with purpose.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg font-semibold rounded-full border-2 hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              onClick={() => window.open('/lovable-uploads/f0df6db1-c4cd-4210-95e2-3fe774cfef3d.png', '_blank')}
            >
              📄 View Resume
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6">
            {[
              { href: "https://github.com/Aditi1989", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/aditi-mukherjee-2a9953262", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:01aditimukherjee@gmail.com", icon: null, label: "Email" },
              { href: "https://leetcode.com/u/Aditi_Mukherjee/", icon: null, label: "LeetCode" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                {item.icon ? (
                  <item.icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <span className="text-sm font-bold">{item.label}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="relative group">
            {/* Animated background circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-pink-400 via-blue-500 to-purple-500 rounded-full animate-spin-reverse opacity-50 blur-sm"></div>
            
            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-all duration-500">
              <img 
                src="/lovable-uploads/dd022323-e902-4854-aa01-99a2100583f2.png" 
                alt="Aditi Mukherjee" 
                className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-500 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
