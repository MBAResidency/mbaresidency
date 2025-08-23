import { Clock, Target, Calendar, Battery } from "lucide-react"

export default function Program() {
  const dailySchedule = [
    {
      time: "6:00 AM",
      activity: "Morning Rituals",
      description: "Hydration, grounding, and breathwork to kick-start thought energy.",
    },
    {
      time: "8:00 AM",
      activity: "Deep Work Blocks",
      description: "Uninterrupted mentored sprints on your biggest leverage tasks.",
    },
    {
      time: "9:00 AM",
      activity: "Do Your Jam",
      description: "Uninterrupted sprints on your biggest leverage tasks.",
    },
    {
      time: "1:00 PM",
      activity: "Afternoon Fuel",
      description: "Nutrient-dense salad box + dopamine reset.",
    },
    {
      time: "2:00 PM",
      activity: "Afternoon Fuel",
      description: "Uninterrupted sprints on your biggest leverage tasks.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">The 7-Day Journey</h1>
          <p className="text-xl text-gray-600">
            We architect every day to recharge your mind, body, and rest cycles. No fluff—just a clear rhythm that
            scales with your startup.
          </p>
        </div>
      </section>

      {/* Daily Rhythm */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Daily Rhythm</h2>

          <div className="grid gap-6">
            {dailySchedule.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{item.activity}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Afternoon Flow Message */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            And that's just the first half—your tailored afternoon & evening flow lands straight in your inbox, flexibly
            crafted around your peak energy rhythms beyond 2:00 PM
          </p>
        </div>
      </section>

      {/* Structure Without Constraints */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Structure Without Constraints</h2>
          <p className="text-xl text-gray-600 mb-8">
            Built for builders—we offer the hub, you fuel it with your energy.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100">
              <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scheduling</h3>
              <p className="text-gray-600">Plan with your body's peaks not with your calendar</p>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-6 shadow-sm border border-teal-100">
              <Target className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivering</h3>
              <p className="text-gray-600">Get sh*t done — without betraying your body.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100">
              <Battery className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conserving</h3>
              <p className="text-gray-600">Preserve your creative energy for what matters most</p>
            </div>
          </div>
        </div>
      </section>

      {/* Day 7 Finale */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Day 7 Finale</h2>
          <p className="text-xl mb-8">
            Pitch your progress to North India's top angels & spend a day at our mud house.
          </p>
          <div className="bg-white/10 rounded-2xl p-8">
            <p className="text-lg">
              Experience the transformation from burnout to breakthrough in a setting that reconnects you with the
              earth—and with fellow founders who've walked the same path.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
