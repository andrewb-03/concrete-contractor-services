import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Walkway Installation | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Our crew is ready to get started on your walkway installation. Call (408) 690-8051 now to schedule a consultation with our company in San Jose, CA.",
};

const walkwayTypes = [
  "Straight walkways",
  "Curved walkways",
  "Stamped concrete walkways",
  "Colored concrete walkways",
];

export default function WalkwayPage() {
  return (
    <>
      <PageHero
        title="WALKWAY INSTALLATION"
        subtitle="Enhance your landscape with a custom concrete walkway in San Jose, CA."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-walkway-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                ENHANCE YOUR LANDSCAPE WITH A CUSTOM CONCRETE WALKWAY
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                ASK ABOUT OUR WALKWAY INSTALLATION PROCESS IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Whether you&apos;re looking to add beauty or function to your
                landscape, a concrete walkway is a great choice. Add a winding
                path that looks like stone, or lay a straight walkway to your
                front door. Whichever option you choose, the experts at Vazquez
                Millan Concrete can perform your custom walkway installation in
                San Jose, CA.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                Talk to a member of our staff now to find out more about our
                concrete walkway paving services.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-walkway-1920w.jpg"
                alt="Custom concrete walkway"
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
              GET THE WALKWAY YOU&apos;VE ALWAYS WANTED
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-6">
            Once you&apos;ve decided to install a concrete walkway, it&apos;s
            time to personalize it. With our help, you can create a walkway that
            works with your property. We can install:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {walkwayTypes.map((type) => (
              <div key={type} className="bg-concrete-black border-l-4 border-amber-brand p-4">
                <p className="text-concrete-light text-sm">{type}</p>
              </div>
            ))}
          </div>
          <p className="text-concrete-gray mb-8">
            Our crew is ready to get started on your walkway installation. Call{" "}
            <a href="tel:4086908051" className="text-amber-brand hover:underline">
              (408) 690-8051
            </a>{" "}
            now to schedule a consultation with our company in San Jose, CA.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="READY TO ADD A CUSTOM WALKWAY?" />
    </>
  );
}
