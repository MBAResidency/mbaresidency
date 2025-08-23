"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, MapPin, IndianRupee, CheckCircle } from "lucide-react"

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    stage: "",
    location: "",
    experience: "",
    goals: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Join the Next Cohort</h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your energy, transform your startup. Limited to 20 NCR founders.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Cohort</h3>
              <p className="text-gray-600">Aug 04–Aug 10</p>
              <p className="text-sm text-gray-500">Online + Local Resets</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <IndianRupee className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment</h3>
              <p className="text-gray-600">₹12,000</p>
              <p className="text-sm text-gray-500">Complete experience included</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">NCR Region</p>
              <p className="text-sm text-gray-500">Delhi, UP, Haryana, Gurgaon, Faridabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Who Should Apply</h2>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-700 text-center mb-8">
              Delhi, UP, Haryana, Gurgaon, Faridabad founders ready to replace burnout with flow. We handle
              logistics—you show up.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span>Active startup founders in NCR</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span>Experiencing energy crashes or burnout</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span>Ready to commit 7 days to transformation</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span>Open to changing daily routines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span>Seeking sustainable performance practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span>Want to connect with like-minded founders</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why ₹12K Is a No-Brainer</h3>
            <p className="text-lg text-gray-600">
              This is the smartest ₹12K you'll ever spend on your startup—because sustainable energy outlasts any growth
              hack.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Apply Below</h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select your location</option>
                  <option value="delhi">Delhi</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="noida">Noida</option>
                  <option value="faridabad">Faridabad</option>
                  <option value="ghaziabad">Ghaziabad</option>
                  <option value="other-ncr">Other NCR</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Startup Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2">
                  Startup Stage *
                </label>
                <select
                  id="stage"
                  name="stage"
                  required
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select stage</option>
                  <option value="idea">Idea Stage</option>
                  <option value="mvp">MVP/Pre-Revenue</option>
                  <option value="early-revenue">Early Revenue</option>
                  <option value="scaling">Scaling</option>
                  <option value="growth">Growth Stage</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Current Energy Challenges *
              </label>
              <textarea
                id="experience"
                name="experience"
                required
                rows={4}
                value={formData.experience}
                onChange={handleChange}
                placeholder="Describe your current energy challenges, daily routine, and what you hope to change..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                What do you hope to achieve in 7 days? *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                placeholder="Your specific goals and expectations from the program..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              Submit Application — Secure Your Spot
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Applications are reviewed within 24 hours. Limited to 20 founders.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
