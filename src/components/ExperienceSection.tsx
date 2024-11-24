interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export default function ExperienceSection({ experiences }: { experiences: ExperienceProps[] }) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-indigo-600 font-medium">{exp.company}</p>
            </div>
            <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
          </div>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}