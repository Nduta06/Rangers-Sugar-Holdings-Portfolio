import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function NotFound() {
  return (
    <PageHero
      label="404"
      title="Back to our roots."
      description="This page could not be found."
      image="/media/image29.svg"
    >
      <Link href="/" className="inline-flex bg-brand-red text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-red-dark transition-colors duration-300">
        Return home
      </Link>
    </PageHero>
  );
}
