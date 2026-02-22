"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { fetchHomeData } from "@/lib/fetchData/fetchLandingPage";
import { extractOurAddressSection } from "@/lib/fetchData/ourAddress";

// TypeScript interface
export interface OurAddressData {
  titleSubtitle: {
    heading: string;
    subtitle: string;
  };
  country: string;
  city: string;
  image: {
    url: string;
    alt: string;
  } | null;
}

export default function OurAddress() {
  const [data, setData] = useState<OurAddressData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchHomeData(extractOurAddressSection);
        if (!res) {
          console.warn("No OurAddress data returned");
          setData(null);
        } else {
          setData(res);
        }
      } catch (error) {
        console.error("Error fetching OurAddress section:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (!data) return <p className="text-center py-16">No data available</p>;

  // Split heading into parts for styling
  const headingParts = data.titleSubtitle.heading.split(/across/i);
  const headingFirst = headingParts[0].trim();
  const headingSecond = headingParts[1]?.trim() || "";

  return (
    <section className="w-full bg-gray-100 py-16 px-6 lg:px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          {headingFirst} <br />
          Across <span className="text-blue-700">{headingSecond}</span>
        </h1>

        <p className="text-gray-400 max-w-md text-base md:text-lg">
          {data.titleSubtitle.subtitle}
        </p>
      </div>

      {/* Map Section */}
      <div className="relative mt-14 max-w-7xl mx-auto">
        {data.image && (
          <Image
            src={data.image.url}
            alt={data.image.alt || "World Map"}
            width={1600}
            height={800}
            className="w-full h-auto object-contain"
            priority
            unoptimized
          />
        )}

        {/* Country Marker */}
        <div className="absolute top-[40%] left-[67%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

          {/* Tooltip Card (ABOVE marker) */}
          <div className="absolute bottom-14  w-64 bg-white rounded-xl shadow-xl p-4 text-center">
            <h4 className="font-semibold text-blue-700">
              {data.country}
            </h4>

            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-600">
              <MapPinIcon className="w-4 h-4 text-[#1F3A93]" />
              <span>{data.city}</span>
            </div>

            {/* Small Arrow */}
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-md"></div>
          </div>

          {/* Marker Icon */}
          <MapPinIcon className="w-8 h-8 border-2 drop-shadow-md z-10" />

          {/* Country Label */}
          <span className="text-white text-lg mt-1 font-semibold">
            {data.country}
          </span>
        </div>
      </div>
    </section>
  );
}
