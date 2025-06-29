import React from 'react';
import { ArrowRight, Code, Cloud, Zap } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`pt-16 min-h-screen flex items-center ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-400' : 'bg-green-500'} animate-pulse`}></div>
                <span className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Community Active
                </span>
              </div>
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  DevOps Insiders
                </span>
              </h1>
              <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A collective of DevOps professionals passionate about modern infrastructure, 
                CI/CD, cloud-native tools, automation, and collaborative learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group"
              >
                Explore Our Mission
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center px-6 py-3 border-2 font-medium rounded-lg transition-colors ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Join Community
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Code className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Infrastructure as Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Cloud Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className={`w-5 h-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Automation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20 animate-pulse`}></div>
            <div className={`relative p-8 rounded-2xl border ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
            } backdrop-blur-sm`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    pipeline.yml
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className={`font-mono text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">stages:</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>- build</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>- test</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span>- deploy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;