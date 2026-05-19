import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Road Paving Services | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Do you need to put down a new road in your town or up to your house? Vazquez Millan Concrete has you covered. We provide excellent residential and commercial road paving services!",
};

const roadSteps = [
  "Install a gravel foundation for the road",
  "Set up drainage for the road and nearby soil",
  "Spread asphalt across the area",
  "Smooth out the asphalt for easy driving",
];

export default function RoadPavingPage() {
  return (
    <>
      <PageHero
        title="ROAD PAVING"
        subtitle="Residential and commercial road paving services in San Jose, CA."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-Car-On-A-Road-Full-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                UPGRADE YOUR OLD ROAD
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                WORK WITH A COMMERCIAL OR RESIDENTIAL ROAD PAVING EXPERT IN
                SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-8">
                Has the old gravel or dirt road on your property worn out its
                welcome? Do you need to put down a new road in your town or up
                to your house? Vazquez Millan Concrete has you covered. We
                provide excellent residential road paving and commercial road
                paving services in San Jose, CA. Call{" "}
                <a href="tel:4086908051" className="text-amber-brand hover:underline">
                  (408) 690-8051
                </a>{" "}
                now to discuss paving your road.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-Car-On-A-Road-Full-1920w.jpg"
                alt="Car on a freshly paved road"
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
              4 IMPORTANT STEPS TO INSTALLING YOUR ROAD
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-6">
            Don&apos;t know how residential or commercial road paving works? Our
            team can answer your questions and tell you what to expect.
            Typically, we&apos;ll:
          </p>
          <div className="space-y-4 mb-8">
            {roadSteps.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-concrete-black border-l-4 border-amber-brand p-4">
                <span className="font-display text-3xl text-amber-brand leading-none w-8 flex-shrink-0">
                  {i + 1}.
                </span>
                <span className="text-concrete-light pt-1">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            We&apos;ll also add any finishing touches you need, such as stripes
            and directional arrows. Contact us now to plan your commercial or
            residential road paving project.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="READY TO PAVE YOUR ROAD?" />
    </>
  );
}
