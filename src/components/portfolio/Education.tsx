
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Web Development",
    institution: "Self-Directed Learning",
    location: "Online & Practice",
    period: "Ongoing",
    status: "Learning",
    description: "Actively learning modern web development technologies including React, JavaScript ES6+, and full-stack development concepts.",
    highlights: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    degree: "Python Programming",
    institution: "Self-learned / Certified",
    location: "Online Courses",
    period: "2023 - Present",
    status: "Certified",
    description: "Comprehensive study of Python programming fundamentals, data structures, and object-oriented programming concepts.",
    highlights: ["Python Basics", "Data Structures", "OOP", "Problem Solving"]
  },
  {
    degree: "IELTS Certification",
    institution: "IELTS Test Center",
    location: "Kerala, India",
    period: "[Score / Year]",
    status: "Certified",
    description: "International English Language Testing System certification demonstrating proficiency in English language skills.",
    highlights: ["Speaking", "Listening", "Reading", "Writing"]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "[College Name]",
    location: "Kerala, India",
    period: "[Year Completed]",
    status: "Completed",
    description: "Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.",
    highlights: ["Computer Science", "Programming", "Database Management", "Software Engineering"]
  },
  {
    degree: "Higher Secondary (Plus Two)",
    institution: "[School Name]",
    location: "Kerala, India",
    period: "[Year Completed]",
    status: "Completed",
    description: "Higher secondary education with focus on Science stream, building strong analytical and problem-solving foundation.",
    highlights: ["Mathematics", "Physics", "Computer Science", "English"]
  },
  {
    degree: "10th Grade (SSLC)",
    institution: "[School Name]",
    location: "Kerala, India",
    period: "[Year Completed]",
    status: "Completed",
    description: "Secondary School Leaving Certificate with comprehensive foundation in core academic subjects.",
    highlights: ["Mathematics", "Science", "English", "Social Studies"]
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pastel-green/30 to-pastel-blue/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            My <span className="text-soft-purple">Education</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-soft-blue to-soft-purple hidden md:block"></div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div 
                  key={item.degree}
                  className="relative flex flex-col md:flex-row gap-6 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-soft-blue to-soft-purple rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="md:ml-16 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-soft-blue to-soft-purple rounded-lg">
                          {item.degree.includes('Web Development') || item.degree.includes('Python') ? 
                            <BookOpen className="w-6 h-6 text-white" /> : 
                            <GraduationCap className="w-6 h-6 text-white" />
                          }
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 font-poppins">{item.degree}</h3>
                          <p className="text-soft-blue font-medium">{item.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 sm:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === 'Completed' 
                            ? 'bg-soft-green text-white' 
                            : item.status === 'Learning' || item.status === 'Ongoing'
                            ? 'bg-soft-blue text-white'
                            : 'bg-soft-purple text-white'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-soft-purple font-medium">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">Key Highlights</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span 
                            key={highlight}
                            className="px-3 py-1 bg-pastel-purple text-soft-purple rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white/80 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 font-poppins">Continuous Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                I believe in lifelong learning and staying updated with the latest technologies and industry trends. 
                Currently expanding my skills in React, Python, and exploring advanced web development concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
