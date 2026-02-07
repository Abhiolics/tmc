"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { PinContainer } from "./ui/3d-pin"
import AutoPin from "./ui/autopin"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<any>({})
  const [submitted, setSubmitted] = useState(false)

  /* Handle Input */
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  /* Validation */
  const validate = () => {
    const newErrors: any = {}

    if (!form.name) newErrors.name = "Name is required"
    if (!form.email) newErrors.email = "Email is required"
    if (!form.message) newErrors.message = "Message is required"

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /* Submit */
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!validate()) return

    setSubmitted(true)

    // Connect API here later
    console.log("Form Data:", form)
  }

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">

      {/* Bottom Right Corner Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-pink-500/30 via-purple-500/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            {/* Icon */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-pink-500">
              <Mail size={22} />
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
              Contact Us
            </h2>

            <p className="font-jost text-white/70 max-w-md mb-8">
              We are always looking for ways to improve our services.
              Contact us and let us know how we can help you.
            </p>

            {/* Info */}
            <div className="space-y-3 text-sm font-jost text-white/70">

              <p>📧 info@metropolitanclubs.com</p>
              <p>📞 +91-955 930 9666</p>

            </div>

            {/* Location */}
<div className="mt-1  flex flex-col items-start">

  {/* Label */}

  {/* Pin Wrapper */}
  <div className="w-full max-w-md">

    <AutoPin />

  </div>

</div>



          </div>

          {/* Right Form */}
          <div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 shadow-2xl">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div>
                  <label className="block text-sm text-white/80 mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-pink-500"
                  />

                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-white/80 mb-1">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-pink-500"
                  />

                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm text-white/80 mb-1">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Enter your company name (optional)"
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-pink-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-white/80 mb-1">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-pink-500 resize-none"
                  />

                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="
                    w-full rounded-lg h-14
                    bg-pink-600
                    py-2.5
                    text-sm font-semibold text-white
                    shadow-lg
                    hover:bg-pink-700
                    transition
                    disabled:opacity-60
                  "
                >
                  {submitted ? "Submitted " : "Submit"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
