import React, { useEffect } from 'react';
import { Lightbulb, Battery, Zap, Wrench } from 'lucide-react';
import ServiceLayout from '../../components/ServiceLayout';

const LedSigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Long Lasting",
      description: "50,000+ hours of operation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficient",
      description: "Up to 75% energy savings"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Bright & Visible",
      description: "High-impact visibility"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Low Maintenance",
      description: "Minimal upkeep required"
    }
  ];

  const galleryImages = [
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/LED3.jpg",
      title: "Retail LED Signs",
      description: "Custom LED signage for retail stores"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2024/11/LED1-1024x576.jpg",
      title: "Outdoor Displays",
      description: "Weather-resistant LED displays"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/LED-indoor.jpg",
      title: "Indoor LED Solutions",
      description: "Vibrant Indoor LED signage"
    }
  ];

  return (
    <ServiceLayout
      title="LED Sign Solutions"
      subtitle="Custom LED signs that make your business stand out"
      description="LED signs are the perfect solution for businesses looking to increase visibility and attract more customers. Our custom LED signs are energy-efficient, long-lasting, and designed to make your business stand out."
      features={features}
      image="https://www.premierlightingandsign.com/wp-content/uploads/2025/01/LED4.jpg"
      galleryImages={galleryImages}
    >
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our LED Sign Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Service
            title="Design"
            description="Custom designs tailored to your brand and requirements"
          />
          <Service
            title="Installation"
            description="Professional installation by certified technicians"
          />
          <Service
            title="Maintenance"
            description="Regular maintenance and emergency repairs"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

const Service = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LedSigns;