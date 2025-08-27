import { Brain, Heart, Sparkles, Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Mind Wellness",
      description: "Develop mental clarity and focus through mindfulness practices, meditation techniques, and cognitive wellness strategies that enhance your mental well-being."
    },
    {
      icon: Heart,
      title: "Body Health",
      description: "Strengthen your physical foundation with personalized fitness routines, nutrition guidance, and holistic approaches to maintaining optimal body health."
    },
    {
      icon: Sparkles,
      title: "Aaram (Peace)",
      description: "Find your inner peace through relaxation techniques, stress management, and creating harmony between your mind, body, and soul for complete wellness."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Do
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in a holistic approach to wellness that encompasses your mind, body, and spirit. 
            Our comprehensive programs are designed to help you achieve balance and harmony in all aspects of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;