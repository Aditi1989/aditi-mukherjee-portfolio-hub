
import { GraduationCap, MapPin, Briefcase, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science undergraduate at KIIT, passionate about full-stack development, AI/ML, and UI/UX design. 
                Currently interning at TCS onsite till June 2025, where I'm building a smart outfit recommendation system. I thrive on 
                solving real-world problems through data, design, and scalable code.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With experience in multiple internships and a strong foundation in both frontend and backend 
                technologies, I'm always eager to learn and contribute to innovative projects that make a difference.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: GraduationCap,
                title: "Current Education",
                subtitle: "B.Tech in CS, KIIT (2022–2026)",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: School,
                title: "Previous Education",
                subtitle: "Carmel School, Dhanbad",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Briefcase,
                title: "Experience",
                subtitle: "TCS Internship (Onsite till June 2025)",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: MapPin,
                title: "Location",
                subtitle: "From Ghatsila, Jharkhand",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="group flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                <div className={`p-4 bg-gradient-to-r ${item.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
