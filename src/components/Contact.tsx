
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a 
                  href="mailto:01aditimukherjee@gmail.com"
                  className="text-primary hover:underline"
                >
                  01aditimukherjee@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Ghatsila, Jharkhand, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Connect with me:</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/aditi-mukherjee-2a9953262', '_blank')}
                  className="flex-1"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://github.com/Aditi1989', '_blank')}
                  className="flex-1"
                >
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://leetcode.com/u/Aditi_Mukherjee/', '_blank')}
                  className="flex-1"
                >
                  LeetCode
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Download Resume</h3>
            <p className="text-gray-600 mb-6">
              Get a detailed overview of my experience, skills, and achievements.
            </p>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => window.open('/lovable-uploads/f0df6db1-c4cd-4210-95e2-3fe774cfef3d.png', '_blank')}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Stats:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• B.Tech Computer Science (2022-2026)</li>
                <li>• 2+ Professional Internships</li>
                <li>• 4+ Major Projects Completed</li>
                <li>• Proficient in 10+ Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
