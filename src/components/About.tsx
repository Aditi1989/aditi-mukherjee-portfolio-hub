
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a Computer Science undergraduate at KIIT, passionate about full-stack development and AI/ML. 
              Currently interning at TCS, where I'm building a smart outfit recommendation system. I thrive on 
              solving real-world problems through data, design, and scalable code.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With experience in multiple internships and a strong foundation in both frontend and backend 
              technologies, I'm always eager to learn and contribute to innovative projects that make a difference.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Education</h3>
                <p className="text-gray-600">B.Tech in CS, KIIT (2022–2026)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Experience</h3>
                <p className="text-gray-600">2+ Internships</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">From Ghatsila, Jharkhand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
