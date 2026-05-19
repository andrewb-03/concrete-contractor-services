import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Parking Deck Installation, Commercial Parking Decks | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Running out of parking space? Vazquez Millan Concrete in San Jose, CA can build your parking deck and all necessary connectors to make accessing your building easy.",
};

const deckBenefits = [
  "Make enough room for all customers",
  "Avoid congestion and traffic in your parking lot",
  "Create a designated parking area for your business",
];

export default function ParkingDecksPage() {
  return (
    <>
      <PageHero
        title="PARKING DECKS"
        subtitle="Expand your parking space in San Jose, CA with a concrete parking deck."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-parking--decks-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                EXPAND YOUR PARKING SPACE IN SAN JOSE, CA
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                MAKE ROOM FOR EVERY CUSTOMER WITH A CONCRETE PARKING DECK
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Running out of parking space? Don&apos;t have any room to expand
                outwards? A concrete parking deck is the solution you need.
                Vazquez Millan Concrete in San Jose, CA can build your parking
                deck and all necessary connectors to make accessing your
                building easy.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                Email us now if you need parking deck installation services for
                your property.
              </p>
              <Link href="/contact" className="btn-amber">
                Request a Bid
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-parking--decks-1920w.jpg"
                alt="Concrete parking decks"
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
              WHY YOU NEED A PARKING DECK
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-6">
            Concrete parking decks are a major value add for any commercial
            property. A full parking deck allows you to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {deckBenefits.map((b) => (
              <div key={b} className="bg-concrete-black border-l-4 border-amber-brand p-4">
                <p className="text-concrete-light text-sm">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            If you need parking deck installation services, you can trust our
            experts. We can design and build parking decks of any size. Whether
            you need space for parking at an apartment complex or a commercial
            development, we&apos;ll get the job done right. Call us today to
            discuss your installation with a pro.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="NEED A PARKING DECK ESTIMATE?" />
    </>
  );
}
