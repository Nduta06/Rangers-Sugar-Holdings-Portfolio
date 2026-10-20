"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { spring, springSlow } from "./motion";
import { company } from "@/lib/site";

export function HomeHero() {
    return (
        <section className="relative w-full min-h-[680px] h-svh max-h-[960px] overflow-hidden bg-zinc-950">
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <Image
                    src="/media/image17.svg"
                    alt="Illustrative placeholder: Ranges Sugar Holdings factory buildings in the green countryside of Miharati, Nyandarua"
                    width={1600}
                    height={720}
                    priority
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[center_55%] max-md:object-[65%_center]"
                />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/85 via-zinc-950/50 to-zinc-950/10" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-zinc-950/80 to-transparent" aria-hidden="true" />

            <div className="relative z-10 h-full flex flex-col justify-end px-4 md:px-16 lg:px-24 xl:px-32 pb-14 md:pb-20">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    <div className="max-w-3xl">
                        <motion.div
                            className="flex items-center gap-1.5"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, ...spring }}
                        >
                            <span className="size-1.5 bg-brand-sand"></span>
                            <span className="text-sm tracking-wide text-white">SUGAR BEET FACTORY · NYANDARUA, KENYA</span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] text-white font-medium mt-6 leading-[1.02]"
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, ...springSlow }}
                        >
                            Sugar beet processing.
                            <br />
                            <span className="text-zinc-300">From farm to factory.</span>
                        </motion.h1>

                        <motion.p
                            className="text-zinc-300 text-base md:text-lg max-w-xl mt-6 leading-relaxed"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.35, ...spring }}
                        >
                            Ranges Sugar Holdings processes sugar beet into sugar in Miharati, Nyandarua County, Kenya.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 mt-9"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, ...spring }}
                        >
                            <Link
                                href="/about/"
                                className="group flex items-center gap-2 bg-brand-red text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-red-dark transition-colors duration-300"
                            >
                                About our company
                                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/sugar-beet/"
                                className="flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full text-sm backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                            >
                                Why sugar beet
                            </Link>
                        </motion.div>
                    </div>

                    {/* Glass location card */}
                    <motion.div
                        className="hidden md:flex flex-col gap-3 w-72 shrink-0 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 text-white"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, ...spring }}
                    >
                        <div className="flex items-center gap-2 text-xs text-white/70">
                            <MapPin size={14} />
                            Find us
                        </div>
                        <p className="font-heading text-lg leading-snug">
                            {company.address.building}, {company.address.locality}
                        </p>
                        <p className="text-xs text-white/60 leading-relaxed">{company.address.street}, {company.address.region}</p>
                        <Link href="/contact/" className="text-xs text-white underline underline-offset-4 decoration-white/40 hover:decoration-white w-fit">
                            Get directions
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

