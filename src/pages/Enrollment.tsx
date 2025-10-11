import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, ArrowLeft, Bot, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
// import automationRobotIcon from "@/assets/automation-robot-icon.jpg";

import { useState } from "react";

const Enrollment = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    currentRole: "",
    motivation: "",
    hearAbout: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSelectChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const enrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    enrollments.push(form);
    localStorage.setItem("enrollments", JSON.stringify(enrollments));
    alert("Enrollment submitted successfully!");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experience: "",
      education: "",
      currentRole: "",
      motivation: "",
      hearAbout: "",
      newsletter: false,
    });
  };
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="border-b border-electric/30 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-electric-bright">SDET AI Academy</h1>
          </div>
          <Button variant="ghost" asChild className="text-electric hover:bg-electric/20">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Enrollment Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-electric/20 text-electric px-4 py-2 rounded-full mb-4 animate-electric-pulse">
              <Bot className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered SDET Training</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-green to-electric-green-bright bg-clip-text text-transparent">
              Enroll in Full Stack SDET Automation
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our elite AI-powered automation testing program and transform your career
            </p>
          </div>

          <Card className="bg-card border-electric/30 electric-glow">
            <CardHeader>
              <CardTitle className="text-electric-bright flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Student Information
              </CardTitle>
              <CardDescription>
                Please fill out all required fields to complete your enrollment in our AI-enhanced program
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-electric">First Name *</Label>
                    <Input
                      id="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                      className="bg-input border-electric/30 focus:border-electric"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-electric">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                      className="bg-input border-electric/30 focus:border-electric"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-electric">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-input border-electric/30 focus:border-electric"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-electric">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="bg-input border-electric/30 focus:border-electric"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-electric">Experience Level *</Label>
                  <Select value={form.experience} onValueChange={val => handleSelectChange("experience", val)}>
                    <SelectTrigger className="bg-input border-electric/30 focus:border-electric">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-electric/30">
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education" className="text-electric">Educational Background</Label>
                  <Input
                    id="education"
                    value={form.education}
                    onChange={handleChange}
                    placeholder="e.g., Bachelor's in Computer Science"
                    className="bg-input border-electric/30 focus:border-electric"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentRole" className="text-electric">Current Job Role</Label>
                  <Input
                    id="currentRole"
                    value={form.currentRole}
                    onChange={handleChange}
                    placeholder="e.g., QA Analyst, Developer, etc."
                    className="bg-input border-electric/30 focus:border-electric"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-electric">Why do you want to join this AI-powered course? *</Label>
                  <Textarea
                    id="motivation"
                    value={form.motivation}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and how AI automation testing can transform your career..."
                    className="min-h-[100px] bg-input border-electric/30 focus:border-electric"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hearAbout" className="text-electric">How did you hear about us?</Label>
                  <Select value={form.hearAbout} onValueChange={val => handleSelectChange("hearAbout", val)}>
                    <SelectTrigger className="bg-input border-electric/30 focus:border-electric">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-electric/30">
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend Referral</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="ai-communities">AI/Tech Communities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              <div className="border-t border-electric/30 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-electric-bright flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AI-Enhanced Course Details
                </h3>
                <div className="bg-card/50 border border-electric/20 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Premium Course Fee:</span>
                    <span className="font-semibold text-electric">₹35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>12 weeks intensive</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>AI-assisted online labs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Features:</span>
                    <span className="text-electric">Personalized learning paths</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Batch Starts:</span>
                    <span className="text-electric font-semibold">January 15, 2024</span>
                  </div>
                </div>
              </div>



                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    className="border-electric data-[state=checked]:bg-electric"
                    checked={form.newsletter}
                    onCheckedChange={checked => setForm(prev => ({ ...prev, newsletter: checked === true }))}
                  />
                  <Label
                    htmlFor="newsletter"
                    className="text-sm cursor-pointer"
                    onClick={() => setForm(prev => ({ ...prev, newsletter: !prev.newsletter }))}
                  >
                    I want to receive AI course updates and automation testing insights
                  </Label>
                </div>

                <Button
                  className="w-full electric-border bg-electric text-black hover:bg-electric-bright animate-electric-pulse"
                  size="lg"
                  type="submit"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Complete AI-Powered Enrollment
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  After enrollment, you'll receive a confirmation email with AI lab access credentials
                  and course materials powered by our advanced learning algorithms.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;