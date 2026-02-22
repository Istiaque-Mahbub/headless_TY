"use client"

interface RequestQuoteHeadingProps {
  className?: string
}

export default function RequestQuoteHeading({
  className = "",
}: RequestQuoteHeadingProps) {
  return (
    <h2
      className={`text-center font-[Montserrat] text-[48px] font-semibold leading-normal tracking-[-0.96px] capitalize text-(--Color-Black,#000) ${className}`}
    >
      request for{" "}
      <span className="text-(--Color-Blue,#1F3A93)">
        quote
      </span>
    </h2>
  )
}

