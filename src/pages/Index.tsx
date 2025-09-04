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

      <footer className="py-12 text-center text-sm text-muted-foreground">
        Designed for Founders by Founders of North Expedition
      </footer>
    </main>
  );
};

export default Index;
