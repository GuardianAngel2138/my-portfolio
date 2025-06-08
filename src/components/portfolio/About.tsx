
import { User, MapPin, Code, Heart, ExternalLink } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins dark:text-white">
            About <span className="text-soft-blue">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center md:text-left">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-2xl mx-auto md:mx-0 overflow-hidden shadow-xl">
                  <img 
                    src="public/img/Untitled-1.png" 
                    alt="Abhinav Krishna S" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-soft-green rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-soft-blue">
                <User className="w-6 h-6" />
                <h3 className="text-2xl font-semibold font-poppins dark:text-white">Hello, I'm Abhinav</h3>
              </div>
              
              <p className="text-lg text-warm-gray dark:text-gray-300 leading-relaxed font-inter">
                I'm a passionate web development student currently pursuing my BCA, with a strong foundation in 
                front-end technologies and expanding into full-stack development. I love creating 
                digital experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-warm-gray dark:text-gray-300 leading-relaxed font-inter">
                I co-founded <a 
                  href="https://avensora.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-soft-blue hover:text-soft-purple transition-colors duration-300 font-semibold inline-flex items-center gap-1"
                >
                  Avensora <ExternalLink className="w-4 h-4" />
                </a>, where we focus on creating innovative digital solutions. 
                When I'm not coding, you'll find me exploring new technologies, working on personal projects, 
                or learning the latest development trends.
              </p>
              
              <div className="flex items-center gap-3 text-soft-green">
                <MapPin className="w-5 h-5" />
                <span className="font-medium dark:text-gray-300">Perumbavoor, Ernakulam, Kerala, India</span>
              </div>
              
              <div className="flex items-center gap-3 text-soft-pink">
                <Heart className="w-5 h-5" />
                <span className="font-medium dark:text-gray-300">Passionate about creating amazing web experiences</span>
              </div>
              
              <div className="pt-4">
                <button 
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-gradient-to-r from-soft-green to-soft-blue text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
