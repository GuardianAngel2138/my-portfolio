
import { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Aspiring Full-Stack Developer who blends clean code with creative design.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Placeholder for CV download - you can replace with actual CV file
    alert('CV download will be available soon!');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-soft-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-soft-pink rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 bg-gradient-to-r from-soft-blue via-soft-purple to-soft-pink bg-clip-text text-transparent">
            Abhinav Krishna S
          </h1>
          
          <div className="h-24 md:h-16 mb-8">
            <p className="text-xl md:text-2xl text-warm-gray dark:text-gray-300 font-inter leading-relaxed">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg text-warm-gray/80 dark:text-gray-400 mb-2 font-inter">
            Based in Perumbavoor, Ernakulam, Kerala, India
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-soft-blue to-soft-purple text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={downloadCV}
              className="px-8 py-3 border-2 border-soft-blue text-soft-blue dark:text-soft-blue rounded-full font-medium hover:bg-soft-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-soft-blue" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
