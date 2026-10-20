"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

/**
 * Shared motion primitives so every section rises in with the same spring.
 */

export const spring = { type: "spring" as const, stiffness: 320, damping: 70, mass: 1 };
export const springSlow = { type: "spring" as const, stiffness: 240, damping: 70, mass: 1 };

/** Respects the visitor's reduced-motion setting for every animation below. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** The small square + uppercase eyebrow used above every section heading. */
export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <motion.div
            className="flex items-center gap-1.5"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...spring }}
        >
            <span className={`size-1.5 ${light ? "bg-white" : "bg-brand-red"}`}></span>
            <span className={`text-sm tracking-wide ${light ? "text-white" : "text-zinc-900"}`}>{children}</span>
        </motion.div>
    );
}

/** Fade-and-rise wrapper. */
export function Reveal({
    children,
    delay = 0,
    slow = false,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    slow?: boolean;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, ...(slow ? springSlow : spring) }}
        >
            {children}
        </motion.div>
    );
}

/** Label + heading + optional lead paragraph. */
export function SectionHeading({
    label,
    title,
    description,
    align = "left",
    light = false,
    className = "",
}: {
    label: string;
    title: React.ReactNode;
    description?: string;
    align?: "left" | "center";
    light?: boolean;
    className?: string;
}) {
    const centered = align === "center";
    return (
        <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}>
            <SectionLabel light={light}>{label}</SectionLabel>
            <motion.h2
                className={`text-3xl md:text-[44px]/[1.1] mt-4 leading-tight font-medium ${light ? "text-white" : "text-zinc-900"} ${centered ? "max-w-[680px]" : "max-w-[580px]"}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={springSlow}
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    className={`text-sm md:text-base mt-4 max-w-[560px] leading-relaxed ${light ? "text-zinc-400" : "text-zinc-500"}`}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, ...spring }}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}

/** Small pill used for categories and tags. */
export function Tag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${
                tone === "dark"
                    ? "bg-white/10 text-white border border-white/20 backdrop-blur"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200/70"
            }`}
        >
            {children}
        </span>
    );
}
