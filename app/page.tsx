import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Layers,
  Truck,
  Hammer,
  Flame,
  Trophy,
  DollarSign,
  CalendarCheck,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Contractor Services | San Jose, CA | Vazquez Millan Concrete",
  description:
    "From driveways to retaining walls & foundations, Vazquez Millan Concrete offers affordable concrete services to the South Bay area.",
};

const serviceCategories = [
  {
    icon: Building2,
    title: "Foundations",
    description:
      "Structural concrete work built to code — foundation installation, repair, concrete basements, and retaining walls for residential and commercial properties.",
    href: "/services/foundations",
    services: [
      "Foundation Installation",
      "Concrete Basements",
      "Retaining Walls",
      "Foundation Repair",
    ],
  },
  {
    icon: Layers,
    title: "Flat Concrete Work",
    description:
      "Driveways, patios, walkways, and sidewalks — smooth, durable, and finished to your specs. We can even repair sidewalks if the city has flagged them.",
    href: "/services/flat-concrete-work",
    services: ["Patio", "Driveway", "Walkway", "Sidewalk Repair"],
  },
  {
    icon: Truck,
    title: "Commercial Concrete",
    description:
      "Large-scale commercial projects including parking structures, public works, road paving, piers, curbs, and more — across San Jose and Santa Clara County.",
    href: "/services/commercial-concrete",
    services: [
      "Parking Decks & Lots",
      "Road Paving",
      "Public Works Projects",
      "Concrete Curbs",
      "Piers",
    ],
  },
  {
    icon: Hammer,
    title: "Masonry Services",
    description:
      "Custom stonework, chimneys, fireplaces, mailboxes, and handcrafted stairways — stone and brick features built to last for your home or business.",
    href: "/services/masonry-services",
    services: [
      "Stone Work",
      "Chimney & Fireplaces",
      "Mailboxes",
      "Custom Stairways",
    ],
  },
  {
    icon: Flame,
    title: "Asphalt Services",
    description:
      "New asphalt installation, overlays, slurry sealing, and parking lot striping. Give your existing asphalt a much-needed upgrade or start fresh.",
    href: "/services",
    services: [
      "New Asphalt",
      "Asphalt Overlay",
      "Asphalt Slurry Sealer",
      "Parking Striping",
    ],
  },
];

const whyUsItems = [
  {
    icon: Trophy,
    number: "01",
    title: "Quality Workmanship",
    body: "Every pour, every finish, every joint — done right the first time. We take pride in work that lasts decades, not just seasons.",
  },
  {
    icon: DollarSign,
    number: "02",
    title: "Affordable Pricing",
    body: "Competitive, transparent quotes with no surprise add-ons. We can provide estimates over the phone or in person — whichever is most convenient.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "On-Time Delivery",
    body: "We show up when we say we will and finish on schedule. Your time matters, and we respect every deadline we commit to.",
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    neighborhood: "Sunnyvale, CA",
    review:
      "Vazquez Millan replaced our cracked driveway and poured a new side walkway. The crew was professional, fast, and left the site spotless. Couldn't be happier — it's been two winters and zero cracking.",
  },
  {
    name: "Linda R.",
    neighborhood: "Campbell, CA",
    review:
      "We had a retaining wall failing in our backyard and needed it fixed fast before the rainy season. They came out, gave us a fair quote, and had it done in three days. Solid work, honest pricing.",
  },
  {
    name: "James P.",
    neighborhood: "Milpitas, CA",
    review:
      "Used them for a commercial parking lot resurfacing job. They handled the striping too — everything looks sharp and professional. My tenants have already complimented the upgrade.",
  },
];

const serviceAreas = [
  "San Jose", "Sunnyvale", "Santa Clara", "Cupertino", "Milpitas",
  "Campbell", "Los Gatos", "Alum Rock", "Fruitdale", "East San Jose",
  "North San Jose", "Edenvale", "Japantown", "Willow Glen", "Rose Garden",
  "Evergreen", "Berryessa",
];

const serviceList = [
  "Foundation work — foundation repair or installation; pier blocks",
  "Retaining wall work — retaining walls to boost curb appeal",
  "Flat concrete work — sidewalk repair and concrete driveway paving",
  "Asphalt overlay — give your existing asphalt a much needed overlay",
  "New asphalt — install new asphalt where needed",
  "Asphalt Slurry Sealer — protect your current asphalt and give it more life",
  "Parking Striping — new or old, bring the striping back to life with paint or thermo materials",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        headline="BUILT TO LAST."
        subheadline="Concrete & Asphalt Contractor Services — San Jose, CA"
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Grid */}
      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="section-heading text-concrete-offwhite">
              OUR SERVICES
            </h2>
            <p className="mt-4 text-concrete-gray max-w-xl">
              Throughout the years, you&apos;ll likely need quite a few concrete
              and asphalt services. We want to be there for you every step of the
              way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <ServiceCard
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
                href={cat.href}
                services={cat.services}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-amber">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Need a Foundation or Sidewalk? */}
      <section className="relative bg-concrete-dark">
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-concrete-black"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="section-heading text-concrete-offwhite mb-6">
                NEED A FOUNDATION OR SIDEWALK INSTALLATION?
              </h2>
              <p className="text-concrete-light leading-relaxed mb-4">
                You spend a lot of time updating the interior of your home, but
                what about the exterior? If your concrete elements are damaged,
                turn to Vazquez Millan Concrete. We offer residential and
                commercial concrete and asphalt contractor services in San Jose, CA.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                When it comes to something as important as concrete or asphalt
                driveway paving, slurry seal, parking striping, or new flatwork
                construction, you want to hire a company you trust. With over
                eight years of experience, we have the skill and knowledge needed
                to handle any concrete or asphalt service.
              </p>

              <h3 className="font-display text-2xl text-concrete-offwhite tracking-wide mb-4">
                FIND ALL THE SERVICES YOU NEED
              </h3>
              <ul className="space-y-2 mb-8">
                {serviceList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-amber-brand flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-concrete-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-amber">
                Contact Us
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-piers-1152w.jpg"
                alt="Pier blocks for commercial buildings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-2 border-amber-brand opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Foundation Damage CTA */}
      <section className="bg-concrete-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-foundations2-1920w.jpg"
                alt="Concrete foundation work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="section-heading text-concrete-offwhite mb-3">
                SUSPECT FOUNDATION DAMAGE?
              </h2>
              <h3 className="font-display text-2xl text-amber-brand tracking-wide mb-6">
                TURN TO A FOUNDATION REPAIR COMPANY RIGHT AWAY
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Choose a company that offers exceptional workmanship, customer
                service, and safety during every job. Call us today at{" "}
                <a href="tel:4086908051" className="text-amber-brand hover:underline">
                  (408) 690-8051
                </a>{" "}
                to get a free estimate for our concrete paving services. For your
                convenience, we can provide an estimate over the phone or in person.
              </p>
              <Link href="/contact" className="btn-amber">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="bg-concrete-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="h-1 w-12 bg-amber-brand mx-auto mb-4" />
            <h2 className="section-heading text-concrete-offwhite">
              WORK WITH A TRUSTED CONCRETE COMPANY
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsItems.map((item) => (
              <div
                key={item.number}
                className="border border-concrete-charcoal p-8 hover:border-amber-brand transition-colors duration-200"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-display text-5xl text-amber-brand leading-none">
                    {item.number}
                  </span>
                  <item.icon
                    size={28}
                    className="text-concrete-gray mt-2 flex-shrink-0"
                  />
                </div>
                <h3 className="font-display text-2xl text-concrete-offwhite tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-concrete-gray leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="section-heading text-concrete-offwhite">
              WHAT CLIENTS SAY
            </h2>
            <p className="mt-4 text-concrete-gray">
              Don&apos;t just take our word for it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-outline">
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <CTABanner />

      {/* 9. Service Area */}
      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="section-heading text-concrete-offwhite">
              AREAS WE SERVE
            </h2>
            <p className="mt-4 text-concrete-gray">
              Proudly serving San Jose and the greater South Bay area.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 text-concrete-light text-sm py-2"
              >
                <MapPin size={13} className="text-amber-brand flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/areas-we-serve"
              className="text-amber-brand text-sm hover:underline"
            >
              See full service area →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
