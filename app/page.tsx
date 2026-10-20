import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { CallToAction } from "@/components/call-to-action";
import { Reveal, SectionHeading, Tag } from "@/components/motion";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  description:
    "Ranges Sugar Holdings processes sugar beet into sugar in Miharati, Nyandarua County, Kenya. Explore our farming and processing activities.",
  path: "/",
});

const ribbon = ["Rooted in agriculture", "Focused on sugar beet", "Sweet taste in every crystal", "Made in Nyandarua", "From field to factory"];

const strengths = [
  { n: "01", title: "A different growing environment", text: "A crop associated with cooler, temperate conditions, offering an alternative to tropical sugarcane." },
  { n: "02", title: "Room for rotation", text: "Sugar beet can form part of a planned crop rotation, helping diversify farm production." },
  { n: "03", title: "Value beyond sugar", text: "Beet processing can produce pulp for animal feed and molasses for other uses." },
];

const features = [
  { href: "/gallery/", image: "/media/beet-fields.svg", w: 1600, h: 1200, alt: "Illustrative placeholder: Sugar beet plants growing in rows on a farm", kicker: "Cultivation", title: "Sugar beet farming" },
  { href: "/gallery/", image: "/media/beet-delivery.svg", w: 1600, h: 1200, alt: "Illustrative placeholder: A tractor tipping a trailer to unload sugar beet at the factory", kicker: "Deliveries", title: "Receiving harvested beet" },
  { href: "/gallery/#films", image: "/media/image14.svg", w: 900, h: 1200, alt: "Illustrative placeholder: Elevated view over the Ranges Sugar factory site", kicker: "Production film", title: "Process overview — coming soon" },
];

const pad = "px-4 md:px-16 lg:px-24 xl:px-32";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Marquee ribbon */}
      <div className="bg-brand-red py-5 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[...ribbon, ...ribbon, ...ribbon, ...ribbon].map((item, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 text-sm tracking-[0.2em] uppercase text-white whitespace-nowrap">
              {item}
              <span className="size-1.5 bg-white/70" />
            </span>
          ))}
        </div>
      </div>

      {/* Meet Ranges Sugar */}
      <section className={`${pad} py-20 md:py-32 w-full`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHeading
              label="MEET RANGES SUGAR"
              title="Sugar beet cultivation and processing."
              description="Ranges Sugar Holdings is a Kenyan sugar processor specialising in sugar beet. Based at Sample office in Miharati, Nyandarua County, the company connects crop cultivation, delivery and factory processing."
            />
            <Reveal delay={0.2}>
              <Link href="/about/" className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-zinc-900 border-b border-brand-red/40 pb-1.5 hover:border-brand-red hover:text-brand-red transition-colors duration-300">
                More about us
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal slow className="relative grid grid-cols-[1.3fr_1fr] gap-4 items-end">
            <div className="overflow-hidden rounded-2xl">
              <Image src="/media/beet-fields.svg" width={1600} height={1200} alt="Illustrative placeholder: Sugar beet crop growing in rows in Nyandarua" className="w-full h-[340px] md:h-[460px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/media/beet-roots.svg" width={1600} height={1066} alt="Illustrative placeholder: Harvested sugar beet root and a cut section held for display" className="w-full h-[260px] md:h-[340px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-5 left-5">
              <Tag tone="dark">Sugar beet cultivation</Tag>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why the root matters */}
      <section className={`${pad} py-20 md:py-32 w-full bg-brand-blush`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <SectionHeading label="WHY THE ROOT MATTERS" title="The role of sugar beet in agriculture." />
            <Reveal delay={0.1}>
              <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed">
                Sugar beet provides an alternative raw material for sugar processing, with opportunities for crop diversification and useful co-products.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {strengths.map((item, index) => (
              <Reveal key={item.n} delay={index * 0.1}>
                <article className="h-full rounded-2xl border border-red-100 bg-white p-8 shadow-sm hover:border-brand-red/40 hover:shadow-md transition-colors duration-300">
                  <span className="font-heading text-brand-red text-sm">{item.n}</span>
                  <h3 className="text-zinc-900 text-xl md:text-2xl font-medium mt-10">{item.title}</h3>
                  <p className="text-zinc-500 text-sm/6 mt-3">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link href="/sugar-beet/" className="group inline-flex items-center gap-2 mt-12 bg-brand-red text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-red-dark transition-colors duration-300">
              Understand the beet difference
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Fields to factory */}
      <section className={`${pad} py-20 md:py-32 w-full`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading label="A CLOSER LOOK" title="Cultivation, delivery and processing." />
            <Reveal delay={0.1}>
              <Link href="/gallery/" className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-brand-red/40 pb-1.5 hover:border-brand-red hover:text-brand-red transition-colors duration-300">
                Explore the gallery
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {features.map((feature, index) => (
              <Reveal key={feature.href} delay={index * 0.1}>
                <Link href={feature.href} className="group relative flex h-[420px] overflow-hidden rounded-2xl">
                  <Image src={feature.image} width={feature.w} height={feature.h} alt={feature.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                  <div className="relative mt-auto w-full p-6 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-zinc-300">{feature.kicker}</span>
                      <h3 className="text-white text-2xl font-medium mt-1.5">{feature.title}</h3>
                    </div>
                    <span className="grid place-items-center size-10 rounded-full bg-white/15 backdrop-blur text-white shrink-0 transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

