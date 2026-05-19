import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  services?: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  services,
}: ServiceCardProps) {
  return (
    <div className="service-card group flex flex-col h-full">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-concrete-charcoal flex items-center justify-center">
          <Icon size={24} className="text-amber-brand" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl text-concrete-offwhite tracking-wide mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-concrete-gray leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Subservices list */}
      {services && services.length > 0 && (
        <ul className="mb-5 space-y-1">
          {services.map((s) => (
            <li
              key={s}
              className="text-xs text-concrete-gray flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-amber-brand rounded-full flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      <Link
        href={href}
        className="flex items-center gap-2 text-amber-brand text-sm font-body tracking-wide hover:gap-3 transition-all duration-200 mt-auto"
      >
        Learn More <ArrowRight size={15} />
      </Link>
    </div>
  );
}
