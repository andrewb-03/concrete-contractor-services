import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const serviceLinks = [
  { label: "Foundations", href: "/services/foundations" },
  { label: "Flat Concrete Work", href: "/services/flat-concrete-work" },
  { label: "Commercial Concrete", href: "/services/commercial-concrete" },
  { label: "Masonry Services", href: "/services/masonry-services" },
  { label: "Asphalt Services", href: "/services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Contact", href: "/contact" },
];

const reviewLinks = [
  {
    label: "Google Maps",
    href: "https://www.google.com/maps/place/Vazquez+Millan+Concrete/@37.2964625,-122.0975973,10z/",
  },
  {
    label: "Yelp",
    href: "https://yelp.com/biz/vazquez-millan-concrete-san-jose",
  },
  {
    label: "HomeAdvisor",
    href: "https://www.homeadvisor.com/rated.VazquezMillanConcrete.82820722.html",
  },
  {
    label: "BBB",
    href: "https://www.bbb.org/us/ca/san-jose/profile/concrete-contractors/vazquez-millan-concrete-inc-1216-1297629",
  },
];

export default function Footer() {
  return (
    <footer className="bg-concrete-dark border-t border-concrete-charcoal">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-display text-2xl text-concrete-offwhite tracking-widest">
                VAZQUEZ MILLAN
              </span>
              <span className="font-display text-sm text-amber-brand tracking-[0.4em]">
                CONCRETE
              </span>
            </Link>
            <p className="text-concrete-gray text-sm leading-relaxed mb-4">
              Licensed concrete and asphalt contractor serving San Jose and the
              South Bay. 8+ years of quality craftsmanship.
            </p>
            <p className="text-xs text-concrete-gray">
              CA Contractors License{" "}
              <span className="text-amber-brand">#1047443</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-concrete-offwhite tracking-widest mb-4 border-b border-amber-brand pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-concrete-gray hover:text-amber-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-concrete-offwhite tracking-widest mb-4 border-b border-amber-brand pb-2 inline-block">
              SERVICES
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-concrete-gray hover:text-amber-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-concrete-offwhite tracking-widest mb-4 border-b border-amber-brand pb-2 inline-block">
              CONTACT
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="tel:4086908051"
                  className="flex items-center gap-2 text-sm text-concrete-gray hover:text-amber-brand transition-colors"
                >
                  <Phone size={14} className="text-amber-brand flex-shrink-0" />
                  (408) 690-8051
                </a>
              </li>
              <li>
                <a
                  href="mailto:avazquez@mvconcrete.net"
                  className="flex items-center gap-2 text-sm text-concrete-gray hover:text-amber-brand transition-colors"
                >
                  <Mail size={14} className="text-amber-brand flex-shrink-0" />
                  avazquez@mvconcrete.net
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-concrete-gray">
                <MapPin
                  size={14}
                  className="text-amber-brand flex-shrink-0 mt-0.5"
                />
                San Jose, CA — Serving the South Bay
              </li>
            </ul>

            {/* Review Links */}
            <h5 className="font-display text-sm text-concrete-offwhite tracking-widest mb-3">
              FIND US ON
            </h5>
            <ul className="space-y-1.5">
              {reviewLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-concrete-gray hover:text-amber-brand transition-colors"
                  >
                    <ExternalLink size={11} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-concrete-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-concrete-gray">
            © {new Date().getFullYear()} Vazquez Millan Concrete Inc. All rights
            reserved.
          </p>
          <p className="text-xs text-concrete-gray">
            San Jose, CA · CA License{" "}
            <span className="text-amber-brand">#1047443</span>
          </p>
          <p className="text-xs text-concrete-gray/50 mt-1 sm:mt-0">
            Engineered by{" "}
            <a
              href="https://abrockenborough.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-brand transition-colors"
            >
              abrockenborough.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
