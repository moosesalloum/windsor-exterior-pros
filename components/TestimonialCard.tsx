interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col gap-4 relative overflow-hidden">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#C87A20] fill-[#C87A20]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="relative">
        <span
          className="absolute -top-3 -left-1 text-6xl text-[#C87A20] opacity-25 font-serif leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="text-[#1A1A1A] leading-relaxed pt-4 flex-grow">
          {quote}
        </blockquote>
      </div>
      <div>
        <p className="font-heading font-bold text-[#1A1A1A] text-sm">{name}</p>
        <p className="text-[#C87A20] text-xs mt-0.5">{location}</p>
      </div>
    </div>
  );
}
