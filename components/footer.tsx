import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/lib/site";

export function Footer() {
    return (
        <footer className="bg-white text-zinc-900 border-t-4 border-brand-red pt-20 pb-8 px-4 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
                    <div className="lg:col-span-5 flex flex-col items-start gap-6">
                        <Link href="/" className="flex items-center gap-4" aria-label={`${company.name} home`}>
                            <Image src="/media/logo.svg" alt="" width={500} height={500} className="h-16 w-auto" />
                            <span className="font-heading leading-none">
                                <span className="block text-lg font-semibold tracking-wide">RANGES SUGAR</span>
                                <span className="block text-[11px] tracking-[0.35em] mt-1.5 text-brand-red">HOLDINGS</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 text-sm/6 max-w-md">
                            A Kenyan sugar processor based at {company.address.building},{" "}
                            {company.address.locality}, {company.address.region}, specialising in sugar beet processing.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-5">
                            <span className="font-heading font-medium text-zinc-900">Explore</span>
                            <div className="flex flex-col gap-3 text-sm text-zinc-600">
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="hover:text-brand-red transition-colors duration-200 w-fit">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <address className="flex flex-col gap-5 not-italic">
                            <span className="font-heading font-medium text-zinc-900">Get in touch</span>
                            <div className="flex flex-col gap-3 text-sm text-zinc-600">
                                {company.phones.map((phone) => (
                                    <a key={phone.tel} href="/contact/" className="flex items-center gap-2.5 hover:text-brand-red transition-colors duration-200 w-fit">
                                        <Phone size={15} className="text-brand-red shrink-0" />
                                        {phone.display}
                                    </a>
                                ))}
                                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-brand-red transition-colors duration-200 w-fit">
                                    <Mail size={15} className="text-brand-red shrink-0" />
                                    {company.email}
                                </a>
                                <p className="flex items-start gap-2.5">
                                    <MapPin size={15} className="text-brand-red shrink-0 mt-1" />
                                    <span>
                                        {company.address.building}, {company.address.locality}
                                        <br />
                                        {company.address.street}
                                        <br />
                                        {company.address.postal}
                                    </span>
                                </p>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-200"></div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
                    <p>Made in {company.address.region}, Kenya</p>
                </div>

                {/* Oversized outlined wordmark */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none select-none mt-10 -mb-6 font-heading text-[14vw] leading-[0.8] font-semibold tracking-tighter text-transparent whitespace-nowrap"
                    style={{ WebkitTextStroke: "1px #f0c3c5" }}
                >
                    ranges sugar
                </div>
            </div>
        </footer>
    );
}

