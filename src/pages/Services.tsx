import React from 'react';
import { Lightbulb, Monitor, Building2, PenTool, Wrench, Clock } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<Lightbulb />}
            title="LED Sign Solutions"
            description="Custom LED signs that make your business stand out. We handle design, installation, and maintenance."
            features={[
              "Energy-efficient LED technology",
              "Custom designs and sizes",
              "Professional installation",
              "Maintenance services"
            ]}
          />
          
          <ServiceCard
            icon={<Monitor />}
            title="Digital Signage"
            description="Modern digital displays for dynamic content delivery and engagement."
            features={[
              "High-resolution displays",
              "Content management systems",
              "Interactive solutions",
              "Regular maintenance"
            ]}
          />
          
          <ServiceCard
            icon={<Building2 />}
            title="Store & Monument Signs"
            description="Custom-designed storefront and monument signs that reflect your brand identity."
            features={[
              "Custom design services",
              "Permit acquisition",
              "Professional installation",
              "Lighting options"
            ]}
          />
          
          <ServiceCard
            icon={<PenTool />}
            title="Design Services"
            description="Professional web and graphic design services for small businesses."
            features={[
              "Website design",
              "Logo creation",
              "Brand identity",
              "Marketing materials"
            ]}
          />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock />}
              title="24/7 Support"
              description="Emergency repair services available around the clock"
            />
            <FeatureCard
              icon={<Wrench />}
              title="Expert Installation"
              description="Professional installation by certified technicians"
            />
            <FeatureCard
              icon={<Lightbulb />}
              title="Energy Efficient"
              description="Eco-friendly solutions that save money"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, features }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-green-600 w-12 h-12 mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-50 rounded-lg text-center">
    <div className="text-green-600 w-12 h-12 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Services;