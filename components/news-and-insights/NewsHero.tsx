export default function NewsHero() {
    return (
        <section className="w-full bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white">
            <div className="mx-auto flex w-full max-w-[1442px] items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex w-full max-w-[1442px] flex-col items-center justify-center pb-16 sm:pb-20 lg:pb-64 lg:h-[500px] lg:aspect-[199/69]">
                    <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[40px]">
                        <span>News &amp; </span>
                        <span className="text-[#1F3A93]">Insights</span>
                    </h1>
                    <p className="mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/90 sm:text-base">
                        Stay ahead with the latest trade updates, regulatory changes, and
                        market insights across electronics and healthcare industries.
                    </p>

                </div>
            </div>
        </section>
    )
}

