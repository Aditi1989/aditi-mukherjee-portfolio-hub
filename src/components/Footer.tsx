
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 Aditi Mukherjee. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>in India</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            "Building the future, one line of code at a time."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
