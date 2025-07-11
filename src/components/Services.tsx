
import { Palette, Code, Camera, Megaphone, Lightbulb, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description: "Creating memorable brand identities that resonate with your audience and stand the test of time."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, user-friendly websites that convert visitors into customers."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services that capture your brand's essence and tell your story."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that amplify your message and grow your business."
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "Innovative solutions and strategic thinking to solve complex creative challenges."
    },
    {
      icon: Target,
      title: "Consulting",
      description: "Expert guidance to help you make informed decisions about your creative projects."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive creative solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
