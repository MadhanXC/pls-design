import React, { useEffect } from 'react';
import { PenTool, Layout, Globe, Image } from 'lucide-react';
import ServiceLayout from '../../components/ServiceLayout';

const DesignServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Design",
      description: "Responsive websites"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Logo Design",
      description: "Brand identity"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "User-friendly interfaces"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Graphics",
      description: "Marketing materials"
    }
  ];

  const galleryImages = [
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/web_design.jpg",
      title: "Web Design",
      description: "Modern responsive websites"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/brand_design.jpg",
      title: "Brand Identity",
      description: "Complete branding solutions"
    },
    {
      url: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/print_design2.jpg",
      title: "Print Design",
      description: "Professional marketing materials"
    }
  ];

  return (
    <ServiceLayout
      title="Design Services"
      subtitle="Professional web and graphic design for your business"
      description="Our design team creates compelling visual solutions that help your business stand out. From website design to brand identity, we deliver professional results that engage your audience."
      features={features}
      image="https://www.premierlightingandsign.com/wp-content/uploads/2025/01/PLS-Graphic-DESIGN.jpg"
      galleryImages={galleryImages}
    >
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Service
            title="Web Design"
            items={[
              "Responsive websites",
              "E-commerce solutions",
              "Landing pages",
              "Website maintenance"
            ]}
          />
          <Service
            title="Brand Identity"
            items={[
              "Logo design",
              "Brand guidelines",
              "Color palettes",
              "Typography"
            ]}
          />
          <Service
            title="Marketing Materials"
            items={[
              "Business cards",
              "Brochures",
              "Social media graphics",
              "Email templates"
            ]}
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

const Service = ({ title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DesignServices;