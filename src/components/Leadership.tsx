
import { Users, Heart, Megaphone } from "lucide-react";

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Heart className="text-red-500" size={28} />
                Youth Red Cross
              </h3>
              <p className="text-lg text-primary font-medium">Social Media Lead</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <span>Aug 2023 – Present</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Led the digital outreach strategy for the organization, managing content, campaigns, 
            and volunteer coordination across platforms. Spearheaded health awareness drives and 
            significantly boosted community engagement and event participation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
              <Megaphone className="text-red-500" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900">Digital Strategy</h4>
                <p className="text-sm text-gray-600">Content & Campaign Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Users className="text-blue-500" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900">Team Leadership</h4>
                <p className="text-sm text-gray-600">Volunteer Coordination</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Heart className="text-green-500" size={24} />
              <div>
                <h4 className="font-semibold text-gray-900">Community Impact</h4>
                <p className="text-sm text-gray-600">Health Awareness Drives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
