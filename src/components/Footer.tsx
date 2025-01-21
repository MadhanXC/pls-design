import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Premier Lighting & Sign</h3>
            <p className="text-gray-300">Professional lighting and signage solutions for businesses.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+12245849588" className="flex items-center text-gray-300 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +1 224 584 9588
              </a>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                service@premierlightings.com
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                507 W Golf Rd, Arlington Heights, IL 60005
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Chicago</li>
              <li>Suburbs</li>
              <li>Northwest Indiana</li>
              <li>Southeast Wisconsin</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Premier Lighting & Sign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;