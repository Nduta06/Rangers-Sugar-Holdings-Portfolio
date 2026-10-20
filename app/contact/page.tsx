import { Mail, MapPin, Phone, Mailbox, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/motion";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us – Miharati, Nyandarua County",
  description:
    "Contact Ranges Sugar Holdings at Sample office, Miharati, at a sample location, Nyandarua. Call Phone withheld or email hello@example.com.",
  path: "/contact/",
});

const pad = "px-4 md:px-16 lg:px-24 xl:px-32";

const cards = [
  {
    icon: Phone,
    label: "Call us",
    lines: company.phones.map((p) => ({ text: p.display, href: "/contact/" })),
  },
  {
    icon: Mail,
    label: "Email us",
    wide: true,
    lines: [{ text: company.email, href: `mailto:${company.email}` }],
  },
  {
    icon: MapPin,
    label: "Visit us",
    lines: [
      { text: `${company.address.building}, ${company.address.locality}` },
      { text: `${company.address.street}, ${company.address.region}` },
    ],
  },
  {
    icon: Mailbox,
    label: "Postal address",
    lines: [{ text: company.address.postal }, { text: company.address.country }],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        label="CONTACT & LOCATION"
        title="Contact our team."
        description="For enquiries about our sugar, sugar beet farming and business partnerships, call or email our team."
        image="/media/image14.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href="/contact/" className="flex items-center gap-2 bg-brand-red text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-red-dark transition-colors duration-300">
            <Phone size={15} />
            Call {company.phones[0].display}
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors duration-300">
            <Mail size={15} />
            Email us
          </a>
        </div>
      </PageHero>

      <section className={`${pad} py-20 md:py-28 w-full`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              label={company.legalName.toUpperCase()}
              title="Sample office, Miharati."
              description="Our factory and offices are at a sample location in Nyandarua County."
            />
            <address className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-10 not-italic">
              {cards.map((card, index) => (
                <Reveal key={card.label} delay={index * 0.06} className={"wide" in card ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : undefined}>
                  <div className="h-full rounded-2xl border border-zinc-200 p-6">
                    <span className="grid place-items-center size-10 rounded-full bg-brand-blush text-brand-red">
                      <card.icon size={18} />
                    </span>
                    <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mt-5">{card.label}</p>
                    <div className="flex flex-col gap-1 mt-2 text-sm text-zinc-900">
                      {card.lines.map((line) =>
                        "href" in line && line.href ? (
                          <a key={line.text} href={line.href} className="break-words hover:text-brand-red transition-colors duration-200">
                            {line.text}
                          </a>
                        ) : (
                          <span key={line.text}>{line.text}</span>
                        ),
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </address>
          </div>

          <Reveal slow className="lg:col-span-7">
            <div className="h-full min-h-[420px] flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <div id="location-placeholder" className="w-full flex-1 min-h-[380px] grid place-items-center p-10 text-center text-zinc-600">Map placeholder — client location excluded from the portfolio edition.</div>
              <a
                href="#location-placeholder"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-4 text-sm text-zinc-700 border-t border-zinc-200 bg-white hover:text-zinc-950"
              >
                Location withheld in portfolio edition
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

