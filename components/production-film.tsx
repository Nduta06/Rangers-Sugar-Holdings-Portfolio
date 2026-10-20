import Image from "next/image";
import { Film } from "lucide-react";
import { productionFilm } from "@/lib/production-film";

export function ProductionFilm() {
  if (productionFilm.src) {
    return (
      <figure>
        <video controls playsInline preload="none" poster={productionFilm.poster}
          aria-label={productionFilm.title} className="w-full aspect-video rounded-2xl bg-zinc-900">
          <source src={productionFilm.src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="mt-4 text-base text-zinc-600">{productionFilm.title}</figcaption>
      </figure>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-72 md:min-h-96">
          <Image src={productionFilm.poster} alt="Illustrative placeholder: A trailer unloading harvested sugar beet at the factory"
            width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900">Film in preparation</span>
        </div>
        <div className="flex flex-col justify-center p-7 md:p-12">
          <Film className="text-brand-red" size={28} aria-hidden="true" />
          <h3 className="mt-5 text-2xl md:text-3xl font-medium text-zinc-900">{productionFilm.title}</h3>
          <p className="mt-5 text-base leading-relaxed text-zinc-600">{productionFilm.description}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">The film will be available here once editing is complete.</p>
        </div>
      </div>
    </div>
  );
}
