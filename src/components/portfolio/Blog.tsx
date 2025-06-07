
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Swal from 'sweetalert2';

const blogPosts = [
  {
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    excerpt: "Learn how to create modern, responsive layouts using the power of CSS Grid and Flexbox. Tips and tricks for better web design.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    link: "#"
  },
  {
    title: "Getting Started with React Hooks",
    excerpt: "A comprehensive guide to React Hooks and how they can simplify your component logic and state management.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    link: "#"
  },
  {
    title: "The Importance of Clean Code in Web Development",
    excerpt: "Why writing clean, maintainable code matters and how it impacts project success and team collaboration.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    link: "#"
  }
];

const Blog = () => {
  const handleReadMore = (title: string) => {
    Swal.fire({
      title: 'Coming Soon!',
      text: `The blog post "${title}" will be available soon. Stay tuned!`,
      icon: 'info',
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#EC4899'
    });
  };

  const handleViewAllPosts = () => {
    Swal.fire({
      title: 'Blog Section Coming Soon!',
      text: 'I\'m working on creating amazing content for you. Follow my social media for updates!',
      icon: 'info',
      confirmButtonText: 'Awesome!',
      confirmButtonColor: '#EC4899'
    });
  };

  const handleSubscribe = () => {
    Swal.fire({
      title: 'Subscribe to Newsletter',
      html: `
        <input id="email" class="swal2-input" placeholder="Enter your email address" type="email">
      `,
      confirmButtonText: 'Subscribe',
      confirmButtonColor: '#EC4899',
      showCancelButton: true,
      preConfirm: () => {
        const email = (document.getElementById('email') as HTMLInputElement)?.value;
        if (!email) {
          Swal.showValidationMessage('Please enter your email address');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage('Please enter a valid email address');
          return false;
        }
        return email;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Thank you!',
          text: 'You\'ll be notified when new content is available!',
          icon: 'success',
          confirmButtonColor: '#EC4899'
        });
      }
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-gray-900 dark:text-white">
              Latest <span className="text-soft-pink">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sharing my learning journey, insights, and discoveries in web development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 dark:border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 text-soft-blue rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 font-poppins text-gray-900 dark:text-white group-hover:text-soft-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => handleReadMore(post.title)}
                    className="flex items-center gap-2 text-soft-blue font-medium hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleViewAllPosts}
                className="px-8 py-3 bg-gradient-to-r from-soft-pink to-soft-purple text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View All Posts
              </button>
              <button 
                onClick={handleSubscribe}
                className="px-8 py-3 border-2 border-soft-pink text-soft-pink dark:text-soft-pink rounded-full font-medium hover:bg-soft-pink hover:text-white transition-all duration-300"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
          
          {/* Blog Stats */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              { number: "25+", label: "Articles Written" },
              { number: "5K+", label: "Total Reads" },
              { number: "50+", label: "Happy Readers" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-pastel-pink to-pastel-purple dark:from-slate-700 dark:to-slate-600 rounded-xl"
              >
                <div className="text-3xl font-bold text-soft-purple dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
