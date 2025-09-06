import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    sector: "",
    website: "",
    email: "",
    role: "founder" as "founder" | "investor" | "cofounder" | "team",
    lookingForward: "",
    relationScore: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Calculate form completion progress
  const calculateProgress = () => {
    const fields = [
      formData.fullName,
      formData.email,
      formData.company,
      formData.sector,
      formData.website,
      formData.lookingForward,
    ];

    const filledFields = fields.filter((field) => field.trim() !== "").length;
    const totalFields = fields.length;

    return filledFields / totalFields;
  };

  const progress = calculateProgress();
  const scale = 1 + progress * 0.1; // Scale from 1.0 to 1.1 (10% increase max)

  // Calculate slider scale based on relation score (1-10)
  const sliderScale = 1 + (formData.relationScore - 1) * 0.05; // Scale from 1.0 to 1.09 (9% increase max)

  const roleOptions = [
    { key: "founder", label: "Solo Founder" },
    { key: "investor", label: "Investor" },
    { key: "cofounder", label: "Co-founder" },
    { key: "team", label: "Team member" },
  ] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace this with actual Supabase integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });

      setFormData({
        fullName: "",
        company: "",
        sector: "",
        website: "",
        email: "",
        role: "founder",
        lookingForward: "",
        relationScore: 5,
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="apply-section" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Card
            className="shadow-large border-0 bg-card transition-transform duration-500 ease-out"
            style={{ transform: `scale(${scale})` }}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                Apply for the Residency
              </CardTitle>
              <CardDescription className="text-base md:text-lg text-muted-foreground">
                Please share a few details to help us prepare for the residency.
              </CardDescription>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {Math.round(progress * 100)}% complete
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className="text-card-foreground font-medium"
                    >
                      Full name
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-card-foreground font-medium"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="sector"
                      className="text-card-foreground font-medium"
                    >
                      Sector
                    </Label>
                    <Input
                      id="sector"
                      name="sector"
                      type="text"
                      placeholder="Sector or industry"
                      value={formData.sector}
                      onChange={handleChange}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="website"
                      className="text-card-foreground font-medium"
                    >
                      Website address
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-card-foreground font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-card-foreground font-medium">
                    Role
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {roleOptions.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({ ...p, role: option.key }))
                        }
                        className={cn(
                          "px-4 py-2 rounded-md border text-sm",
                          formData.role === option.key
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="lookingForward"
                    className="text-card-foreground font-medium"
                  >
                    What are you looking forward to from Residency?
                  </Label>
                  <Textarea
                    id="lookingForward"
                    name="lookingForward"
                    placeholder="Share what you hope to get from the residency"
                    value={formData.lookingForward}
                    onChange={handleChange}
                    rows={4}
                    className="bg-background border-border focus:ring-primary resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-card-foreground font-medium">
                    On a scale of 1–10, how much do you relate with Mind Body
                    Aaram?
                  </Label>
                  <div className="px-1">
                    <div
                      className="slider-container"
                      style={
                        {
                          "--handle-scale": sliderScale,
                        } as React.CSSProperties
                      }
                    >
                      <Slider
                        value={[formData.relationScore]}
                        onValueChange={(v) =>
                          setFormData((p) => ({ ...p, relationScore: v[0] }))
                        }
                        min={1}
                        max={10}
                        step={1}
                      />
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-2">
                      {formData.relationScore}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Project
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
