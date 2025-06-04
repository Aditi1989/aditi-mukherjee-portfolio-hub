
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "DressMeUp – Outfit Recommender",
      description: "Built during TCS internship; suggests clothes based on user context and weather using AI/ML algorithms.",
      technologies: ["Python", "TensorFlow", "React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Aditi1989/outfit_recommendor",
      role: "Full-stack Developer & ML Engineer"
    },
    {
      title: "Customer Feedback Analysis",
      description: "Real-time sentiment analysis platform using VADER, RoBERTa, and Streamlit for comprehensive feedback insights.",
      technologies: ["Python", "NLP", "Streamlit", "VADER", "RoBERTa"],
      github: "https://github.com/Aditi1989/customer_feedback_system",
      role: "Data Scientist & Backend Developer"
    },
    {
      title: "EEG Signal Analysis System",
      description: "Achieved 93% accuracy in seizure prediction using machine learning on EEG data for medical applications.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/Aditi1989/EEG-SIGNAL-ANALYSIS-PROJECT",
      role: "ML Engineer & Data Analyst"
    },
    {
      title: "Movie Recommender System",
      description: "Intelligent movie recommendation system using collaborative filtering and content-based algorithms.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "HTML/CSS"],
      github: "https://github.com/Aditi1989/MovieRecommendor",
      role: "Full-stack Developer"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Role: {project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
