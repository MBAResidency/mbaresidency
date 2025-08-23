import { Package, Users, MapPin, BookOpen, MessageCircle, Video } from "lucide-react"

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Investment Value - Move to top */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Complete Package Value</h2>
          <p className="text-2xl font-bold italic mb-4">Founder Priority Window: Closes July 31st</p>
          <p className="text-3xl font-bold mb-4">Your Investment: ₹9,000</p>
          <p className="text-lg mb-8">
            Apply early and unlock up to 25% off before we go live with public pricing of ₹12,000
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Your Complete Experience</h1>
          <p className="text-xl text-gray-600">
            Everything you need to transform your energy, delivered with precision and care.
          </p>
        </div>
      </section>

      {/* Physical Components */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Physical</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Deliveries</h3>
              <p className="text-gray-600">
                Fresh coconut water + salad boxes delivered to your doorstep. No thinking required—just fuel for peak
                performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports Complex Access</h3>
              <p className="text-gray-600">
                Pre-booked slots across Delhi, UP, Haryana. Your Favourite Sports— that moves your body and clears your
                mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mud Farm Finale</h3>
              <p className="text-gray-600">
                Real-world reset at a regenerative North India farm. Pitch your progress, then network under mud houses
                with top angels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Components */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Community</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Sessions</h3>
              <p className="text-gray-600">
                60-min calls with founder coaches, wellness experts, and angel investors. Real conversations, real
                insights, real connections.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exclusive Circle</h3>
              <p className="text-gray-600">
                A private, quiet group for honest check-ins and lasting bonds. No noise, just support from founders who
                get it.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifetime Access to Aranya Farms</h3>
              <p className="text-gray-600">
                Your go to place for cold plunges, barefoot mornings, wholesome food, and stillness. No agenda. Just
                reconnection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Transformation</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy Practices</h3>
              <p className="text-gray-600">
                Simple rituals to protect and renew your focus. No complex systems— just proven techniques that work in
                the real world of startup chaos.
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reflection Tools</h3>
              <p className="text-gray-600">
                Daily prompts that keep you aligned with purpose. Track your energy, measure your progress, and stay
                connected to your why.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mindset Shifts</h3>
              <p className="text-gray-600">
                Real rest isn't a reward—it's part of the build. Reframe recovery as a strategic advantage, not a
                luxury.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
