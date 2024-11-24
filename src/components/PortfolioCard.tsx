import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  results: string[];
  fullCase: {
    challenge: string;
    solution: string;
    implementation: string;
    timeline: string;
    budget: string;
    ROI: string;
  };
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, image, results } = props;

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                <span className="text-gray-700">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CaseStudyModal 
          caseStudy={props}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}