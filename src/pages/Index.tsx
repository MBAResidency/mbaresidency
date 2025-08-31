import ComingSoonMarquee from "@/components/ComingSoonMarquee";
import BrandSection from "@/components/BrandSection";
import WhatWePractice from "@/components/WhatWePractice";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ComingSoonMarquee />
      <BrandSection />
      <WhatWePractice />
      <ContactForm />
      <SocialLinks />
    </main>
  );
};

export default Index;
