import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  neighborhood: string;
  review: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  neighborhood,
  review,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-concrete-dark border border-concrete-charcoal p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-200">
      {/* Quote mark */}
      <div className="font-display text-6xl text-amber-brand leading-none mb-3 select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="text-amber-brand fill-amber-brand"
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm text-concrete-light leading-relaxed flex-grow mb-5">
        {review}
      </p>

      {/* Attribution */}
      <div className="border-t border-concrete-charcoal pt-4">
        <p className="font-display text-base text-concrete-offwhite tracking-wide">
          {name}
        </p>
        <p className="text-xs text-concrete-gray">{neighborhood}</p>
      </div>
    </div>
  );
}
