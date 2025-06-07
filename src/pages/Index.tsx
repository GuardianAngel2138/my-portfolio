
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Education from '../components/portfolio/Education';
// import Blog from '../components/portfolio/Blog';
import MoreComingSoon from '../components/portfolio/MoreComingSoon';
import Contact from '../components/portfolio/Contact';
import ThemeToggle from '../components/ui/theme-toggle';
import { Button } from '../components/ui/button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-white to-pastel-green dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog /> */}
      <MoreComingSoon />
      <Contact />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 bg-soft-blue hover:bg-soft-blue/90 shadow-lg animate-fade-in"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
