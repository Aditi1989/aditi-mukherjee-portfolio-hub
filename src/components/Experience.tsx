
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Project Intern",
      period: "May 2025 – June 2025",
      location: "Onsite",
      description: "Working on an AI-based fashion recommendation engine. Developing ThresholdMLFUp – an analytics engine that suggests outfits based on user preferences, weather, and occasion using contextual data processing.",
      achievements: [
        "Built machine learning models for outfit recommendation",
        "Implemented user preference analysis algorithms",
        "Integrated weather API for context-aware suggestions"
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      company: "Google AI-ML Virtual Internship",
      role: "Machine Learning Intern",
      period: "Jan 2025 – Mar 2025",
      location: "Virtual",
      description: "Gained hands-on experience in AI/ML fundamentals, including TensorFlow, Google Cloud AI, and model evaluation through self-paced modules.",
      achievements: [
        "Completed TensorFlow certification modules",
        "Learned Google Cloud AI platform integration",
        "Built and evaluated ML models using best practices"
      ],
      color: "from-green-600 to-blue-600"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-transparent">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg`}>
                      <Building className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={18} />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Key Achievements:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
