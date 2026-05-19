import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Patio Installation | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Ready to take advantage of our concrete services? Call (408) 690-8051 now to get a free estimate for your patio installation.",
};

const patioImprovements = [
  "Increasing the value of your home",
  "Providing extra living space",
  "Adding a low-maintenance, high-reward feature",
];

export default function PatioPage() {
  return (
    <>
      <PageHero
        title="CONCRETE PATIO"
        subtitle="Design your perfect outdoor entertainment space with Vazquez Millan Concrete."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-concrete-work2-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                DESIGN YOUR PERFECT OUTDOOR ENTERTAINMENT SPACE
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                LET VAZQUEZ MILLAN CONCRETE INSTALL YOUR CONCRETE PATIO IN
                SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Are you looking for the perfect way to update your outdoor
                space? A concrete patio is an excellent choice. The experts at
                Vazquez Millan Concrete can handle your concrete patio
                installation in San Jose, CA. We only use top-quality concrete,
                and you&apos;ll work directly with our staff to personalize your
                patio.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                Ready to take advantage of our concrete services? Call{" "}
                <a href="tel:4086908051" className="text-amber-brand hover:underline">
                  (408) 690-8051
                </a>{" "}
                now to get a free estimate for your patio installation.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-concrete-work2-1920w.jpg"
                alt="Flat concrete work for residential patio"
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
              WHY SHOULD YOU INSTALL A NEW PATIO?
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-4">
            Your concrete patio installation can be as simple or as complex as
            you&apos;d like it to be. Our talented team can help create a custom
            design that meets your needs. You can also stamp or stain the
            concrete surface so it looks like hand-laid stone.
          </p>
          <p className="text-concrete-gray mb-6">
            Your new patio can improve your property by:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {patioImprovements.map((b) => (
              <div key={b} className="bg-concrete-black border-l-4 border-amber-brand p-4">
                <p className="text-concrete-light text-sm">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            Don&apos;t put off your concrete patio installation in San Jose, CA.
            Count on the team at Vazquez Millan Concrete to take your backyard
            to the next level.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="READY TO BUILD YOUR DREAM PATIO?" />
    </>
  );
}
