interface SkillProps {
  category: string;
  skills: string[];
}

export default function SkillsSection({ skills }: { skills: SkillProps[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,50 Q25,25 40,50 T70,50 T100,50" stroke="currentColor" fill="none" strokeWidth="2"/>
              <circle cx="50" cy="50" r="20" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}