import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CallToAction } from "@/components/call-to-action";
import { Reveal, SectionHeading } from "@/components/motion";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us – Sugar Beet Processing in Kenya",
  description:
    "Ranges Sugar Holding Limited specialises in processing sugar beet into sugar in Miharati, Nyandarua County, Kenya.",
  path: "/about/",
});

const direction = [
  { title: "Agriculture", text: "Sugar beet cultivation supported by suitable soils, growing conditions and crop management." },
  { title: "Processing", text: "Extracting and processing sugar from harvested beet for use in food and beverage applications." },
  { title: "People", text: "Practical expertise in cultivation, engineering and sugar processing." },
];

const pad = "px-4 md:px-16 lg:px-24 xl:px-32";

export default function Page() {
  return (
    <>
      <PageHero
        label="OUR STORY"
        title="Sugar beet processing in Kenya."
        description="Connecting sugar beet cultivation with factory processing in Nyandarua County."
        image="/media/image17.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />

      <section className={`${pad} py-20 md:py-28 w-full`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal slow className="overflow-hidden rounded-2xl">
            <Image
              src="/media/image17.svg"
              width={1600}
              height={720}
              alt="Illustrative placeholder: Ranges Sugar Holdings factory buildings at Sample office, Miharati"
              className="w-full h-[320px] md:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </Reveal>
          <div>
            <SectionHeading label="WHO WE ARE" title="Ranges Sugar Holdings." />
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-5 mt-6 text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
                <p>
                  {company.legalName} is a sugar processing company based at {company.address.building} in{" "}
                  {company.address.locality}, at a sample location in {company.address.region}, Kenya. We focus
                  on sugar beet. While sugarcane is the familiar source of sugar in Kenya, beet offers another route:
                  extracting sugar stored in the plant’s root.
                </p>
                <p>
                  Our activities connect crop cultivation, beet deliveries and factory processing. The portfolio illustrations preserve the layout while client photographs remain private.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`${pad} py-20 md:py-28 w-full bg-zinc-50`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              label="OUR DIRECTION"
              title="Our areas of focus."
              description="Agriculture, processing and people support our operations."
            />
          </div>
          <dl className="lg:col-span-7 flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
            {direction.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex max-sm:flex-col items-start gap-2 sm:gap-8 py-7">
                  <dt className="font-heading text-lg text-zinc-900 font-medium sm:w-48 shrink-0">{item.title}</dt>
                  <dd className="text-sm/6 md:text-base/7 text-zinc-500">{item.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

