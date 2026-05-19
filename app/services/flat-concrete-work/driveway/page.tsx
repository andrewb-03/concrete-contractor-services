import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Driveway Installation | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Vazquez Millan Concrete is ready to handle your concrete driveway paving project. Contact our staff now to set up a consultation!",
};

export default function DrivewayPage() {
  return (
    <>
      <PageHero
        title="DRIVEWAY INSTALLATION"
        subtitle="Update your home with a new, durable concrete driveway."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-solid-driveway-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                UPDATE YOUR HOME WITH A NEW DRIVEWAY
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                HIRE VAZQUEZ MILLAN CONCRETE FOR DRIVEWAY INSTALLATION SERVICES
                IN SAN JOSE, CA
              </h3>
              <div className="space-y-4 text-concrete-light leading-relaxed mb-8">
                <p>
                  Your exterior concrete elements can have a huge impact on your
                  home&apos;s value and curb appeal. If they&apos;re looking a
                  little worse for wear, turn to Vazquez Millan Concrete. We
                  offer professional concrete services in San Jose, CA that will
                  leave you with sturdy and stylish concrete.
                </p>
                <p>
                  We can even repair sidewalks. If the city of San Jose, CA told
                  you that your sidewalks need to be repaired, schedule an
                  appointment for our concrete services today.
                </p>
                <p>
                  Concrete driveways require little maintenance and are built to
                  last for decades. We&apos;re ready to handle your concrete
                  driveway paving project. Contact our staff now to set up a
                  consultation.
                </p>
              </div>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-solid-driveway-1920w.jpg"
                alt="Solid concrete driveway to house garage"
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
              CUSTOMIZE YOUR NEW DRIVEWAY TO MATCH YOUR STYLE
            </h2>
          </div>
          <div className="space-y-4 text-concrete-gray leading-relaxed mb-8">
            <p>
              Just because you install a concrete driveway doesn&apos;t mean it
              has to be boring. Our expert crew can stamp or stain your driveway
              to look like hand-laid brick or stone. You can even add a marble
              finish to your concrete.
            </p>
            <p>
              Reach out to our trusted concrete driveway installation company in
              San Jose, CA now.
            </p>
          </div>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="READY FOR A NEW DRIVEWAY?" />
    </>
  );
}
