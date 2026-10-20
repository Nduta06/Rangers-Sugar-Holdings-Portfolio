"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { spring } from "./motion";

const photos = [
  { src: "beet-delivery", w: 1600, h: 1200, category: "Deliveries", title: "Unloading harvested sugar beet", alt: "Illustrative placeholder: A tractor tipping a blue trailer to unload sugar beet at the factory" },
  { src: "beet-roots", w: 1600, h: 1066, category: "Farming", title: "Sugar beet root and cross-section", alt: "Illustrative placeholder: Hands displaying a harvested sugar beet root and its cut section" },
  { src: "beet-fields", w: 1600, h: 1200, category: "Farming", title: "Sugar beet cultivation", alt: "Illustrative placeholder: An extensive sugar beet crop growing in the field" },
  { src: "image17", w: 1600, h: 720, category: "Factory", title: "Aerial view of the processing facility", alt: "Illustrative placeholder: Elevated view over the red-roofed sugar processing buildings" },
  { src: "beet-unloading", w: 1200, h: 1600, category: "Deliveries", title: "Beet deliveries at the processing site", alt: "Illustrative placeholder: Sugar beet being tipped from a red vehicle beside the factory" },
  { src: "beet-reception", w: 1600, h: 1200, category: "Deliveries", title: "Beet reception area", alt: "Illustrative placeholder: Delivered sugar beet beside the reception equipment" },
  { src: "beet-nursery", w: 1200, h: 1600, category: "Farming", title: "Young sugar beet plants", alt: "Illustrative placeholder: Green sugar beet plants growing in a cultivated bed" },
  { src: "image14", w: 900, h: 1200, category: "Factory", title: "Factory grounds from above", alt: "Illustrative placeholder: Elevated view across the factory grounds and surrounding landscape" },
  { src: "factory-evening", w: 1200, h: 1600, category: "Factory", title: "Factory grounds in the evening", alt: "Illustrative placeholder: Illuminated buildings and the beet reception area at night" },
  { src: "image5", w: 1280, h: 960, category: "People", title: "People at the factory site", alt: "Illustrative placeholder: A group wearing high-visibility vests and protective helmets at the site" },
  { src: "image38", w: 864, h: 1152, category: "People", title: "Sugar beet in the field", alt: "Illustrative placeholder: A person holding harvested beet in a field" },
  { src: "image26", w: 900, h: 1200, category: "Factory", title: "Sugar crystals", alt: "Illustrative placeholder: A sample of sugar crystals held in a hand" },
];
const categories = ["All", "Farming", "Deliveries", "Factory", "People"];

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const viewer = useRef<HTMLDialogElement>(null);
  const headingId = useId();

  useEffect(() => {
    const dialog = viewer.current;
    if (!dialog) return;
    if (!selected) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; };
  }, [selected]);

  const closeViewer = () => setSelected(null);
  const visible = photos.filter(photo => active === "All" || photo.category === active);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Filter photographs">
        {categories.map(category => {
          const selected = active === category;
          const count = category === "All" ? photos.length : photos.filter(p => p.category === category).length;
          return <button key={category} onClick={() => setActive(category)} aria-pressed={selected}
            className={`px-5 py-2.5 rounded-full text-sm transition-colors duration-200 cursor-pointer border ${selected ? "bg-brand-red text-white border-brand-red" : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"}`}>
            {category}<span className={`ml-2 text-xs ${selected ? "text-white/70" : "text-zinc-400"}`}>{count}</span>
          </button>;
        })}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((photo, index) => <motion.figure key={photo.src} layout initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ delay: (index % 3) * 0.06, ...spring }}>
            <button type="button" onClick={() => { setImageFailed(false); setSelected(photo); }} aria-label={`Enlarge photo: ${photo.title}`}
              aria-haspopup="dialog" className="group relative block h-80 w-full cursor-zoom-in overflow-hidden rounded-2xl bg-zinc-100 text-left">
              <Image src={`/media/${photo.src}.svg`} width={photo.w} height={photo.h} alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/85 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3" aria-hidden="true">
                <span><span className="block text-xs uppercase tracking-[0.15em] text-zinc-200">{photo.category}</span>
                  <span className="block font-heading text-lg text-white mt-1">{photo.title}</span></span>
                <Maximize2 size={18} className="text-white shrink-0" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="sr-only">{photo.title}</figcaption>
          </motion.figure>)}
        </AnimatePresence>
      </motion.div>

      <dialog ref={viewer} aria-labelledby={headingId} onCancel={closeViewer} onClose={closeViewer}
        onClick={event => { if (event.target === event.currentTarget) closeViewer(); }}
        data-lenis-prevent className="fixed m-auto w-[calc(100%_-_2rem)] max-w-6xl max-h-[calc(100dvh_-_2rem)] overflow-y-auto rounded-2xl border border-white/20 bg-zinc-950 p-0 text-white shadow-2xl backdrop:bg-black/90">
        {selected && <div className="p-4 md:p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400">{selected.category}</p>
              <h2 id={headingId} className="mt-1 text-lg md:text-xl font-medium">{selected.title}</h2>
            </div>
            <button type="button" onClick={closeViewer} aria-label="Close photo viewer" autoFocus
              className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white">
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          {imageFailed ? <p role="alert" className="rounded-xl bg-white/10 p-8 text-center">This photograph could not be loaded. Please close the viewer and try again.</p> :
            <Image src={`/media/${selected.src}.svg`} width={selected.w} height={selected.h} alt={selected.alt}
              onError={() => setImageFailed(true)} className="mx-auto h-auto max-h-[72dvh] w-full rounded-lg object-contain" />}
          <p className="mt-4 text-sm text-zinc-400">Select Close or press Escape to return to the gallery.</p>
        </div>}
      </dialog>
    </div>
  );
}
