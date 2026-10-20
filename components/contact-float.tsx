"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Plus, X } from "lucide-react";
import { company } from "@/lib/site";

/** Call / email shortcut that stays one tap away once the visitor scrolls. */
export function ContactFloat() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const itemClass =
        "flex items-center gap-2.5 bg-white border border-zinc-200 shadow-lg text-zinc-800 text-sm pl-4 pr-5 py-3 rounded-full hover:bg-zinc-50 transition-colors duration-200";

    return (
        <div
            className={`fixed bottom-5 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <div
                inert={!open}
                className={`flex flex-col items-end gap-3 transition-all duration-300 ${
                    open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
            >
                <a href={`mailto:${company.email}`} className={itemClass}>
                    <Mail size={16} className="text-brand-red" />
                    Email us
                </a>
                {company.phones.map((phone) => (
                    <a key={phone.tel} href="/contact/" className={itemClass}>
                        <Phone size={16} className="text-brand-red" />
                        {phone.display}
                    </a>
                ))}
            </div>

            <button
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-label={open ? "Close contact options" : "Open contact options"}
                className="grid place-items-center size-14 rounded-full bg-brand-red text-white shadow-xl hover:bg-brand-red-dark transition-colors duration-200 cursor-pointer"
            >
                {open ? <X size={22} /> : <Plus size={22} />}
            </button>
        </div>
    );
}
