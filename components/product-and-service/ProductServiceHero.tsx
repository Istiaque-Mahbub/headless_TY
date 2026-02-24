export default function ProductServiceHero() {
  return (
    <section className="flex w-full justify-center bg-white">
      <div className="box-border flex w-full flex-col items-center justify-center bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] px-4 text-white aspect-[199/69] lg:h-[420px]">
        <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Products &{" "}
          <span className="text-[#1F3A93]">Services</span>
        </h1>
        <p className="mt-4 max-w-3xl text-center text-sm text-white/90 sm:text-base">
          Connecting global markets with high-quality electronics, healthcare
          products, and comprehensive export solutions.
        </p>
      </div>
    </section>
  )
}
