import { X } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: {
    title: string;
    fullCase: {
      challenge: string;
      solution: string;
      implementation: string;
      timeline: string;
      budget: string;
      ROI: string;
    };
  };
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Challenge</h3>
            <p className="text-gray-600">{caseStudy.fullCase.challenge}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p className="text-gray-600 whitespace-pre-line">{caseStudy.fullCase.solution}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Implementation</h3>
            <p className="text-gray-600 whitespace-pre-line">{caseStudy.fullCase.implementation}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700">Timeline</h4>
              <p className="text-indigo-600 font-semibold">{caseStudy.fullCase.timeline}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700">Budget</h4>
              <p className="text-indigo-600 font-semibold">{caseStudy.fullCase.budget}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700">ROI</h4>
              <p className="text-indigo-600 font-semibold">{caseStudy.fullCase.ROI}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}