
import { Code, Palette, Database, Globe, Smartphone, GitBranch } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-8 h-8" />,
    color: "from-soft-blue to-soft-purple",
    bgColor: "bg-pastel-blue",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Programming",
    icon: <Database className="w-8 h-8" />,
    color: "from-soft-purple to-soft-pink",
    bgColor: "bg-pastel-purple",
    skills: ["Python", "JavaScript ES6+", "Object-Oriented Programming", "Data Structures"]
  },
  {
    category: "Tools & Platforms",
    icon: <Globe className="w-8 h-8" />,
    color: "from-soft-green to-soft-blue",
    bgColor: "bg-pastel-green",
    skills: ["VS Code", "GitHub", "Hostinger", "Vercel", "Zoho"]
  },
  {
    category: "Development",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-soft-pink to-soft-green",
    bgColor: "bg-pastel-pink",
    skills: ["Version Control", "Responsive Design", "Problem Solving", "Clean Code"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pastel-purple/30 to-pastel-green/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            My <span className="text-soft-purple">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <div 
                key={skillCategory.category}
                className="group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${skillCategory.bgColor} rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skillCategory.color} text-white mb-4`}>
                    {skillCategory.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-800">
                    {skillCategory.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-2 text-gray-700"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-soft-blue to-soft-purple rounded-full"></div>
                        <span className="font-inter">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Skill Progress Bars */}
          <div className="mt-16 bg-white/60 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center font-poppins">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "HTML/CSS", level: 90 },
                { name: "JavaScript", level: 80 },
                { name: "React", level: 70 },
                { name: "Python", level: 75 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Git/GitHub", level: 75 }
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-soft-blue to-soft-purple h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
