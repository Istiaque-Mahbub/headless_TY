"use client"

import Image from "next/image"
import arrowIcon from "@/public/up right.svg"
import RequestQuoteHeading from "./RequestQuoteHeading"

export default function RequestQuoteSection() {
    return (
        <section className="flex w-full justify-center bg-white py-16 sm:py-20 lg:py-20">
            <div className="flex w-full max-w-[1440px] justify-center px-4 sm:px-6 lg:px-[20px]">
                <div className="flex w-full justify-center rounded-t-[4000px] bg-[rgba(31,58,147,0.04)] pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-[176px] lg:pb-[59px]">
                    <form
                        className="flex w-full max-w-[971px] flex-col items-start gap-10"
                        noValidate
                    >
                        <div className="w-full text-center">
                            <RequestQuoteHeading />
                        </div>

                        <div className="grid w-full gap-6 sm:grid-cols-2">
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="full-name"
                                    className="text-xs font-medium text-gray-600 sm:text-sm"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="full-name"
                                    name="fullName"
                                    type="text"
                                    required
                                    aria-required="true"
                                    className="w-full border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="email"
                                    className="text-xs font-medium text-gray-600 sm:text-sm"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    aria-required="true"
                                    className="w-full border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="country"
                                    className="text-xs font-medium text-gray-600 sm:text-sm"
                                >
                                    Country
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    required
                                    aria-required="true"
                                    className="w-full border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="inquiry-type"
                                    className="text-xs font-medium text-gray-600 sm:text-sm"
                                >
                                    Inquiry Type
                                </label>
                                <select
                                    id="inquiry-type"
                                    name="inquiryType"
                                    required
                                    aria-required="true"
                                    className="w-full border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select an option
                                    </option>
                                    <option value="electronic-products">
                                        Electronic Products
                                    </option>
                                    <option value="healthcare-products">
                                        Healthcare Products
                                    </option>
                                    <option value="sourcing-export">
                                        Sourcing &amp; Export
                                    </option>
                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="message"
                                className="mb-1 block text-xs font-medium text-gray-600 sm:text-sm"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                aria-required="true"
                                className="w-full resize-none border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                            />
                        </div>

                        <div className="w-full border-b border-gray-200 pb-6">
                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1F3A93] px-4 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1F3A93]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F3A93]"
                            >
                                <span>Send Message</span>
                                <Image
                                    src={arrowIcon}
                                    alt="Send"
                                    width={16}
                                    height={16}
                                    className="h-4 w-4"
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

