import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Reviews | Vazquez Millan Concrete",
  description:
    "See what homeowners and businesses across San Jose and the South Bay say about Vazquez Millan Concrete. Leave a Google review to help others find us.",
};

const reviews = [
  {
    name: "Marcus T.",
    neighborhood: "Sunnyvale, CA",
    review:
      "Vazquez Millan replaced our cracked driveway and poured a new side walkway. The crew was professional, fast, and left the site spotless. Couldn't be happier — it's been two winters and zero cracking.",
  },
  {
    name: "Linda R.",
    neighborhood: "Campbell, CA",
    review:
      "We had a retaining wall failing in our backyard and needed it fixed fast before the rainy season. They came out, gave us a fair quote, and had it done in three days. Solid work, honest pricing.",
  },
  {
    name: "James P.",
    neighborhood: "Milpitas, CA",
    review:
      "Used them for a commercial parking lot resurfacing job. They handled the striping too — everything looks sharp and professional. My tenants have already complimented the upgrade.",
  },
  {
    name: "Sandra V.",
    neighborhood: "Los Gatos, CA",
    review:
      "Had them build a stone retaining wall and stairway in our hillside backyard. Incredibly skilled work — it looks like it's always been there. They were also great communicators throughout.",
  },
  {
    name: "Robert M.",
    neighborhood: "Cupertino, CA",
    review:
      "Got three bids on our driveway replacement. Vazquez Millan was competitively priced and came highly recommended. They showed up on time, finished in two days, and the quality is excellent.",
  },
  {
    name: "Priya K.",
    neighborhood: "Santa Clara, CA",
    review:
      "Poured a new patio and walkway for us. We gave them a rough idea and they nailed it. Broom finish came out perfectly even. Very professional crew, no mess left behind.",
  },
];

const reviewPlatforms = [
  {
    name: "Google",
    rating: "5.0",
    reviews: "48 reviews",
    href: "https://www.google.com/maps/place/Vazquez+Millan+Concrete/@37.2964625,-122.0975973,10z/",
  },
  {
    name: "Yelp",
    rating: "4.8",
    reviews: "23 reviews",
    href: "https://yelp.com/biz/vazquez-millan-concrete-san-jose",
  },
  {
    name: "HomeAdvisor",
    rating: "4.9",
    reviews: "31 reviews",
    href: "https://www.homeadvisor.com/rated.VazquezMillanConcrete.82820722.html",
  },
  {
    name: "BBB",
    rating: "A+",
    reviews: "Accredited Business",
    href: "https://www.bbb.org/us/ca/san-jose/profile/concrete-contractors/vazquez-millan-concrete-inc-1216-1297629",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="REVIEWS"
        subtitle="What homeowners and businesses across the South Bay say about our work."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-solid-driveway-1920w.jpg"
      />

      {/* Platform Ratings */}
      <section className="bg-concrete-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {reviewPlatforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-concrete-black border border-concrete-charcoal p-6 hover:border-amber-brand transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-display text-3xl text-amber-brand">
                    {p.rating}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-concrete-gray group-hover:text-amber-brand transition-colors"
                  />
                </div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={12}
                      className="text-amber-brand fill-amber-brand"
                    />
                  ))}
                </div>
                <p className="font-display text-lg text-concrete-offwhite tracking-wide">
                  {p.name}
                </p>
                <p className="text-xs text-concrete-gray mt-0.5">{p.reviews}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-5xl md:text-6xl text-concrete-offwhite tracking-wide leading-none mb-4">
              WHAT CLIENTS SAY
            </h2>
            <p className="text-concrete-gray">
              Sample reviews from satisfied customers across the South Bay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <TestimonialCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-concrete-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-1 w-12 bg-amber-brand mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-concrete-offwhite tracking-wide mb-4">
            HAPPY WITH OUR WORK?
          </h2>
          <p className="text-concrete-gray mb-10 text-lg">
            Leave us a review on Google — it helps other homeowners in the South
            Bay find us and means a lot to our team.
          </p>
          <a
            href="https://www.google.com/search?q=Vazquez+Millan+Concrete&ludocid=1013641363204167545&lsig=AB86z5W2Y5yfLrNPVqev5mzZawrv#lrd=0x808fcd7f390a3b6f:0xe112d73076d5779,3,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber"
          >
            Leave a Google Review →
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
