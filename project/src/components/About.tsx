import React from 'react';
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by DevOps professionals, for DevOps professionals. Share knowledge, learn together, and grow your career.'
    },
    {
      icon: Target,
      title: 'Mission Focused',
      description: 'Advancing DevOps practices through collaboration, education, and hands-on experience with cutting-edge tools.'
    },
    {
      icon: Lightbulb,
      title: 'Knowledge Sharing',
      description: 'Regular workshops, tutorials, and discussions on the latest trends in infrastructure, automation, and cloud technologies.'
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Stay ahead of the curve with early access to new tools, techniques, and best practices in the DevOps ecosystem.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About DevOps Insiders
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We are a passionate community of DevOps professionals dedicated to advancing modern infrastructure practices, 
            fostering collaboration, and sharing knowledge across the entire DevOps ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                darkMode ? 'bg-blue-600' : 'bg-blue-100'
              }`}>
                <feature.icon className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Goals
              </h3>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Foster a collaborative environment for DevOps learning and growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Share practical insights and real-world experiences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Promote best practices in infrastructure automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Build bridges between development and operations teams</span>
                </li>
              </ul>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Who We Are
              </h4>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                DevOps Insiders brings together engineers, architects, and leaders from diverse backgrounds 
                who share a common passion for streamlining software delivery, improving system reliability, 
                and embracing the culture of continuous improvement that defines modern DevOps practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;