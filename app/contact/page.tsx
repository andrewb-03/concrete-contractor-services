import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Vazquez Millan Concrete",
  description:
    "Contact Vazquez Millan Concrete for a free estimate on your concrete or asphalt project in San Jose, CA. Call (408) 690-8051 or fill out our online form.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(408) 690-8051",
    href: "tel:4086908051",
  },
  {
    icon: Mail,
    label: "Email",
    value: "avazquez@mvconcrete.net",
    href: "mailto:avazquez@mvconcrete.net",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Jose, CA — Serving the South Bay",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 7:00 AM – 6:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        subtitle="Get a free estimate for your concrete or asphalt project."
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-concrete-gray leading-relaxed mb-8">
                Ready to start your project? Fill out the form and we&apos;ll get
                back to you within 24 hours with a free, no-obligation estimate.
                Or give us a call — we love talking shop.
              </p>

              <div className="space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-concrete-dark flex items-center justify-center flex-shrink-0 border border-amber-brand/30">
                      <Icon size={16} className="text-amber-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-concrete-gray uppercase tracking-widest font-body mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-concrete-offwhite hover:text-amber-brand transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-concrete-offwhite">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-concrete-dark border-l-4 border-amber-brand">
                <p className="text-xs text-concrete-gray uppercase tracking-widest mb-1">
                  License
                </p>
                <p className="font-display text-xl text-amber-brand">
                  #1047443
                </p>
                <p className="text-xs text-concrete-gray">
                  California Contractors License
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
