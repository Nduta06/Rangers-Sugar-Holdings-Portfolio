"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { company, navLinks } from "@/lib/site";

const strip = (path: string) => path.replace(/\/$/, "") || "/";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = strip(usePathname());

    const panelRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    // Only the home page has a full-bleed photo behind the navbar. Inner pages
    // open on a dark hero band, so the bar starts condensed there.
    const overHero = pathname === "/";
    const condensed = scrolled || !overHero;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = useCallback(() => {
        setMobileOpen(false);
        toggleRef.current?.focus();
    }, []);

    // Escape closes the menu; Tab stays inside it while it is open.
    useEffect(() => {
        if (!mobileOpen) return;

        const panel = panelRef.current;
        const focusable = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        focusable?.[0]?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
                return;
            }
            if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [mobileOpen, closeMenu]);

    const isActive = (href: string) => {
        const target = strip(href);
        return target === "/" ? pathname === "/" : pathname.startsWith(target);
    };

    const linkClass = (href: string) =>
        `transition-colors duration-500 ${
            condensed
                ? isActive(href)
                    ? "text-zinc-900 underline underline-offset-8 decoration-brand-red"
                    : "text-zinc-700 hover:text-zinc-950"
                : isActive(href)
                  ? "text-white underline underline-offset-8 decoration-white/50"
                  : "text-white/90 hover:text-white"
        }`;

    // Contact gets the button treatment, so it is left out of the plain links.
    const primaryLinks = navLinks.filter((link) => link.href !== "/contact/");

    return (
        <>
            <nav
                aria-label="Main"
                className={`fixed z-50 flex items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 p-3 ${
                    condensed
                        ? "lg:w-6xl w-[calc(100vw-14px)] bg-white/75 backdrop-blur-2xl rounded-full mt-3 pl-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-zinc-900/5"
                        : "px-4 md:px-16 lg:px-24 xl:px-32 w-full mt-3"
                }`}
            >
                <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${company.name} home`}>
                    <Image
                        src="/media/logo.svg"
                        alt=""
                        width={500}
                        height={500}
                        priority
                        className={`w-auto transition-all duration-500 ${condensed ? "h-10" : "h-12 sm:h-14"}`}
                    />
                    <span
                        className={`font-heading leading-none transition-colors duration-500 ${
                            condensed ? "text-zinc-900" : "text-white"
                        }`}
                    >
                        <span className="block text-[15px] font-semibold tracking-wide">RANGES SUGAR</span>
                        <span className={`block text-[10px] tracking-[0.35em] mt-1 ${condensed ? "text-brand-red" : "text-white/70"}`}>
                            HOLDINGS
                        </span>
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm">
                    {primaryLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={linkClass(link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="/contact/"
                        className={`flex items-center gap-2 text-sm transition-colors duration-500 ${
                            condensed ? "text-zinc-700 hover:text-zinc-950" : "text-white/90 hover:text-white"
                        }`}
                    >
                        <Phone size={15} />
                        <span className="max-xl:hidden">{company.phones[0].display}</span>
                    </a>
                    <Link
                        href="/contact/"
                        aria-current={isActive("/contact/") ? "page" : undefined}
                        className={`px-6 py-2.5 text-sm font-medium transition-all duration-500 rounded-full ${
                            condensed
                                ? "bg-brand-red text-white hover:bg-brand-red-dark"
                                : "bg-brand-red text-white hover:bg-brand-red-dark"
                        }`}
                    >
                        Contact us
                    </Link>
                </div>

                <div className="flex lg:hidden items-center gap-1">
                    <a
                        href="/contact/"
                        aria-label={`Call ${company.name} on ${company.phones[0].display}`}
                        className={`p-2 rounded-md transition ${condensed ? "text-zinc-800" : "text-white"}`}
                    >
                        <Phone size={20} />
                    </a>
                    <button
                        ref={toggleRef}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        className={`p-2 rounded-md transition cursor-pointer ${condensed ? "text-zinc-800" : "text-white"}`}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div
                id="mobile-menu"
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                inert={!mobileOpen}
                className={`${
                    mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } lg:hidden fixed inset-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-7 text-lg`}
            >
                <button onClick={closeMenu} aria-label="Close menu" className="absolute top-6 right-5 p-2 text-zinc-900 cursor-pointer">
                    <X size={26} />
                </button>

                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`font-heading transition-colors duration-200 ${
                            isActive(link.href) ? "text-brand-red" : "text-zinc-600 hover:text-brand-red"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}

                <div className="flex flex-col items-center gap-3 mt-4 w-full px-10">
                    <a
                        href="/contact/"
                        onClick={closeMenu}
                        className="w-full max-w-xs text-center bg-brand-red text-white px-6 py-3 rounded-full text-sm font-medium"
                    >
                        Call {company.phones[0].display}
                    </a>
                    <a
                        href={`mailto:${company.email}`}
                        onClick={closeMenu}
                        className="w-full max-w-xs text-center border border-zinc-300 text-zinc-800 px-6 py-3 rounded-full text-sm"
                    >
                        Email us
                    </a>
                </div>
            </div>
        </>
    );
}
