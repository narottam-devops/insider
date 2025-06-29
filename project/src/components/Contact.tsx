import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Join Our Community
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to connect with fellow DevOps professionals? Join our community, ask questions, 
            share insights, or get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Community Links */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect With Us
              </h3>
              
              <div className="space-y-4">
                <a
                  href="#"
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Discord Community
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Join our active Discord server for real-time discussions
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Slack Workspace
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Professional discussions and knowledge sharing
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      GitHub Organization
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Contribute to open-source DevOps projects
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Community Guidelines
              </h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Be respectful and professional in all interactions</li>
                <li>• Share knowledge and help others learn</li>
                <li>• Stay on-topic and relevant to DevOps discussions</li>
                <li>• No spam, self-promotion, or off-topic content</li>
                <li>• Follow platform-specific rules and guidelines</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
            <div className="flex items-center space-x-3 mb-6">
              <Mail className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Get In Touch
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="community">Community Questions</option>
                  <option value="events">Event Information</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;