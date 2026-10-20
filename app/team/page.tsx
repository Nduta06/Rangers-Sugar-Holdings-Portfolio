import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CallToAction } from "@/components/call-to-action";
import { Reveal, SectionHeading } from "@/components/motion";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our People – Farmers, Engineers & Partners",
  description:
    "Meet the people behind Ranges Sugar Holdings: the farmers, engineers and partners who grow and process sugar beet in Nyandarua, Kenya.",
  path: "/team/",
});

const areas = [
  { kicker: "The field", title: "Agriculture & cultivation", text: "The hands-on work of preparing land, growing beet and bringing in the harvest.", image: "/media/beet-fields.svg", w: 1600, h: 1200, alt: "Illustrative placeholder: Sugar beet plants growing in rows" },
  { kicker: "The facility", title: "Engineering & operations", text: "The technical skills that connect equipment, processing and day-to-day operations.", image: "/media/image11.svg", w: 1280, h: 960, alt: "Illustrative placeholder: Processing equipment at the Ranges Sugar factory" },
  { kicker: "The connection", title: "Business & partnerships", text: "The coordination that connects the agricultural and manufacturing sides of the business.", image: "/media/image38.svg", w: 864, h: 1152, alt: "Illustrative placeholder: Ranges Sugar team members in the field" },
];

const pad = "px-4 md:px-16 lg:px-24 xl:px-32";

export default function Page() {
  return (
    <>
      <PageHero
        label="OUR PEOPLE"
        title="The people supporting our operations."
        description="Agricultural, technical and operational expertise across our sugar beet activities."
        image="/media/image5.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our people" }]}
      />

      <section className={`${pad} py-20 md:py-28 w-full`}>
        <div className="max-w-7xl mx-auto">
          <Reveal slow className="overflow-hidden rounded-2xl">
            <Image
              src="/media/image5.svg"
              width={1280}
              height={960}
              alt="Illustrative placeholder: Ranges Sugar staff wearing protective helmets and safety vests at the factory site"
              className="w-full h-[320px] md:h-[520px] object-cover object-[center_35%]"
            />
          </Reveal>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-20">
            <SectionHeading label="WHAT WE DO" title="From the field to the factory floor." />
            <Reveal delay={0.1}>
              <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
                Growing and processing sugar beet brings together many kinds of expertise. This portfolio edition uses illustrations in place of client photographs.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {areas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.1}>
                <article className="group h-full flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-400 transition-colors duration-300">
                  <div className="h-60 overflow-hidden bg-zinc-100">
                    <Image src={area.image} width={area.w} height={area.h} alt={area.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-brand-red">{area.kicker}</span>
                    <h3 className="text-xl text-zinc-900 font-medium mt-2">{area.title}</h3>
                    <p className="text-sm/6 text-zinc-500 mt-3">{area.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

