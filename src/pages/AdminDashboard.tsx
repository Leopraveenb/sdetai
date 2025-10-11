import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  DollarSign, 
  Search, 
  Filter,
  Download,
  LogOut,
  Calendar,
  Mail,
  Phone,
  Bot,
  Cpu,
  Zap,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
// import automationRobotIcon from "@/assets/automation-robot-icon.jpg";

import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const enrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    setStudents(enrollments);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-electric/20 text-electric border-electric">Active</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-muted text-muted-foreground">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge className="bg-electric-bright/20 text-electric-bright border-electric-bright">Paid</Badge>;
      case "Pending":
        return <Badge variant="destructive">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="border-b border-electric/30 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-bold text-electric-bright">SDET AI Academy</h1>
              <p className="text-sm text-electric">AI-Powered Admin Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-electric">
              <Bot className="w-4 h-4" />
              <span>AI Admin</span>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-electric hover:bg-electric/20">
              <Link to="/" className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        {/* AI-Enhanced Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-electric/30 electric-glow hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-electric">Total Students</CardTitle>
              <Users className="h-4 w-4 text-electric group-hover:animate-electric-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-electric-bright">28</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-electric" />
                +4 from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-electric/30 electric-glow hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-electric">AI Learning Progress</CardTitle>
              <Bot className="h-4 w-4 text-electric group-hover:animate-electric-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-electric-bright">89%</div>
              <p className="text-xs text-muted-foreground">Average AI assistance score</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-electric/30 electric-glow hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-electric">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-electric group-hover:animate-electric-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-electric-bright">$36,372</div>
              <p className="text-xs text-muted-foreground">This month (AI premium)</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-electric/30 electric-glow hover:shadow-lg transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-electric">AI Automation Rate</CardTitle>
              <Cpu className="h-4 w-4 text-electric group-hover:animate-electric-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-electric-bright">94%</div>
              <p className="text-xs text-muted-foreground">Test automation success</p>
            </CardContent>
          </Card>
        </div>

        {/* Student Management */}
        <Card className="bg-card border-electric/30 electric-glow">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-electric-bright flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AI-Enhanced Student Enrollment Analytics
                </CardTitle>
                <CardDescription>
                  Monitor and manage all student enrollments with AI-powered insights
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-electric text-electric hover:bg-electric/20">
                  <Filter className="h-4 w-4 mr-2" />
                  AI Filter
                </Button>
                <Button variant="outline" size="sm" className="border-electric text-electric hover:bg-electric/20">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* AI-Enhanced Search Bar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-electric" />
                <Input 
                  placeholder="AI-powered search: students by name, email, performance, or ID..." 
                  className="pl-10 bg-input border-electric/30 focus:border-electric"
                />
              </div>
              <Button size="sm" className="bg-electric/20 text-electric hover:bg-electric/30">
                <Bot className="w-4 h-4 mr-2" />
                AI Insights
              </Button>
            </div>

            {/* Enhanced Students Table */}
            <div className="border border-electric/30 rounded-lg overflow-hidden">
              <Table>
                <TableHeader className="bg-card/50">
                  <TableRow>
                    <TableHead className="text-electric">Student ID</TableHead>
                    <TableHead className="text-electric">Name</TableHead>
                    <TableHead className="text-electric">Contact</TableHead>
                    <TableHead className="text-electric">Enrollment Date</TableHead>
                    <TableHead className="text-electric">Experience</TableHead>
                    <TableHead className="text-electric">Status</TableHead>
                    <TableHead className="text-electric">Payment</TableHead>
                    <TableHead className="text-electric">Progress</TableHead>
                    <TableHead className="text-electric">AI Score</TableHead>
                    <TableHead className="text-electric">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.email || student.phone || Math.random()} className="hover:bg-electric/5 transition-colors">
                      <TableCell className="font-medium text-electric">{student.email || ""}</TableCell>
                      <TableCell className="font-medium">{student.firstName || ""} {student.lastName || ""}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3 text-electric" />
                            {student.email || ""}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {student.phone || ""}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{student.enrollmentDate || ""}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-electric/50 text-electric">
                          {student.experience || ""}
                        </Badge>
                      </TableCell>
                      <TableCell>{student.status || ""}</TableCell>
                      <TableCell>{student.paymentStatus || ""}</TableCell>
                      <TableCell>{student.progress || ""}</TableCell>
                      <TableCell>{student.aiScore || ""}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-electric hover:bg-electric/20">
                          AI Analysis
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;