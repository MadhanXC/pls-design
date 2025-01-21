import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const services = [
    { name: 'LED Signs', path: '/services/led-signs' },
    { name: 'Digital Signage', path: '/services/digital-signage' },
    { name: 'Store & Monument Signs', path: '/services/monument-signs' },
    { name: 'Design Services', path: '/services/design-services' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setTimeout(() => {
        setIsServicesOpen(false);
      }, 100);
    }
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className="text-2xl font-bold text-green-600">Premier Lighting & Sign</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            
            {/* Services Dropdown - Desktop */}
            <div className="relative" onMouseLeave={handleMouseLeave}>
              <button 
                ref={buttonRef}
                className="flex items-center text-gray-700 hover:text-green-600 py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  role="menu"
                  aria-orientation="vertical"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      onClick={() => setIsServicesOpen(false)}
                      role="menuitem"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            <a href="tel:+12245849588" className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              +1 224 584 9588
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Services Section - Mobile (Always Expanded) */}
            <div className="py-2">
              <div className="px-3 py-2 text-gray-700 font-medium">Services</div>
              <div className="pl-6">
                {services.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleServiceClick(service.path)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <Link 
              to="/blog" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:+12245849588" 
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mx-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 224 584 9588
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;