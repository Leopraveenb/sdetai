import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, ArrowLeft, Shield, Lock, Bot } from "lucide-react";
import { Link } from "react-router-dom";
// import automationRobotIcon from "@/assets/automation-robot-icon.jpg";

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="border-b border-electric/30 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img  alt="SDET AI" className="h-10 w-10 rounded-lg ai-pulse" />
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

      {/* Login Form */}
      <section className="py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          <Card className="bg-card border-electric/30 electric-glow">
            <CardHeader className="text-center">
              <div className="h-16 w-16 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-electric-pulse">
                <Shield className="h-8 w-8 text-electric" />
              </div>
              <CardTitle className="text-2xl text-electric-bright flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                AI Admin Dashboard
              </CardTitle>
              <CardDescription>
                Secure access to student enrollment data and AI-powered course analytics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-electric">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="admin@sdetai.academy"
                  required 
                  className="bg-input border-electric/30 focus:border-electric"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-electric">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your secure password"
                  required 
                  className="bg-input border-electric/30 focus:border-electric"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-electric data-[state=checked]:bg-electric" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me on this device
                </Label>
              </div>

              <Button 
                className="w-full electric-border bg-electric text-black hover:bg-electric-bright animate-cyber-float" 
                size="lg" 
                asChild
              >
                <Link to="/admin-dashboard" className="flex items-center justify-center gap-2 text-electric-green-bright">
                  <Bot className="w-5 h-5" />
                  Access AI Dashboard
                </Link>
              </Button>

              <div className="text-center">
                <a href="#" className="text-sm text-electric hover:underline">
                  Forgot your password?
                </a>
              </div>

              <div className="border-t border-electric/30 pt-4 text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-electric mb-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Secure AI-Protected Access</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Admin access only. All activities are monitored by AI security systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;