import { useState } from 'react';
import { 
  BarChart3, 
  Megaphone, 
  Search, 
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import PortfolioCard from './components/PortfolioCard';
import TestimonialCard from './components/TestimonialCard';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import { 
  heroData, 
  skillsData, 
  servicesData, 
  caseStudiesData, 
  testimonialsData,
  experienceData
} from './data/content';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto mt-16">
          <div className="flex flex-col items-center">
            <div className="mb-8 relative">
              <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-indigo-600 ring-offset-4">
                <img 
                  src={heroData.image}
                  alt={heroData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-3 rounded-full">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              {heroData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
              {heroData.description}
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section with Background Art */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M0,0 L4,0 L4,4 L0,4 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <SkillsSection skills={skillsData} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <ExperienceSection experiences={experienceData} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.id}
                Icon={index === 0 ? Search : index === 1 ? Megaphone : BarChart3}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <PortfolioCard 
                key={study.id}
                {...study}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;