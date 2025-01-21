import React, { useEffect } from 'react';
import { CheckCircle, Award, Users, Clock, MapPin, PenTool as Tool, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Premier Lighting & Sign</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Chicago's trusted partner in innovative lighting and signage solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                At Premier Lighting & Sign, we're dedicated to transforming businesses through innovative lighting and signage solutions. Our mission is to help companies enhance their visibility, attract customers, and create lasting impressions through cutting-edge technology and exceptional design.
              </p>
              <div className="space-y-4">
                <Feature text="Industry-leading expertise and proven track record" />
                <Feature text="Comprehensive solutions from design to installation" />
                <Feature text="Energy-efficient and sustainable lighting options" />
                <Feature text="24/7 emergency repair and maintenance services" />
                <Feature text="Certified lighting and signage professionals" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work and relationships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Award className="w-12 h-12" />}
              title="Excellence"
              description="Committed to delivering the highest quality in every project"
            />
            <ValueCard 
              icon={<Users className="w-12 h-12" />}
              title="Partnership"
              description="Building lasting relationships with our clients"
            />
            <ValueCard 
              icon={<Shield className="w-12 h-12" />}
              title="Integrity"
              description="Honest and transparent in all our dealings"
            />
            <ValueCard 
              icon={<Zap className="w-12 h-12" />}
              title="Innovation"
              description="Embracing new technologies and solutions"
            />
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600">Providing comprehensive lighting and signage solutions across the Chicago metropolitan area</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceArea 
              region="Chicago"
              description="Serving businesses throughout Chicago with comprehensive lighting and signage solutions"
              landmarks="Loop, River North, West Loop"
            />
            <ServiceArea 
              region="Northern Suburbs"
              description="Expert services for businesses in Chicago's northern communities"
              landmarks="Evanston, Skokie, Wilmette"
            />
            <ServiceArea 
              region="Western Suburbs"
              description="Supporting businesses across western Chicago suburbs"
              landmarks="Oak Park, Naperville, Aurora"
            />
            <ServiceArea 
              region="Southern Suburbs"
              description="Reliable service for Chicago's southern suburban areas"
              landmarks="Oak Lawn, Orland Park, Tinley Park"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12245849588"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 224 584 9588
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ text }) => (
  <div className="flex items-center space-x-2">
    <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-center text-green-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceArea = ({ region, description, landmarks }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-green-600 w-8 h-8 mb-4">
      <MapPin />
    </div>
    <h3 className="text-xl font-semibold mb-2">{region}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <p className="text-sm text-gray-500">{landmarks}</p>
  </div>
);

export default About;