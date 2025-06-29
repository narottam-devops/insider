import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Community: [
      { name: 'Discord', href: '#' },
      { name: 'Slack', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Events', href: '#events' }
    ],
    Resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Toolbox', href: '#toolbox' },
      { name: 'Tutorials', href: '#' },
      { name: 'Best Practices', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/image.png" 
                alt="DevOps Insiders Logo" 
                className="w-8 h-8"
              />
              <div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  DevOps Insiders
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Build. Automate. Evolve.
                </p>
              </div>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A collective of DevOps professionals passionate about modern infrastructure, 
              CI/CD, and collaborative learning.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors hover:text-blue-500 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} DevOps Insiders. All rights reserved.
            </div>
            <div className={`flex items-center space-x-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>by the DevOps community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;