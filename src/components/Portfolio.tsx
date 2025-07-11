
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Modern E-commerce Platform",
      category: "Web Development",
      image: "photo-1498050108023-c5249f4df085",
      description: "A complete e-commerce solution with modern design and seamless user experience."
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "photo-1487058792275-0ad4aaf24ca7",
      description: "Comprehensive brand identity including logo, guidelines, and marketing materials."
    },
    {
      title: "Creative Campaign",
      category: "Marketing",
      image: "photo-1581091226825-a6a2a5aee158",
      description: "Multi-channel marketing campaign that increased brand awareness by 300%."
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "photo-1461749280684-dccba630e2f6",
      description: "Intuitive mobile application design focused on user experience and engagement."
    },
    {
      title: "Corporate Photography",
      category: "Photography",
      image: "photo-1486312338219-ce68d2c6f44d",
      description: "Professional corporate photography showcasing company culture and values."
    },
    {
      title: "Digital Transformation",
      category: "Strategy",
      image: "photo-1649972904349-6e44c42644a7",
      description: "Complete digital transformation strategy and implementation for enterprise client."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their creative goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop&crop=center`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
