import React from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

interface EventsProps {
  darkMode: boolean;
}

const Events: React.FC<EventsProps> = ({ darkMode }) => {
  const upcomingEvents = [
    {
      title: 'Kubernetes Security Workshop',
      date: '2024-02-15',
      time: '2:00 PM - 4:00 PM EST',
      type: 'Workshop',
      location: 'Virtual',
      attendees: 45,
      maxAttendees: 50,
      description: 'Hands-on workshop covering Kubernetes security best practices, RBAC, network policies, and security scanning.',
      speaker: 'Sarah Chen, Senior DevOps Engineer',
      featured: true
    },
    {
      title: 'GitOps Meetup: ArgoCD Deep Dive',
      date: '2024-02-22',
      time: '6:00 PM - 8:00 PM EST',
      type: 'Meetup',
      location: 'Virtual',
      attendees: 32,
      maxAttendees: 100,
      description: 'Exploring ArgoCD features, deployment strategies, and real-world GitOps implementations.',
      speaker: 'Mike Rodriguez, Platform Architect'
    },
    {
      title: 'Infrastructure as Code Webinar',
      date: '2024-03-01',
      time: '1:00 PM - 2:30 PM EST',
      type: 'Webinar',
      location: 'Virtual',
      attendees: 78,
      maxAttendees: 200,
      description: 'Comparing Terraform, Pulumi, and AWS CDK for modern infrastructure management.',
      speaker: 'Alex Thompson, Cloud Solutions Architect'
    },
    {
      title: 'DevOps Career Panel Discussion',
      date: '2024-03-08',
      time: '7:00 PM - 8:30 PM EST',
      type: 'Panel',
      location: 'Virtual',
      attendees: 23,
      maxAttendees: 150,
      description: 'Career advice, skill development, and industry insights from experienced DevOps professionals.',
      speaker: 'Panel of Industry Experts'
    }
  ];

  const pastEvents = [
    {
      title: 'Docker Optimization Techniques',
      date: '2024-01-18',
      type: 'Workshop',
      attendees: 42
    },
    {
      title: 'Monitoring with Prometheus & Grafana',
      date: '2024-01-11',
      type: 'Webinar',
      attendees: 89
    },
    {
      title: 'CI/CD Pipeline Best Practices',
      date: '2024-01-04',
      type: 'Meetup',
      attendees: 56
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      Workshop: darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800',
      Meetup: darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800',
      Webinar: darkMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800',
      Panel: darkMode ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || colors.Webinar;
  };

  return (
    <section id="events" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Upcoming Events & Workshops
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Join our community events to learn, network, and stay updated with the latest DevOps trends. 
            From hands-on workshops to expert panels, there's something for everyone.
          </p>
        </div>

        {/* Featured Event */}
        <div className={`mb-12 p-8 rounded-2xl ${
          darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        } border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Featured Event
                </span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getEventTypeColor(upcomingEvents[0].type)}`}>
                  {upcomingEvents[0].type}
                </span>
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {upcomingEvents[0].title}
              </h3>
              
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {upcomingEvents[0].description}
              </p>
              
              <div className={`grid sm:grid-cols-2 gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{upcomingEvents[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{upcomingEvents[0].time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{upcomingEvents[0].location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>{upcomingEvents[0].attendees}/{upcomingEvents[0].maxAttendees} registered</span>
                </div>
              </div>
              
              <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong>Speaker:</strong> {upcomingEvents[0].speaker}
              </p>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {upcomingEvents[0].maxAttendees - upcomingEvents[0].attendees}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Spots Available
                  </div>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2">
                <span>Register Now</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            All Upcoming Events
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.slice(1).map((event, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {event.attendees}/{event.maxAttendees} registered
                  </div>
                </div>
                
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {event.title}
                </h4>
                
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {event.description}
                </p>
                
                <div className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Past Events
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {event.attendees} attended
                  </span>
                </div>
                
                <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {event.title}
                </h4>
                
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;