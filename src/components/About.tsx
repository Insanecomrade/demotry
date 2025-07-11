
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Award, number: "100+", label: "Projects Completed" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Heart, number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Studio Co</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a passion for creative excellence, Studio Co has been at the forefront of innovative design and strategic thinking for over five years. We believe that great design is not just about aesthetics—it's about solving problems and creating meaningful connections between brands and their audiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of talented designers, developers, and strategists work collaboratively to bring your vision to life. We're not just service providers; we're creative partners invested in your success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower businesses through exceptional creative solutions that drive growth, inspire audiences, and create lasting impact in the digital landscape.
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop&crop=face"
                  alt="Team"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-blue-100">Creative Director</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
