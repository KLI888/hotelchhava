import SectionWrapper from "@/components/SectionWrapper";

const galleryModules = import.meta.glob("../assets/photos/*.{jpeg,jpg,png}", { eager: true }) as Record<
  string,
  { default: string }
>;

const galleryImages = Object.entries(galleryModules)
  .map(([path, mod]) => ({ path, src: mod.default }))
  .sort((a, b) => a.path.localeCompare(b.path));

const GallerySection = () => {
  return (
    <SectionWrapper id="gallery" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="w-24 h-[2px] gradient-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-[0.15em]">
            CHHAVA Art Gallery
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto text-lg leading-8">
            Discover restaurant moments, royal dining scenes, and the warm ambience of CHHAVA captured in our curated photo gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.path}
              className="overflow-hidden rounded-3xl border border-border bg-card/70 shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={image.src}
                alt={`CHHAVA gallery photo ${index + 1}`}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
