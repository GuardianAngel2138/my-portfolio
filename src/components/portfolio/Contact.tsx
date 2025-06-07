
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Instagram } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 dark:from-slate-800/50 dark:to-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins dark:text-white">
              Get In <span className="text-soft-blue">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 rounded-2xl p-8 backdrop-blur-sm shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 font-poppins">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-soft-blue to-soft-purple rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:abhinavkrishnas@avensora.in" className="text-soft-blue hover:underline">
                        abhinavkrishnas@avensora.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-soft-green to-soft-blue rounded-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/+919847598803" className="text-soft-green hover:underline">
                        +91 984 759 8803
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-soft-pink to-soft-purple rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Perumbavoor, Ernakulam, Kerala, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-medium text-gray-800 mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/abhinav_krishna_s_/" 
                      className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    {/* <a 
                      href="https://github.com/abhinav_krishna_s_" 
                      className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a> */}
                    <a 
                      href="https://www.linkedin.com/in/abhinav-krishna-s/" 
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Quick Info */}
              <div className="bg-gradient-to-br from-soft-blue to-soft-purple rounded-2xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">Quick Response</h4>
                <p className="opacity-90">
                  I typically respond to emails within 24 hours and WhatsApp messages within a few hours during business days.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 font-poppins">Send Me a Message</h3>
              
              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-soft-blue to-soft-purple text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form> */}
              <div className="rounded-2xl p-8 shadow-xl">
                <h3 className=" font-semibold font-poppins">This feature is coming soon</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              © 2024 Abhinav Krishna S. Built with React & Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with ❤️ for creating amazing web experiences
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
