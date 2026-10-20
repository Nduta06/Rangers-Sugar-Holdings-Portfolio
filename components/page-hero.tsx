"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { spring, springSlow } from "./motion";

export interface Crumb {
    label: string;
    href?: string;
}

/**
 * Inner-page hero. Dark, so the condensed navbar floats clearly above it,
 * with the page's own photograph dimmed behind the type.
 */
export function PageHero({
    label,
    title,
    description,
    image,
    crumbs = [],
    children,
}: {
    label: string;
    title: React.ReactNode;
    description?: string;
    image: string;
    crumbs?: Crumb[];
    children?: React.ReactNode;
}) {
    return (
        <section className="relative w-full bg-zinc-950 pt-40 pb-16 md:pt-48 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-65 scale-105"
                style={{ backgroundImage: `url('${image}')` }}
                aria-hidden="true"
            />
            {/* Darker at the bottom-left where the type sits, lighter elsewhere so the photo reads */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/45 to-zinc-950/25" aria-hidden="true" />
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/50 to-transparent" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {crumbs.length > 0 && (
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex flex-wrap items-center gap-1 text-xs text-zinc-400">
                            {crumbs.map((crumb, index) => (
                                <li key={crumb.label} className="flex items-center gap-1">
                                    {crumb.href ? (
                                        <Link href={crumb.href} className="hover:text-white transition-colors duration-200">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-zinc-300" aria-current="page">{crumb.label}</span>
                                    )}
                                    {index < crumbs.length - 1 && <ChevronRight size={12} className="text-zinc-600" />}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                <motion.div
                    className="flex items-center gap-1.5"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, ...spring }}
                >
                    <span className="size-1.5 bg-brand-sand"></span>
                    <span className="text-sm tracking-wide text-white">{label}</span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl text-zinc-50 font-medium max-w-3xl mt-5 leading-[1.08]"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={springSlow}
                >
                    {title}
                </motion.h1>

                {description && (
                    <motion.p
                        className="text-zinc-300 text-sm md:text-lg max-w-2xl mt-5 leading-relaxed"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15, ...spring }}
                    >
                        {description}
                    </motion.p>
                )}

                {children && (
                    <motion.div
                        className="mt-8"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25, ...spring }}
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
