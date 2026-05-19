import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About | Vazquez Millan Concrete",
  description:
    "You spend a lot of time updating the interior of your home, but what about the exterior? If your concrete elements are damaged, turn to Vazquez Millan Concrete. We offer residential and commercial concrete contractor services in San Jose, CA.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "CA Contractors License #1047443. Every project is fully covered so you never have to worry.",
  },
  {
    icon: Award,
    title: "Quality First",
    body: "Our reputation is based on service, safety, and quality, regardless of how large or small the job.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    body: "We take great care to work and communicate with every customer in a professional manner throughout every project.",
  },
  {
    icon: Wrench,
    title: "Full-Service Crew",
    body: "From slab prep and forming to finishing and sealing — we handle every phase of your project in-house.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="IN BUSINESS SINCE 2015"
        subtitle="Residential and commercial concrete and asphalt services across San Jose and the South Bay."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-solid-driveway-720w.jpg"
      />

      {/* Story Section */}
      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl md:text-6xl text-concrete-offwhite tracking-wide leading-none mb-6">
                WHO WE ARE
              </h2>
              <div className="space-y-5 text-concrete-light leading-relaxed">
                <p>
                  We take great pride in our experience, expertise, quality, and
                  customer service that we provide to meet the consumer&apos;s needs.
                  It is our mission to provide excellent workmanship and complete
                  customer satisfaction from start to completion of a project.
                </p>
                <p>
                  In order to understand the needs and expectations of our
                  customers, we take great care to work and communicate with
                  every customer in a professional manner. Our reputation is
                  based on service, safety, and quality, regardless of how large
                  or small the job.
                </p>
                <p>
                  You spend a lot of time updating the interior of your home,
                  but what about the exterior? If your concrete elements are
                  damaged, turn to Vazquez Millan Concrete. We offer residential
                  and commercial concrete contractor services in San Jose, CA.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-solid-driveway-1920w.jpg"
                alt="Solid concrete driveway — Vazquez Millan Concrete"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-concrete-black/80 p-5">
                <div className="flex gap-8">
                  {[
                    { num: "2015", label: "Founded" },
                    { num: "8+", label: "Years Experience" },
                    { num: "#1047443", label: "CA License" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-2xl text-amber-brand">
                        {s.num}
                      </div>
                      <div className="text-xs text-concrete-gray uppercase tracking-widest">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-concrete-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="h-1 w-12 bg-amber-brand mx-auto mb-4" />
            <h2 className="font-display text-5xl md:text-6xl text-concrete-offwhite tracking-wide">
              OUR VALUES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-concrete-black border-l-4 border-amber-brand p-6"
              >
                <val.icon size={28} className="text-amber-brand mb-4" />
                <h3 className="font-display text-xl text-concrete-offwhite tracking-wide mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-concrete-gray leading-relaxed">
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area mention */}
      <section className="bg-concrete-black py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-concrete-gray text-lg leading-relaxed">
            We proudly serve{" "}
            <span className="text-concrete-offwhite">
              San Jose, Sunnyvale, Santa Clara, Cupertino, Milpitas, Campbell,
              Los Gatos, Alum Rock, Fruitdale, Edenvale, Japantown, Willow
              Glen, Berryessa, Evergreen, Rose Garden
            </span>{" "}
            and surrounding South Bay communities.{" "}
            <Link
              href="/areas-we-serve"
              className="text-amber-brand hover:underline"
            >
              See our full service area →
            </Link>
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
