import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team for professional lighting and signage solutions</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-center">
                <Phone className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:+12245849588" className="text-gray-600 hover:text-green-600 text-lg">
                    +1 224 584 9588
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:service@premierlightings.com" className="text-gray-600 hover:text-green-600 text-lg">
                    service@premierlightings.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600 text-lg">507 W Golf Rd</p>
                  <p className="text-gray-600 text-lg">Arlington Heights, IL 60005</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Hours</h3>
                  <p className="text-gray-600 text-lg">24/7 Emergency Service Available</p>
                  <p className="text-gray-500 mt-1">Always here when you need us</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
                <a 
                  href="tel:+12245849588"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 224 584 9588
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;