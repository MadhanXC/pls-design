import React, { useEffect } from 'react';
import { Monitor, Wifi, Settings, RefreshCw } from 'lucide-react';
import ServiceLayout from '../../components/ServiceLayout';

const DigitalSignage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "HD Displays",
      description: "Crystal clear visuals"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Remote Control",
      description: "Update content anywhere"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Management",
      description: "User-friendly interface"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Instant content changes"
    }
  ];

  const galleryImages = [
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2024/11/Digital-Signage1-2048x1365.jpg",
      title: "Restaurant Menus",
      description: "Digital menu boards and displays"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Digital-Signage-1-scaled.jpg",
      title: "Corporate Displays",
      description: "Information displays for offices"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Retail-Signage.jpg",
      title: "Retail Signage",
      description: "Interactive retail displays"
    }
  ];

  return (
    <ServiceLayout
      title="Digital Signage Solutions"
      subtitle="Modern digital displays for dynamic content delivery"
      description="Digital signage offers a dynamic way to communicate with your audience. Our solutions combine high-quality displays with easy-to-use content management systems, allowing you to update your message in real-time."
      features={features}
      image="https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Digital-Signage2-scaled.jpg"
      galleryImages={galleryImages}
    >
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Digital Signage Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Application
            title="Retail"
            description="Dynamic product displays and promotions"
          />
          <Application
            title="Restaurants"
            description="Digital menus and specials"
          />
          <Application
            title="Corporate"
            description="Information displays and wayfinding"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

const Application = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default DigitalSignage;