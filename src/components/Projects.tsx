
import { ExternalLink, Github, Sparkles, Code, Zap, Brain, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "DressMeUp – Outfit Recommender",
      description: "AI-powered fashion recommendation system built during TCS internship. Suggests personalized outfits based on user preferences, weather conditions, and contextual factors.",
      technologies: ["Python", "Machine Learning", "AI", "TCS Platform"],
      role: "Full-Stack Developer & AI Engineer",
      github: "https://github.com/Aditi1989/outfit_recommendor",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      icon: Brain,
      accentColor: "pink"
    },
    {
      title: "Customer Feedback Analysis",
      description: "Real-time sentiment analysis system using VADER and RoBERTa models. Built with Streamlit for interactive data visualization and sentiment tracking.",
      technologies: ["Python", "VADER", "RoBERTa", "Streamlit", "NLP"],
      role: "Data Scientist & Frontend Developer",
      github: "https://github.com/Aditi1989/customer_feedback_system",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: Zap,
      accentColor: "blue"
    },
    {
      title: "EEG Signal Analysis System",
      description: "Advanced machine learning system for seizure prediction from EEG data. Achieved 93% accuracy using sophisticated signal processing and ML algorithms.",
      technologies: ["Python", "Machine Learning", "Signal Processing", "Data Analysis"],
      role: "ML Engineer & Data Analyst",
      github: "https://github.com/Aditi1989/EEG-SIGNAL-ANALYSIS-PROJECT",
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
      icon: Brain,
      accentColor: "green"
    },
    {
      title: "Movie Recommender",
      description: "Intelligent movie recommendation system that suggests personalized content based on user preferences and viewing history using collaborative filtering.",
      technologies: ["React", "Vite", "JavaScript", "ESLint"],
      role: "Frontend Developer",
      github: "https://github.com/Aditi1989/MovieRecommendor",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: Monitor,
      accentColor: "orange"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg animate-pulse">
              <Sparkles className="text-white" size={32} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg animate-pulse delay-500">
              <Sparkles className="text-white" size={32} />
            </div>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mt-8 max-w-4xl mx-auto font-medium">
            A showcase of innovative solutions combining AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Enhanced background glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition-all duration-700 animate-pulse`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-30 group-hover:opacity-75 transition-all duration-500`}></div>
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-transparent h-full flex flex-col group-hover:scale-[1.02] group-hover:-translate-y-2">
                
                {/* Enhanced Project Header with larger icon */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`relative p-5 bg-gradient-to-r ${project.gradient} rounded-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <project.icon className="text-white" size={40} />
                    {/* Glow effect around icon */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-50 -z-10`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Code size={16} className={`text-${project.accentColor}-500`} />
                      <p className={`text-base font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Description */}
                <div className="mb-8 flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Technologies with better styling */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                      <Zap size={18} className={`text-${project.accentColor}-500`} />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-2xl text-sm font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-default border border-white/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-4 pt-6 border-t-2 border-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700">
                  <Button
                    asChild
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:scale-105 transition-all duration-500 text-white border-0 text-lg font-bold py-6 rounded-2xl relative overflow-hidden group/btn`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <Github className="mr-3" size={22} />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-6 hover:scale-110 transition-all duration-500 border-3 rounded-2xl border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <ExternalLink size={22} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
