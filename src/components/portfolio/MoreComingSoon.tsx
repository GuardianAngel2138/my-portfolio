
import { Sparkles, Rocket, Lightbulb, Target } from 'lucide-react';
import Swal from 'sweetalert2';

const MoreComingSoon = () => {
  const handleFollowJourney = () => {
    Swal.fire({
      title: 'Follow My Journey!',
      html: `
        <p class="mb-4">Choose how you'd like to stay connected:</p>
        <div class="flex flex-col gap-2">
          <button id="instagram" class="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
            Follow on Instagram
          </button>
          

          
          <button id="linkedin" class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Connect on LinkedIn
          </button>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        document.getElementById('instagram')?.addEventListener('click', () => {
          window.open('https://www.instagram.com/abhinav_krishna_s_/', '_blank');
          Swal.close();
        });
        document.getElementById('github')?.addEventListener('click', () => {
          window.open('https://github.com/', '_blank');
          Swal.close();
        });
        document.getElementById('linkedin')?.addEventListener('click', () => {
          window.open('https://www.linkedin.com/in/abhinav-krishna-s/', '_blank');
          Swal.close();
        });
      }
    });
  };

  const handleGetNotified = () => {
    Swal.fire({
      title: 'Get Notified!',
      html: `
        <div class="text-left">
          <p class="mb-4">Choose your notification preferences:</p>
          <div class="space-y-3">
            <label class="flex items-center">
              <input type="checkbox" id="newProjects" class="mr-3" checked>
              <span>New Project Releases</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" id="blogPosts" class="mr-3" checked>
              <span>Blog Post Updates</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" id="tutorials" class="mr-3">
              <span>Tutorial Releases</span>
            </label>
          </div>
          <input id="notifyEmail" class="w-full mt-4 px-3 py-2 border rounded-lg" placeholder="Enter your email address" type="email">
        </div>
      `,
      confirmButtonText: 'Subscribe',
      confirmButtonColor: '#8B5CF6',
      showCancelButton: true,
      preConfirm: () => {
        const email = (document.getElementById('notifyEmail') as HTMLInputElement)?.value;
        const newProjects = (document.getElementById('newProjects') as HTMLInputElement)?.checked;
        const blogPosts = (document.getElementById('blogPosts') as HTMLInputElement)?.checked;
        const tutorials = (document.getElementById('tutorials') as HTMLInputElement)?.checked;
        
        if (!email) {
          Swal.showValidationMessage('Please enter your email address');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage('Please enter a valid email address');
          return false;
        }
        if (!newProjects && !blogPosts && !tutorials) {
          Swal.showValidationMessage('Please select at least one notification type');
          return false;
        }
        
        return { email, preferences: { newProjects, blogPosts, tutorials } };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'You\'re now subscribed for updates. Thank you for your interest!',
          icon: 'success',
          confirmButtonColor: '#8B5CF6'
        });
      }
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pastel-orange/30 to-pastel-pink/30 dark:from-slate-800 dark:to-slate-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-soft-purple to-soft-pink rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
              More <span className="text-soft-purple">Coming Soon</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Exciting things are in the pipeline! I'm constantly working on new projects, 
              learning cutting-edge technologies, and expanding my skillset.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-soft-blue to-soft-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900 dark:text-white">New Projects</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Working on innovative web applications and exploring new technologies
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-soft-purple to-soft-pink rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900 dark:text-white">Blog & Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sharing my learning journey and technical insights with the community
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-soft-green to-soft-blue rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900 dark:text-white">Career Goals</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Pursuing opportunities in full-stack development and innovative tech solutions
              </p>
            </div>
          </div>
          
          <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              This space will evolve to showcase testimonials, detailed case studies, blog posts, 
              or whatever exciting direction my journey takes next. Follow my social media to stay in the loop!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleFollowJourney}
                className="px-6 py-3 bg-gradient-to-r from-soft-purple to-soft-pink text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Follow My Journey
              </button>
              {/* <button 
                onClick={handleGetNotified}
                className="px-6 py-3 border-2 border-soft-purple text-soft-purple dark:text-soft-purple rounded-full font-medium hover:bg-soft-purple hover:text-white transition-all duration-300"
              >
                Get Notified
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreComingSoon;
