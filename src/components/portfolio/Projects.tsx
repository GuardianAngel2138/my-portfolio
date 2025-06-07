import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    title: "Plywood Company Website",
    description: "A modern, responsive website for a plywood manufacturing company showcasing their products and services with an elegant design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    title: "Personal Portfolio",
    description: "A clean and modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    title: "E-commerce Landing Page",
    description: "A responsive landing page for an e-commerce platform with modern design principles and optimized user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    title: "Task Management App",
    description: "A simple yet effective task management application built with React, featuring drag-and-drop functionality and local storage.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    technologies: ["React", "CSS", "Local Storage"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  }
];

const Projects = () => {
  const handleLiveDemo = (project: any) => {
    if (project.liveLink === "#") {
      alert(`${project.title} demo will be available soon!`);
    } else {
      window.open(project.liveLink, '_blank');
    }
  };

  const handleViewCode = (project: any) => {
    if (project.githubLink === "#") {
      alert(`${project.title} source code will be available soon!`);
    } else {
      window.open(project.githubLink, '_blank');
    }
  };

  const handleViewAllProjects = () => {
    alert('More projects coming soon! Stay tuned.');
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins dark:text-white">
            My <span className="text-soft-green">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Project */}
            <div className="lg:col-span-2">
              <div className="group relative bg-gradient-to-br from-pastel-blue to-pastel-purple dark:from-slate-700 dark:to-slate-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="absolute top-4 left-4 bg-soft-green text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Featured
                </div>
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 font-poppins dark:text-white">{projects[0].title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[0].technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/80 dark:bg-slate-700 text-soft-blue dark:text-soft-blue rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleLiveDemo(projects[0])}
                      className="flex items-center gap-2 px-4 py-2 bg-soft-blue text-white rounded-lg hover:bg-soft-blue/90 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button 
                      onClick={() => handleViewCode(projects[0])}
                      className="flex items-center gap-2 px-4 py-2 border border-soft-blue text-soft-blue rounded-lg hover:bg-soft-blue hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Projects */}
            <div className="space-y-6">
              {projects.slice(1).map((project, index) => (
                <div key={project.title} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 font-poppins dark:text-white">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-pastel-blue dark:bg-slate-700 text-soft-blue rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleLiveDemo(project)}
                        className="flex items-center gap-1 px-3 py-1 bg-soft-green text-white rounded text-sm hover:bg-soft-green/90 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </button>
                      <button 
                        onClick={() => handleViewCode(project)}
                        className="flex items-center gap-1 px-3 py-1 border border-soft-green text-soft-green rounded text-sm hover:bg-soft-green hover:text-white transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleViewAllProjects}
              className="px-8 py-3 bg-gradient-to-r from-soft-green to-soft-blue text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
