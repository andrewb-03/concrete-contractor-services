import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Foundations | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Vazquez Millan Concrete can install and repair concrete foundations for homeowners and business owners of San Jose, CA. Call (408) 690-8051 to schedule services.",
};

const subServices = [
  { label: "Foundation Installation", href: "/services/foundations/foundation-installation" },
  { label: "Concrete Basements", href: "/services/foundations/concrete-basements" },
  { label: "Retaining Walls", href: "/services/foundations/retaining-walls" },
  { label: "Foundation Repair", href: "/contact" },
];

const warningSigns = [
  "Cracks in the wall",
  "Uneven or sagging floors",
  "Pooling water around the foundation",
];

export default function FoundationsPage() {
  return (
    <>
      <PageHero
        title="FOUNDATIONS"
        subtitle="Structural concrete work built to code and built to last."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-foundations2-1920w.jpg"
      />

      {/* Intro */}
      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                BUILD YOUR PROPERTY ON A STRONG FOUNDATION
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                LEARN ABOUT CONCRETE FOUNDATIONS IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Your foundation is one of the most important parts of your home.
                Without a strong foundation, you could end up with a lot of
                costly repairs over the years. Vazquez Millan Concrete can
                install and repair concrete foundations for homeowners and
                business owners of San Jose, CA.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                We&apos;ll make sure your foundation is sturdy enough to last a
                lifetime. Reach out to us today to get a free estimate for our
                foundation repair or installation services. We can deliver your
                estimate in person or over the phone.
              </p>

              {/* Sub-service links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {subServices.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="bg-concrete-dark border-l-4 border-amber-brand px-4 py-3 text-sm text-concrete-light hover:text-amber-brand transition-colors"
                  >
                    → {s.label}
                  </Link>
                ))}
              </div>

              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-foundations2-1920w.jpg"
                alt="Concrete foundation construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Signs Section */}
      <section className="bg-concrete-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-4xl md:text-5xl text-concrete-offwhite tracking-wide mb-6">
                3 SIGNS YOU NEED FOUNDATION REPAIR
              </h2>
              <p className="text-concrete-gray leading-relaxed mb-6">
                Nobody wants to think they have foundation damage. However, you
                may need to schedule a foundation repair if you notice:
              </p>
              <ul className="space-y-4 mb-8">
                {warningSigns.map((sign, i) => (
                  <li key={sign} className="flex items-start gap-4">
                    <span className="font-display text-3xl text-amber-brand leading-none w-8 flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-concrete-light pt-1">{sign}</span>
                  </li>
                ))}
              </ul>
              <p className="text-concrete-gray mb-8">
                Don&apos;t wait to get your foundation inspected by an expert.
                Talk to us today to learn more about concrete foundations.
              </p>
              <Link href="/contact" className="btn-amber">
                Learn More
              </Link>
            </div>
            <div>
              {/* Foundation service cards */}
              <div className="space-y-4">
                {[
                  {
                    title: "Foundation Installation",
                    body: "New residential and commercial foundation pours built to California code — from shallow spread footings to full perimeter foundations.",
                    href: "/services/foundations/foundation-installation",
                  },
                  {
                    title: "Concrete Basements",
                    body: "Full concrete basement construction including walls, floor slab, and waterproofing preparation. Fire-resistant and stronger than block basements.",
                    href: "/services/foundations/concrete-basements",
                  },
                  {
                    title: "Retaining Walls",
                    body: "Structural retaining walls to hold back soil, prevent erosion, reduce flooding risk, and create usable flat yard space.",
                    href: "/services/foundations/retaining-walls",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block bg-concrete-black border-l-4 border-amber-brand p-5 hover:-translate-y-0.5 transition-transform duration-200 group"
                  >
                    <h4 className="font-display text-lg text-concrete-offwhite tracking-wide mb-1 group-hover:text-amber-brand transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-concrete-gray">{item.body}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="NEED A FOUNDATION ESTIMATE?" />
    </>
  );
}
