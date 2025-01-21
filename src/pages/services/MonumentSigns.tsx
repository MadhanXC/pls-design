import React, { useEffect } from 'react';
import { Building2, Ruler, Palette, MapPin } from 'lucide-react';
import ServiceLayout from '../../components/ServiceLayout';

const MonumentSigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Custom Design",
      description: "Tailored to your brand"
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Perfect Sizing",
      description: "Scaled for visibility"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Material Options",
      description: "Multiple finishes"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Strategic Placement",
      description: "Maximum visibility"
    }
  ];

  const galleryImages = [
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Monument_sign.jpg",
      title: "Corporate Monuments",
      description: "Elegant corporate monument signs"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2024/11/Store-sign3.jpg",
      title: "Store Signs",
      description: "Custom storefront signage"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/modern_design.jpg",
      title: "Modern Design",
      description: "Contemporary sign solutions"
    }
  ];

  return (
    <ServiceLayout
      title="Store & Monument Signs"
      subtitle="Make a lasting impression with custom storefront and monument signage"
      description="Our custom signs create a powerful first impression for your property. From storefront signs that attract customers to monument signs that establish your presence, our designs combine durability with aesthetic appeal, ensuring your business stands out with elegance and professionalism."
      features={features}
      image="https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Store-and-monument-sign-cover.jpg"
      galleryImages={galleryImages}
    >
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Step
            number="1"
            title="Consultation"
            description="Discuss your vision and requirements"
          />
          <Step
            number="2"
            title="Design"
            description="Create custom design concepts"
          />
          <Step
            number="3"
            title="Permitting"
            description="Handle all required permits"
          />
          <Step
            number="4"
            title="Installation"
            description="Professional installation"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

const Step = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default MonumentSigns;