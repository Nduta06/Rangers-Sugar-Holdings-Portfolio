import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal, SectionLabel } from "./motion";
import { company } from "@/lib/site";

/** Closing band used at the bottom of most pages. */
export function CallToAction({
    title = "Contact our team.",
    description = "For enquiries about sugar beet processing, cultivation or business partnerships, contact our team at Sample office.",
}: {
    title?: string;
    description?: string;
}) {
    return (
        <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 w-full">
            <Reveal className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-brand-red px-6 py-16 md:px-16 md:py-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
                        style={{ backgroundImage: "url('/media/image14.svg')" }}
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-red via-brand-red/85 to-brand-red-dark/40" aria-hidden="true" />
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div>
                            <SectionLabel light>LET’S CONNECT</SectionLabel>
                            <h2 className="text-3xl md:text-5xl text-white font-medium mt-4 max-w-xl leading-[1.1]">{title}</h2>
                            <p className="text-white/85 mt-4 max-w-lg text-sm md:text-base leading-relaxed">{description}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <Link
                                href="/contact/"
                                className="group flex items-center gap-2 bg-white text-brand-red px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-blush transition-colors duration-300"
                            >
                                Contact us
                                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Link>
                            <a
                                href="/contact/"
                                className="flex items-center gap-2 border border-white/50 text-white px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors duration-300"
                            >
                                <Phone size={15} />
                                {company.phones[0].display}
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

