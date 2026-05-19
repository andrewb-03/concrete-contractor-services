import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Public Works Paving, Municipal Paving Services | San Jose, CA | Vazquez Millan Concrete",
  description:
    "When you need someone to pave a public roadway, you can rely on Vazquez Millan Concrete. We'll be happy to work with San Jose, CA or other cities in Santa Clara County.",
};

const publicServices = [
  "Curb paving services",
  "Gutter paving services",
  "Sidewalk paving services",
];

export default function PublicWorksProjectPage() {
  return (
    <>
      <PageHero
        title="PUBLIC WORKS PROJECTS"
        subtitle="Municipal paving and public concrete services throughout Santa Clara County."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-piers-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                FIND CONCRETE SERVICES FOR PUBLIC WORK PROJECTS
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                WE HANDLE PUBLIC STREET PAVING AND OTHER PUBLIC PROJECTS IN
                SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Public street paving is an important job that should only be
                trusted to a reputable paving company. When you need someone to
                pave a public roadway, you can rely on Vazquez Millan Concrete.
                We&apos;ll be happy to work with San Jose, CA or other cities
                in Santa Clara County.
              </p>
              <p className="text-concrete-gray mb-4">
                You can also count on us for:
              </p>
              <ul className="space-y-3 mb-8">
                {publicServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-concrete-light text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-brand rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-concrete-gray text-sm mb-8">
                For a free estimate on anything from sidewalk to public street
                paving services, call{" "}
                <a href="tel:4086908051" className="text-amber-brand hover:underline">
                  (408) 690-8051
                </a>{" "}
                right away.
              </p>
              <Link href="/contact" className="btn-amber">
                Request a Bid
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-piers-1920w.jpg"
                alt="Piers for commercial buildings"
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
              OUR TEAM IS PREPARED FOR YOUR PUBLIC PROJECT
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            When you&apos;re planning something for public use, your priority is
            finding high-quality services that suit your budget. You can get
            excellent services at affordable prices from us. You&apos;ll also
            work with a team that has over eight years of experience with diverse
            paving projects, so you can be confident in our work. Contact our
            team today to plan your project.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="PLANNING A PUBLIC WORKS PROJECT?" />
    </>
  );
}
