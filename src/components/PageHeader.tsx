import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const bgStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
  } : undefined;

  return (
    <div 
      className={`relative py-24 ${backgroundImage ? 'bg-cover bg-center text-white' : 'bg-gray-50 text-gray-900'}`}
      style={bgStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;