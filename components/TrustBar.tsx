import { ShieldCheck, Clock, FileCheck, Building2 } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "8+ Years Experience" },
  { icon: ShieldCheck, label: "Licensed & Insured · #1047443" },
  { icon: FileCheck, label: "Free Estimates" },
  { icon: Building2, label: "Residential & Commercial" },
];

export default function TrustBar() {
  return (
    <section className="bg-concrete-dark border-y border-concrete-charcoal py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={18} className="text-amber-brand flex-shrink-0" />
              <span className="text-sm font-body text-concrete-offwhite tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
