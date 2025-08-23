export default function Builders() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">For NCR Builders</h1>
          <p className="text-xl text-gray-600">
            From Faridabad to Delhi, trade your caffeine crashes for a coconut-water ritual— and raise your energy for
            the day.
          </p>
        </div>
      </section>

      {/* Real-time Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm text-emerald-600 font-medium">LIVE UPDATE</span>
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6">
              "Just finished my morning ritual instead of reaching for coffee. Energy feels different—cleaner, more
              sustained."
            </blockquote>
            <cite className="text-lg text-emerald-600 font-semibold">
              — Arjun, Gurgaon FinTech Founder • 2 hours ago
            </cite>
          </div>
        </div>
      </section>

      {/* Why NCR Needs This Reset */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Why NCR Needs This Reset</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            You're building in one of the loudest cities in the world — where ambition is high, and energy is always
            leaking.
          </p>
        </div>
      </section>

      {/* Local Context */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Built for NCR Reality</h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calibrated For Urban Rhythm</h3>
                <p className="text-gray-600">
                  Our daily practices are built to work inside real urban schedules and energy tools are adapted for
                  Delhi's air, noise, and tempo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship That Moves You</h3>
                <p className="text-gray-600">
                  Not motivation. Not theory. Just deep shifts from those who've built through the chaos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Sports Integration</h3>
                <p className="text-gray-600">
                  Pre-booked slots at complexes across Delhi, UP, and Haryana. No more excuses about finding time or
                  space.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Investor Network Access</h3>
                <p className="text-gray-600">
                  Connect with angels who understand the NCR startup ecosystem and its unique challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Break the Cycle?</h2>
          <p className="text-xl mb-8">Join 20 NCR founders who are choosing MIND BODY AARAM over CAFFEINE CRASHES.</p>
          <a
            href="/join"
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Lock-in Your Seat For Aug 04–Aug 10
          </a>
        </div>
      </section>
    </div>
  )
}
