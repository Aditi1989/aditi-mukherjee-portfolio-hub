
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "Java", "SQL", "TypeScript", "C"],
      color: "bg-blue-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
      color: "bg-green-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
      color: "bg-purple-500"
    },
    {
      title: "AI/ML Tools",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "bg-orange-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Figma", "AWS", "Canva", "Vite"],
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
