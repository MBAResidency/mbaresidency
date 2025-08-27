import ComingSoonMarquee from "@/components/ComingSoonMarquee";
import BrandSection from "@/components/BrandSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ComingSoonMarquee />
      <BrandSection />
      <WhatWeDoSection />
      <ContactForm />
      <SocialLinks />
    </main>
  );
};

export default Index;
