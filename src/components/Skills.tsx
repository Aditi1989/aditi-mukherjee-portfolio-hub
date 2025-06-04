
import { Code, Palette, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "Java", "C", "SQL", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      icon: Code
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Bootstrap"],
      color: "from-green-500 to-emerald-500",
      icon: Palette
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "REST APIs", "Express.js", "MongoDB", "SQL"],
      color: "from-purple-500 to-pink-500",
      icon: Database
    },
    {
      title: "Data & AI",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "NLP", "TensorFlow"],
      color: "from-orange-500 to-red-500",
      icon: Brain
    },
    {
      title: "Tools",
      skills: ["AWS (EC2/S3)", "GitHub", "Figma", "Canva", "Vite"],
      color: "from-indigo-500 to-purple-500",
      icon: Wrench
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, and design
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Background glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-transparent h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default text-center hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-600"
                    >
                      <span className="group-hover/skill:font-bold transition-all duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
