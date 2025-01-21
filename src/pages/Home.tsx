import React, { useEffect } from 'react';
import { ArrowRight, Lightbulb, Monitor, Building2, PenTool, CheckCircle, Clock, Award, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/LED4.jpg",
    title: "Illuminate Your Business Success",
    subtitle: "Transform your brand visibility with cutting-edge LED signs",
    link: "/services/led-signs"
  },
  {
    image: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Digital-Signage2-scaled.jpg",
    title: "Digital Signage Solutions",
    subtitle: "Dynamic displays for modern businesses",
    link: "/services/digital-signage"
  },
  {
    image: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/Store-and-monument-sign-cover.jpg",
    title: "Store & Monument Signs",
    subtitle: "Make a lasting impression with custom storefront and monument signage",
    link: "/services/monument-signs"
  },
  {
    image: "https://www.premierlightingandsign.com/wp-content/uploads/2025/01/PLS-Graphic-DESIGN.jpg",
    title: "Professional Design Services",
    subtitle: "Elevate your brand with expert design solutions",
    link: "/services/design-services"
  }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative" style={{ height: '700px' }}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${slide.image}")`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 rounded-lg p-8 max-w-4xl mx-4">
                    <div className="text-center text-white">
                      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                          href="tel:+12245849588"
                          className="flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          +1 224 584 9588
                        </a>
                        <Link
                          to={slide.link}
                          className="flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
                        >
                          Explore Services
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Stats Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="24/7" text="Support Available" />
            <Stat number="1000+" text="Projects Completed" />
            <Stat number="100%" text="Satisfaction" />
            <Stat number="15+" text="Service Areas" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive signage and design solutions to help your business stand out in today's competitive market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Lightbulb className="w-12 h-12" />}
              title="LED Sign Solutions"
              description="Energy-efficient LED signs that capture attention and drive business growth"
              link="/services/led-signs"
            />
            <ServiceCard 
              icon={<Monitor className="w-12 h-12" />}
              title="Digital Signage"
              description="Dynamic digital displays for engaging and interactive content delivery"
              link="/services/digital-signage"
            />
            <ServiceCard 
              icon={<Building2 className="w-12 h-12" />}
              title="Store & Monument Signs"
              description="Custom storefront and monument signs that establish a strong physical presence"
              link="/services/monument-signs"
            />
            <ServiceCard 
              icon={<PenTool className="w-12 h-12" />}
              title="Design Services"
              description="Professional design services to elevate your brand identity"
              link="/services/design-services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Premier Lighting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Award className="w-12 h-12" />}
              title="Expert Craftsmanship"
              description="Our team of certified professionals ensures the highest quality in every project"
            />
            <FeatureCard
              icon={<Clock className="w-12 h-12" />}
              title="24/7 Support"
              description="Round-the-clock service and support when you need it most"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Customer First"
              description="Dedicated to exceeding client expectations with personalized solutions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you create a lasting impression
          </p>
          <a 
            href="tel:+12245849588"
            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Call Now: +1 224 584 9588
          </a>
        </div>
      </section>
    </div>
  );
};

const Stat = ({ number, text }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-gray-100">{text}</div>
  </div>
);

const ServiceCard = ({ icon, title, description, link }) => (
  <Link to={link} className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="text-green-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <span className="text-green-600 font-semibold flex items-center">
      Learn More
      <ArrowRight className="ml-2 h-4 w-4" />
    </span>
  </Link>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
    <div className="flex justify-center text-green-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;