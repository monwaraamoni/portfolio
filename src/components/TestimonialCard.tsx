interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({ name, role, company, testimonial, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  );
}