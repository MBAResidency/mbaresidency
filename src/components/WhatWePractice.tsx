import { Brain, Heart, Moon } from "lucide-react";

const WhatWePractice = () => {
  const coreEnergies = [
    {
      icon: Brain,
      title: "Thought Energy",
      description:
        "Clear mental clutter. Remove hidden blockers, lighten your mental load, and move from reactivity to sharp, intentional thinking.",
      color: "blue",
      bgColor: "bg-green-50",
      borderColor: "border-blue-200",
      iconColor: "text-green-600",
    },
    {
      icon: Heart,
      title: "Vital Energy",
      description:
        "Rebuild your energy from the ground up. Engage in natural hydration, modern grounding, and mindful movement through outdoor play—designed to recharge without overwhelm.",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: Moon,
      title: "Rest Energy",
      description:
        "Restore what hustle takes away. Practice deep rest with Yoga Nidra—proven to lower stress, upgrade immunity, and improve mental clarity.",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What you will practice
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core energies that power sustainable leadership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreEnergies.map((energy, index) => (
            <div
              key={index}
              className={`${energy.bgColor} ${energy.borderColor} border rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div
                className={`w-16 h-16 ${energy.bgColor} ${energy.borderColor} border rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <energy.icon className={`w-8 h-8 ${energy.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {energy.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {energy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWePractice;
