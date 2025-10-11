import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, BookOpen, Award, Bot, Zap, Code2, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
// import aiHeroBg from "@/assets/ai-hero-bg.jpg";
// import automationRobotIcon from "@/assets/automation-robot-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="border-b border-electric/30 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-electric-bright">SDET AI Academy</h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-electric transition-colors">Home</Link>
            <Link to="/enrollment" className="text-foreground hover:text-electric transition-colors">Enroll</Link>
            <Link to="/admin-login" className="text-muted-foreground hover:text-electric transition-colors">Admin</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
        //   style={{ backgroundImage: `url(${aiHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-electric/20 text-electric border-electric animate-electric-pulse" variant="secondary">
              <Zap className="h-4 w-4 mr-1" />
              AI-Powered Automation Training
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-electric-green to-electric-green-bright bg-clip-text text-transparent">
              Full Stack SDET Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master end-to-end testing automation with cutting-edge AI frameworks and modern DevOps practices. 
              Become an elite Software Development Engineer in Test (SDET).
            </p>
            <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
              <Button asChild size="lg" className="electric-border bg-electric text-electric-bright hover:bg-electric-bright animate-cyber-float">
                  <Link to="/enrollment" className="text-electric-bright">
                  <Bot className="w-5 h-5 mr-2" />
                  Enroll Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-electric text-electric hover:bg-electric/20">
                <BookOpen className="w-5 h-5 mr-2" />
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-electric-bright">AI-Powered Course Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-electric/30 hover:border-electric transition-all duration-300 electric-glow hover:shadow-lg group">
              <CardHeader>
                <div className="h-12 w-12 bg-electric/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-electric-pulse">
                  <Bot className="h-6 w-6 text-electric" />
                </div>
                <CardTitle className="text-electric-bright">AI-Enhanced Learning</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Advanced AI algorithms personalize your learning journey and optimize automation strategies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-electric/30 hover:border-electric transition-all duration-300 electric-glow hover:shadow-lg group">
              <CardHeader>
                <div className="h-12 w-12 bg-electric/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-electric-pulse">
                  <Code2 className="h-6 w-6 text-electric" />
                </div>
                <CardTitle className="text-electric-bright">Full Stack Mastery</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Master frontend, backend, API, and mobile automation with cutting-edge frameworks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-electric/30 hover:border-electric transition-all duration-300 electric-glow hover:shadow-lg group">
              <CardHeader>
                <div className="h-12 w-12 bg-electric/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-electric-pulse">
                  <Cpu className="h-6 w-6 text-electric" />
                </div>
                <CardTitle className="text-electric-bright">DevOps Excellence</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Learn CI/CD pipelines, containerization, and cloud-native testing infrastructure
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-electric-bright">Advanced Curriculum</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-electric" />
                  <span>AI-Enhanced Selenium WebDriver Patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-electric" />
                  <span>Cypress & Playwright Modern Frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-electric" />
                  <span>AI-Powered API Testing & GraphQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-electric" />
                  <span>DevOps with Jenkins & GitHub Actions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-electric" />
                  <span>Docker & Kubernetes Testing Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-electric" />
                  <span>AI-Driven Performance Testing with JMeter</span>
                </div>
              </div>
            </div>
            <Card className="bg-card border-electric/30 electric-glow">
              <CardHeader>
                <CardTitle className="text-electric-bright">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <span>Duration: 12 weeks intensive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-electric" />
                  <span>Batch size: Max 20 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-electric" />
                  <span>Format: AI-assisted online labs</span>
                </div>
                <div className="border-t border-electric/30 pt-4">
                    <div className="text-2xl font-bold text-electric">₹35,000</div>
                  <div className="text-sm text-muted-foreground">AI-powered premium program</div>
                </div>
                <Button asChild className="w-full electric-border bg-electric text-black hover:bg-electric-bright" size="lg">
                    <Link to="/enrollment" className="text-electric-bright">
                    <Zap className="w-4 h-4 mr-2" />
                      Access AI Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
