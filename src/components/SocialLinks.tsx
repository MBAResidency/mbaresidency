import { Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Rohan",
      handle: "@rohan",
      url: "#",
      description: ""
    },
    {
      name: "Kirtika Goyal", 
      handle: "@kirtikagoyal",
      url: "#",
      description: ""
    },
    {
      name: "Srikarmk",
      handle: "@Srikarismad", 
      url: "#",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Connect With Us
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Connect with the team to know more!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((link, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 bg-card group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Twitter className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h4 className="text-xl font-semibold text-card-foreground mb-2">
                  {link.name}
                </h4>
                
                <p className="text-primary font-medium mb-4">
                  {link.handle}
                </p>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {link.description}
                </p>
                
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
                >
                  <Twitter className="w-4 h-4" />
                  Follow
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;