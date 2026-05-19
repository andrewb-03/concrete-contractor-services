import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Masonry Services | San Jose, CA | Vazquez Millan Concrete",
  description:
    "If you're looking for a way to create a unique addition for your property, count on Vazquez Millan Concrete. In addition to our concrete services, we also offer masonry services!",
};

const masonryFeatures = [
  "Chimneys",
  "Mailboxes",
  "Fireplaces",
  "Custom stairways",
  "Concrete pool decks",
];

export default function MasonryServicesPage() {
  return (
    <>
      <PageHero
        title="MASONRY SERVICES"
        subtitle="Handcrafted stone and brick features for your home or business."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcret-cement-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                BUILD A CUSTOM CHIMNEY FOR YOUR HOME
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                CHOOSE OUR EXPERTS FOR MASONRY SERVICES IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                If you&apos;re looking for a way to create a unique addition for
                your property, count on Vazquez Millan Concrete. In addition to
                our concrete services, we also offer masonry services in San
                Jose, CA. Our skilled team can design and build stone and brick
                features for your property.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                Whether you want a sturdy stone mailbox or a beautiful brick
                chimney, we&apos;ll get the job done right. Contact us today to
                start planning your masonry project.
              </p>

              <h3 className="font-display text-xl text-concrete-offwhite tracking-wide mb-4">
                BUILDING ALL YOUR STONE FEATURES
              </h3>
              <p className="text-concrete-gray mb-4">
                Stone features are a beautiful addition to any property, so
                we&apos;re glad to offer a wide range of masonry services. We
                can build:
              </p>
              <ul className="space-y-2 mb-8">
                {masonryFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-concrete-light text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-brand rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-concrete-gray text-sm mb-8">
                We can work on both residential and commercial properties, so
                there&apos;s no reason to delay contacting our team. Call{" "}
                <a href="tel:4086908051" className="text-amber-brand hover:underline">
                  (408) 690-8051
                </a>{" "}
                now to speak with one of our team members about your project.
              </p>
              <Link href="/contact" className="btn-amber">
                Discuss Your Masonry Project
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcret-cement-1920w.jpg"
                alt="Masonry and cement work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-concrete-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-concrete-offwhite tracking-wide">
              MASONRY SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Stone Work",
                body: "Natural and manufactured stone installation for walls, veneer, garden borders, and feature elements. We match your home&apos;s architecture and work with flagstone, river rock, ledgestone, and more.",
              },
              {
                title: "Chimney Construction & Repair",
                body: "Masonry chimney construction for new builds, plus structural and cosmetic repairs — repointing, cap replacement, and crown sealing to stop water intrusion.",
              },
              {
                title: "Fireplaces",
                body: "Custom outdoor and indoor masonry fireplaces — from traditional brick-and-mortar to modern stone surrounds. We design around your space and build to fire code.",
              },
              {
                title: "Mailboxes",
                body: "Custom brick or stone mailbox construction to match your home&apos;s exterior. Durable, code-compliant, and far more attractive than a standard post.",
              },
              {
                title: "Custom Stairways",
                body: "Concrete and masonry stair construction for entries, yards, hillside access, and retaining walls. Designed for safety and long-term durability.",
              },
              {
                title: "Pool Concrete",
                body: "Concrete pool decks and surrounding flatwork — slip-resistant, weather-resistant, and finished to complement your outdoor space.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-concrete-black border-l-4 border-amber-brand p-6"
              >
                <h3 className="font-display text-2xl text-concrete-offwhite tracking-wide mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-concrete-gray leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="READY TO BUILD SOMETHING BEAUTIFUL?" />
    </>
  );
}
