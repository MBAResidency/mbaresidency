import { Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Rohan",
      handle: "@FounderRohan",
      url: "https://x.com/FounderRohan",
      description: "",
    },
    {
      name: "Kirtika Goyal",
      handle: "@kirtikastwt",
      url: "https://x.com/kirtikastwt",
      description: "",
    },
    {
      name: "Srikarmk",
      handle: "@Srikarismad",
      url: "https://x.com/Srikarismad",
      description: "",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Connect With Us
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with the team to know more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {socialLinks.map((link, index) => (
            <Card
              key={index}
              className="relative shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 border bg-card group cursor-pointer"
            >
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <Twitter className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-1">
                  {link.name}
                </h4>
                <p className="text-primary font-medium mb-3 text-sm">
                  {link.handle}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  {link.description}
                </p>
                <div className="inline-flex items-center gap-2 text-primary transition-colors duration-200 font-medium text-sm">
                  <Twitter className="w-4 h-4" />
                  Follow
                </div>
              </CardContent>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${link.name} on X`}
                className="absolute inset-0"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
