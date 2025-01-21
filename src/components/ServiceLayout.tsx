import React from 'react';
import PageHeader from './PageHeader';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  image: string;
  galleryImages?: {
    url: string;
    title: string;
    description: string;
  }[];
  children?: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  description,
  features,
  image,
  galleryImages,
  children
}) => {
  return (
    <div>
      <PageHeader 
        title={title}
        subtitle={subtitle}
        backgroundImage={image}
      />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 mb-6">{description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>

          {galleryImages && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8">Our Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {galleryImages.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {children}

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <a
              href="tel:+12245849588"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Call Now: +1 224 584 9588
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }: Feature) => (
  <div className="flex items-start">
    <div className="text-green-600 mr-4">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ServiceLayout;