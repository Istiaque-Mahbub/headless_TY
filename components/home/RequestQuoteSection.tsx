"use client"

import { useState } from "react"
import Image from "next/image"
import arrowIcon from "@/public/up right.svg"
import RequestQuoteHeading from "./RequestQuoteHeading"
import { toast } from "sonner"
export default function RequestQuoteSection() {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    country: "",
    inquiry_type: "",
    message: ""
  })

  const [status, setStatus] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus("Submitting...")

    try {
      const res = await fetch("http://try-headless.local/wp-json/custom/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (data.success) {
        setFormData({
          first_name: "",
          email: "",
          country: "",
          inquiry_type: "",
          message: ""
        
        })
        toast.success("Form submitted successfully! 🎉")
      } else {
        toast.error(data.message || "Failed to submit the form.")
      }
    } catch (err) {
      console.error(err)
      setStatus("Error submitting form.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="flex w-full justify-center mt-10 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-center rounded-t-[4000px] bg-[rgba(31,58,147,0.04)] pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-[176px] lg:pb-[59px]">
          {/* IMPORTANT: onSubmit is on the form */}
          <form
            className="flex w-full max-w-[971px] flex-col gap-10"
            onSubmit={handleSubmit}
          >
            {/* Heading */}
            <div className="w-full text-center px-2 sm:px-0">
              <RequestQuoteHeading />
            </div>

            {/* Grid Inputs */}
            <div className="grid w-full gap-6 sm:grid-cols-2">
              {[
                { id: "first_name", label: "Full Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "country", label: "Country", type: "text" }
              ].map(field => (
                <div key={field.id} className="flex flex-col gap-1">
                  <label
                    htmlFor={field.id}
                    className="text-xs font-medium text-gray-600 sm:text-sm"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                  />
                </div>
              ))}

              {/* Inquiry Type */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="inquiry_type"
                  className="text-xs font-medium text-gray-600 sm:text-sm"
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  required
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="general">General</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="quotation">Quotation</option>
                  <option value="feedback">Feedback</option>
                  <option value="sourcing-export">Sourcing &amp; Export</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="w-full">
              <label htmlFor="message" className="mb-1 block text-xs font-medium text-gray-600 sm:text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none border-b border-gray-300 bg-transparent pb-1 text-sm text-gray-900 outline-none transition-colors focus:border-[#1F3A93]"
              />
            </div>

            {/* Submit */}
            <div className="w-full flex  border-b border-gray-200 pb-6">
              <button
                type="submit" // MUST be "submit"
                disabled={submitting}
                className="mt-4 inline-flex items-start gap-2 rounded-full bg-[#1F3A93] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1F3A93]/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F3A93]"
              >
                <span>{submitting ? "Submitting..." : "Send Message"}</span>
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