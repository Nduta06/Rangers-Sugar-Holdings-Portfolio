import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CallToAction } from "@/components/call-to-action";
import { Reveal, SectionHeading } from "@/components/motion";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sugar Beet vs Sugarcane – Beet Sugar Processing",
  description:
    "Compare sugar beet and sugarcane and learn about beet sugar processing, from deliveries and extraction to purification and crystallisation.",
  path: "/sugar-beet/",
});

const comparison = [
  ["Sugar-bearing part", "Root", "Stalk"],
  ["Typical growing environment", "Temperate regions", "Tropical and subtropical regions"],
  ["Farming system", "Can be a rotation crop", "Often harvested over successive ratoon cycles"],
  ["Processing co-products", "Beet pulp and molasses", "Bagasse and molasses"],
  ["Refined sugar", "Sucrose", "Sucrose"],
];

const steps = [
  ["01", "Wash & slice", "Harvested roots are cleaned and sliced into thin strips."],
  ["02", "Extract", "Hot water draws sugar from the sliced beet."],
  ["03", "Purify & concentrate", "The juice is cleaned and water is evaporated to make a syrup."],
  ["04", "Crystallise", "Sugar crystals form, then are separated and dried."],
];

const pad = "px-4 md:px-16 lg:px-24 xl:px-32";

export default function Page() {
  return (
    <>
      <PageHero
        label="THE BEET DIFFERENCE"
        title="Understanding sugar beet processing."
        description="How sugar beet differs from sugarcane and how sugar is extracted from the harvested root."
        image="/media/image29.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Why sugar beet" }]}
      />

      <section className={`${pad} py-20 md:py-28 w-full`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHeading label="ROOT VS STALK" title="Sugar stored in the root." />
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-5 mt-6 text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
                <p>
                  Sugar beet stores sucrose in its root. Sugarcane stores it in its stalk. Once refined, both deliver
                  sucrose; choosing beet is about the crop and production pathway, rather than a claim of healthier sugar.
                </p>
                <p>
                  Beet is particularly associated with temperate growing regions. It can be included in crop rotations,
                  and its processing yields useful co-products such as pulp and molasses.
                </p>
                <p>
                  Actual harvest timing, water needs and yields depend on the variety, local climate and farming
                  practices. Beet is an alternative with distinct advantages, not a guarantee of better performance in
                  every setting.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal slow className="overflow-hidden rounded-2xl bg-zinc-100">
            <Image
              src="/media/beet-roots.svg"
              width={1600}
              height={1066}
              alt="Illustrative placeholder: Harvested sugar beet root and cut section displayed by hand"
              className="w-full h-[420px] md:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </Reveal>
        </div>
      </section>

      <section className={`${pad} py-20 md:py-28 w-full bg-zinc-50`}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="SIDE BY SIDE" title="Sugar beet and sugarcane compared." />
          <Reveal delay={0.1} className="mt-12 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead>
                <tr className="bg-brand-red text-white">
                  <th className="px-6 py-5 font-medium">What changes</th>
                  <th className="px-6 py-5 font-medium">Sugar beet</th>
                  <th className="px-6 py-5 font-medium text-white/75">Sugarcane</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparison.map(([label, beet, cane]) => (
                  <tr key={label} className="hover:bg-zinc-50 transition-colors duration-200">
                    <th className="px-6 py-5 font-medium text-zinc-900 w-[34%]">{label}</th>
                    <td className="px-6 py-5 text-zinc-700">{beet}</td>
                    <td className="px-6 py-5 text-zinc-500">{cane}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className={`${pad} py-20 md:py-28 w-full`}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="FROM ROOT TO CRYSTAL"
            title="The beet sugar processing stages."
            description="An overview of conventional beet sugar processing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {steps.map(([n, title, text], index) => (
              <Reveal key={n} delay={index * 0.08}>
                <article className="group h-full rounded-2xl border border-zinc-200 p-7 hover:border-brand-red transition-colors duration-300">
                  <span className="font-heading text-4xl text-zinc-200 group-hover:text-brand-red transition-colors duration-300">{n}</span>
                  <h3 className="text-xl text-zinc-900 font-medium mt-8">{title}</h3>
                  <p className="text-sm/6 text-zinc-500 mt-2">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="text-sm text-zinc-500 mt-10 max-w-3xl leading-relaxed">
              Further reading:{" "}
              <a className="underline underline-offset-4 decoration-zinc-300 hover:decoration-brand-red" href="https://www.britishsugar.co.uk/about-us/what-we-do/" target="_blank" rel="noreferrer">
                British Sugar — beet sugar production
              </a>{" "}
              and{" "}
              <a className="underline underline-offset-4 decoration-zinc-300 hover:decoration-brand-red" href="https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2018.00231/full" target="_blank" rel="noreferrer">
                research on sugar beet crop rotations
              </a>
              . This describes general beet production, not verified specifications for our facility.
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

