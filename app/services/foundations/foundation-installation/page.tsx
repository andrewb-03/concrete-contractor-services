import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Foundation Installation | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Ask Vazquez Millan Concrete for a free estimate on your concrete foundation installation in San Jose, CA today.",
};

const buildingTypes = [
  "Residential buildings",
  "Commercial buildings",
  "Outdoor structures",
];

export default function FoundationInstallationPage() {
  return (
    <>
      <PageHero
        title="FOUNDATION INSTALLATION"
        subtitle="Your building needs a strong foundation — start your build right."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-foundations2-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                YOUR BUILDING NEEDS A STRONG FOUNDATION
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                START YOUR BUILD WITH A DURABLE CONCRETE FOUNDATION FROM
                VAZQUEZ MILLAN CONCRETE IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Your building&apos;s foundation determines its strength. If your
                foundation is even slightly defective, your building could
                develop cracked walls or warped floors. Vazquez Millan Concrete
                can install a concrete foundation that makes your building stand
                strong. We&apos;re a preferred concrete company in San Jose, CA.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-6">
                We provide foundation installation services for:
              </p>
              <ul className="space-y-2 mb-6">
                {buildingTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3 text-concrete-light text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-brand rounded-full flex-shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
              <p className="text-concrete-gray leading-relaxed mb-8">
                When you work with us, you&apos;ll get customized service from a
                team with over eight years of experience. Ask us for a free
                estimate on your concrete foundation installation in San Jose,
                CA today.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete--New-Room-With-A-View-1920w.jpg"
                alt="New construction with concrete foundation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-concrete-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide">
              EVERY FOUNDATION INSTALLATION IS UNIQUE
            </h2>
          </div>
          <div className="space-y-4 text-concrete-gray leading-relaxed">
            <p>
              Different buildings have different foundation needs. A small home
              needs a different foundation than a single-story store or a
              multi-story office building. We&apos;ll plan your concrete
              foundation installation from scratch to suit your building plan.
            </p>
            <p>
              Get in touch with us now to talk about your building plan.
              We&apos;ll advise you on a concrete foundation that&apos;s right
              for your project.
            </p>
          </div>
          <Link href="/contact" className="btn-amber mt-8 inline-block">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="READY TO BREAK GROUND?" />
    </>
  );
}
