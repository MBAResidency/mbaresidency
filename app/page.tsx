import Link from "next/link"
import { Play, Users, Calendar, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
              Your body is your <span className="gradient-text">co-founder</span>.
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 mb-8">Time to listen.</p>

            {/* Muted Video Placeholder */}
            <div className="relative w-full h-64 lg:h-80 mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-400 via-emerald-200 to-green-300">
              <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-medium">
                Delhi NCR Skyline → Green Rhythm (Video Placeholder)
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100">
                <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Clean Energy, Not Caffeine</h3>
                <p className="text-gray-600">Swap jittery buzz for sustained focus.</p>
              </div>

              <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-6 shadow-sm border border-teal-100">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Limited to 20 NCR Founders</h3>
                <p className="text-gray-600">Intimate cohort, zero noise.</p>
              </div>

              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100">
                <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Next Cohort Starts August 04</h3>
                <p className="text-gray-600">Cement your edge before the next fundraising round.</p>
              </div>
            </div>

            <Link
              href="/join"
              className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-semibold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              <Play className="w-6 h-6" />
              <span>Apply Now — Dissolve in new rhythm from Aug 04–Aug 10</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The 7-Day Journey</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We architect every day to recharge your mind, body, and rest cycles. No fluff—just a clear rhythm that
            scales with your startup.
          </p>
          <Link
            href="/program"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-12"
          >
            Explore the Rhythm →
          </Link>

          <div className="grid md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mx-auto mb-2"></div>
              <span className="font-medium text-sm">Morning Rituals</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mx-auto mb-2"></div>
              <span className="font-medium text-sm">Deep Work Blocks</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mx-auto mb-2"></div>
              <span className="font-medium text-sm">Afternoon Fuel</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mx-auto mb-2"></div>
              <span className="font-medium text-sm">Mandatory Sports</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mx-auto mb-2"></div>
              <span className="font-medium text-sm">Group Mentorship</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mx-auto mb-2"></div>
              <span className="font-medium text-sm">Evening Reflection</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
