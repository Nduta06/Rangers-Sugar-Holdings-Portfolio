import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { CallToAction } from "@/components/call-to-action";
import { Reveal, SectionHeading } from "@/components/motion";
import { pageMetadata } from "@/lib/site";
import { ProductionFilm } from "@/components/production-film";

export const metadata = pageMetadata({
  title: "Gallery – Sugar Beet Fields & Factory in Nyandarua",
  description:
    "Photographs of Ranges Sugar Holdings, including beet deliveries, sugar beet farms, the processing facility and people at work in Nyandarua County.",
  path: "/gallery/",
});

const pad = "px-4 md:px-16 lg:px-24 xl:px-32";

export default function Page() {
  return (
    <>
      <PageHero
        label="IN PICTURES"
        title="Our fields and processing facility."
        description="Photographs of sugar beet cultivation, deliveries and factory operations. A complete production film is in preparation."
        image="/media/beet-fields.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className={`${pad} py-20 md:py-28 w-full`}>
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>

      <section id="films" className={`${pad} py-20 md:py-28 w-full bg-brand-blush`}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="PRODUCTION OVERVIEW" title="Production film." />
          <Reveal className="mt-12">
            <ProductionFilm />
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

