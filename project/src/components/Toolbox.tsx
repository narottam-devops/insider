import React from 'react';
import { Container, Cloud, GitBranch, Settings, Database, Shield } from 'lucide-react';

interface ToolboxProps {
  darkMode: boolean;
}

const Toolbox: React.FC<ToolboxProps> = ({ darkMode }) => {
  const tools = [
    {
      category: 'Containerization',
      icon: Container,
      color: 'blue',
      tools: [
        { name: 'Docker', description: 'Container platform for packaging applications' },
        { name: 'Kubernetes', description: 'Container orchestration at scale' },
        { name: 'Helm', description: 'Package manager for Kubernetes' }
      ]
    },
    {
      category: 'Infrastructure as Code',
      icon: Cloud,
      color: 'purple',
      tools: [
        { name: 'Terraform', description: 'Infrastructure provisioning and management' },
        { name: 'Ansible', description: 'Configuration management and automation' },
        { name: 'Pulumi', description: 'Modern infrastructure as code' }
      ]
    },
    {
      category: 'CI/CD Platforms',
      icon: GitBranch,
      color: 'green',
      tools: [
        { name: 'GitHub Actions', description: 'Automated workflows and deployments' },
        { name: 'Azure DevOps', description: 'End-to-end DevOps toolchain' },
        { name: 'Jenkins', description: 'Open-source automation server' }
      ]
    },
    {
      category: 'Monitoring & Observability',
      icon: Settings,
      color: 'yellow',
      tools: [
        { name: 'Prometheus', description: 'Metrics collection and alerting' },
        { name: 'Grafana', description: 'Data visualization and dashboards' },
        { name: 'ELK Stack', description: 'Logging and search analytics' }
      ]
    },
    {
      category: 'Cloud Platforms',
      icon: Database,
      color: 'indigo',
      tools: [
        { name: 'AWS', description: 'Amazon Web Services cloud platform' },
        { name: 'Azure', description: 'Microsoft cloud computing services' },
        { name: 'GCP', description: 'Google Cloud Platform services' }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'red',
      tools: [
        { name: 'HashiCorp Vault', description: 'Secrets management and encryption' },
        { name: 'Snyk', description: 'Security scanning and vulnerability management' },
        { name: 'OWASP ZAP', description: 'Web application security testing' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600',
      purple: darkMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600',
      green: darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600',
      yellow: darkMode ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-600',
      indigo: darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600',
      red: darkMode ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="toolbox" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our DevOps Toolbox
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore the cutting-edge tools and technologies that power modern DevOps workflows. 
            From containerization to monitoring, we cover the entire ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {tool.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-2xl text-center ${
          darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Stay Updated with Latest Tools
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The DevOps landscape evolves rapidly. Join our community to stay informed about new tools, 
            updates, and best practices as they emerge.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;