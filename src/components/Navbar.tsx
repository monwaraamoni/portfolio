import { Menu, X, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Monwara Moni</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#portfolio" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="#testimonials" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#portfolio" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#testimonials" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#contact" className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
