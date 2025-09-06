import { useState } from "react";

const BrandSection = () => {
  const [activeTab, setActiveTab] = useState<"founders" | "investors">(
    "founders"
  );

  const scrollToApply = () => {
    const applySection = document.getElementById("apply-section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <section className="py-5 text-center">
          <h2 className="text-3xl md:text-7xl font-bold text-green-600">
            <span className="text-black">Your body is your</span> co-founder
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-8">
            Let its rhythm lead
          </p>
        </section>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setActiveTab("founders")}
              className={`px-6 py-2 rounded-md text-base font-medium transition-all ${
                activeTab === "founders"
                  ? "bg-gray-100 text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Founders
            </button>
            <button
              onClick={() => setActiveTab("investors")}
              className={`px-6 py-2 rounded-md text-base font-medium transition-all ${
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
        <div className="mb-8 max-w-3xl mx-auto text-left md:text-center">
          {activeTab === "founders" ? (
            <div>
              <h3 className="text-md md:text-lg font-semibold text-foreground mb-3">
                Build from alignment, not exhaustion.
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground">
                Founders who lead from alignment report up to 500% increase in
                productivity and a reduction of stress by over 490% when mind,
                body, and rest are in sync.
              </p>
              {/* <p className="text-xs md:text-sm text-muted-foreground mt-3 italic">
                *Based on global studies on flow state and nervous system
                regulation.
              </p> */}
            </div>
          ) : (
            <div>
              <h3 className="text-md md:text-lg font-semibold text-foreground mb-3">
                Back resilience, not just valuations.
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground">
                Startups led by aligned founders show 2.5x higher returns and
                greater long-term stability.
              </p>
              {/* <p className="text-xs md:text-sm text-muted-foreground mt-3 italic">
                *Based on global studies linking founder well-being to
                performance.
              </p> */}
            </div>
          )}
        </div>
        <div className="animate-fade-in">
          <div className="text-3xl md:text-4xl font-bold mb-4 sm:flex items-center justify-center gap-5">
            {/* <span className="text-green-600 block sm:inline">MBA : </span> */}
            <span className="text-black text-xl md:text-2xl mt-2">
              Mind Body Aaram
            </span>
          </div>

          {/* <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" /> */}

          {/* Toggle Section */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              MBA is not a course but a practice to realign with your vision
            </p>

            <button
              onClick={scrollToApply}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
