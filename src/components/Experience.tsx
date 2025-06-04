
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Project Intern",
      period: "May 2025 – Present",
      location: "Remote",
      description: "Working on an AI-based fashion recommendation engine. Developing ThresholdMLFUp – an analytics engine that suggests outfits based on user preferences, weather, and occasion using contextual data processing.",
      achievements: [
        "Built machine learning models for outfit recommendation",
        "Implemented user preference analysis algorithms",
        "Integrated weather API for context-aware suggestions"
      ]
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
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{exp.company}</h3>
                  <p className="text-lg text-primary font-medium">{exp.role}</p>
                </div>
                <div className="flex flex-col md:items-end text-gray-600 mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
