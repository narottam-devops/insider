import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const blogPosts = [
    {
      title: 'Kubernetes Security Best Practices for 2024',
      excerpt: 'Essential security measures every DevOps team should implement when deploying Kubernetes clusters in production environments.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Security',
      featured: true
    },
    {
      title: 'GitOps vs Traditional CI/CD: A Comprehensive Comparison',
      excerpt: 'Exploring the differences between GitOps and traditional CI/CD approaches, with real-world examples and implementation strategies.',
      author: 'Mike Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'CI/CD'
    },
    {
      title: 'Infrastructure as Code with Terraform: Advanced Patterns',
      excerpt: 'Deep dive into advanced Terraform patterns including modules, workspaces, and state management for large-scale infrastructure.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '15 min read',
      category: 'IaC'
    },
    {
      title: 'Monitoring Microservices: Observability Strategies',
      excerpt: 'Comprehensive guide to implementing observability in microservices architectures using modern monitoring tools and techniques.',
      author: 'Lisa Park',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Monitoring'
    },
    {
      title: 'Docker Multi-Stage Builds: Optimization Techniques',
      excerpt: 'Learn how to optimize your Docker images using multi-stage builds, reducing size and improving security.',
      author: 'David Kumar',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Containers'
    },
    {
      title: 'Azure DevOps vs GitHub Actions: Feature Comparison',
      excerpt: 'Detailed comparison of Azure DevOps and GitHub Actions, helping you choose the right platform for your team.',
      author: 'Emma Wilson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Tools'
    }
  ];

  const categories = ['All', 'Security', 'CI/CD', 'IaC', 'Monitoring', 'Containers', 'Tools'];

  return (
    <section id="blog" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            DevOps Insights & Tutorials
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay updated with the latest DevOps trends, tutorials, and insights from our community of experts. 
            Learn from real-world experiences and practical implementations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className={`mb-12 p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Featured
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {blogPosts[0].category}
                </span>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {blogPosts[0].title}
              </h3>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {blogPosts[0].excerpt}
              </p>
              <div className={`flex items-center space-x-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Featured Article</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
              }`}
            >
              <div className="mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {post.category}
                </span>
              </div>
              
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {post.title}
              </h3>
              
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {post.excerpt}
              </p>
              
              <div className={`flex items-center justify-between text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <div className="flex items-center space-x-3">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`px-8 py-3 border-2 font-medium rounded-lg transition-colors ${
            darkMode 
              ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}>
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;