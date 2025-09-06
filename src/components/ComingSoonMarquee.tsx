const ComingSoonMarquee = () => {
  const scrollToApply = () => {
    console.log("Scroll function called - attempting to scroll to form");

    // Method 1: Try by ID
    const byId = document.getElementById("apply-section");
    console.log("Found by ID:", byId);

    // Method 2: Try by querySelector
    const byQuery = document.querySelector("#apply-section");
    console.log("Found by querySelector:", byQuery);

    // Method 3: Try by text content
    const byText = Array.from(document.querySelectorAll("section")).find(
      (section) => section.textContent?.includes("Apply for the Residency")
    );
    console.log("Found by text:", byText);

    // Try to scroll with whichever method worked
    const target = byId || byQuery || byText;

    if (target) {
      console.log("Scrolling to target element");
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("No target found, scrolling to bottom of page");
      // Just scroll to a position that should be near the form
      window.scrollTo({
        top: window.innerHeight * 2, // Scroll down 2 viewport heights
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="bg-secondary text-secondary-foreground py-3 overflow-hidden whitespace-nowrap cursor-pointer hover:bg-secondary/80 transition-colors"
      onClick={scrollToApply}
    >
      <div className="animate-marquee inline-block">
        <span className="text-lg font-semibold mx-8">
          Coming Soon - Mind. Body. Aaram
        </span>
        <span className="text-lg font-semibold mx-8">
          Redesign How You Build (and Live)
        </span>
        <span className="text-lg font-semibold mx-8">
          Founder Residency Applications Opening Soon
        </span>
        <span className="text-lg font-semibold mx-8">
          Coming Soon - Mind. Body. Aaram
        </span>
        <span className="text-lg font-semibold mx-8">
          Redesign How You Build (and Live)
        </span>
        <span className="text-lg font-semibold mx-8">
          Founder Residency Applications Opening Soon
        </span>
      </div>
    </div>
  );
};

export default ComingSoonMarquee;
