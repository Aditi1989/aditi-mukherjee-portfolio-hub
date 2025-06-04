
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "DressMeUp – Outfit Recommender",
      description: "AI-powered fashion recommendation system built during TCS internship. Suggests personalized outfits based on user preferences, weather conditions, and contextual factors.",
      technologies: ["Python", "Machine Learning", "AI", "TCS Platform"],
      role: "Full-Stack Developer & AI Engineer",
      github: "https://github.com/Aditi1989/outfit_recommendor",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Customer Feedback Analysis",
      description: "Real-time sentiment analysis system using VADER and RoBERTa models. Built with Streamlit for interactive data visualization and sentiment tracking.",
      technologies: ["Python", "VADER", "RoBERTa", "Streamlit", "NLP"],
      role: "Data Scientist & Frontend Developer",
      github: "https://github.com/Aditi1989/customer_feedback_system",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "EEG Signal Analysis System",
      description: "Advanced machine learning system for seizure prediction from EEG data. Achieved 93% accuracy using sophisticated signal processing and ML algorithms.",
      technologies: ["Python", "Machine Learning", "Signal Processing", "Data Analysis"],
      role: "ML Engineer & Data Analyst",
      github: "https://github.com/Aditi1989/EEG-SIGNAL-ANALYSIS-PROJECT",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Movie Recommender",
      description: "Intelligent movie recommendation system that suggests personalized content based on user preferences and viewing history using collaborative filtering.",
      technologies: ["React", "Vite", "JavaScript", "ESLint"],
      role: "Frontend Developer",
      github: "https://github.com/Aditi1989/MovieRecommendor",
      image: "https://images.unsplash.com/photo-1489599904792-95282350e39c?w=500",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-blue-500" size={32} />
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <Sparkles className="text-purple-500" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            A showcase of innovative solutions combining AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Background glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-transparent h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl p-4 bg-gradient-to-r ${project.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="filter drop-shadow-sm">{project.image}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    asChild
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-xl hover:scale-105 transition-all duration-300 text-white border-0`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={20} />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="px-6 hover:scale-105 transition-all duration-300 border-2"
                  >
                    <ExternalLink size={20} />
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
