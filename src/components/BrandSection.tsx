import { useState } from "react";

const BrandSection = () => {
  const [activeTab, setActiveTab] = useState<"founders" | "investors">(
    "founders"
  );

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            MBA
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Mind Body Aaram
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />

          {/* Toggle Section */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Because the way you show up matters more than what you ship.
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-white rounded-lg p-1 shadow-sm border">
                <button
                  onClick={() => setActiveTab("founders")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "founders"
                      ? "bg-gray-100 text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Founders
                </button>
                <button
                  onClick={() => setActiveTab("investors")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "investors"
                      ? "bg-gray-100 text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Investors
                </button>
              </div>
            </div>

            {/* Content based on active tab */}
            <div className="mb-8">
              {activeTab === "founders" ? (
                <p className="text-lg text-muted-foreground">
                  Clarity, rhythm, and real rest—so you make better decisions
                  and enjoy the build.
                </p>
              ) : (
                <p className="text-lg text-muted-foreground">
                  Healthy founders build resilient companies. Strong energy →
                  better leadership → better outcomes.
                </p>
              )}
            </div>

            {/* Coming Soon Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
