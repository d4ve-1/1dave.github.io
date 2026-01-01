import {
  Shield,
  Cpu,
  Database,
  Award,
  Briefcase,
  GraduationCap,
  Calendar,
  Network,
  Terminal,
  ExternalLink,
  Mail,
  Github,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-primary tracking-tighter text-xl">{">"} SEC_STRAT</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#hero" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-primary transition-colors">
              Education
            </a>
            <a href="#booking" className="hover:text-primary transition-colors">
              Consultation
            </a>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Get in Touch
          </Button>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary/80 px-4 py-1 rounded-full bg-primary/5"
            >
              Available for Consultations
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              Securing Assets.
              <br />
              Analyzing Markets.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
              200L FUNAAB student, Junior Cybersecurity Analyst, and Crypto Strategist focused on defensive
              infrastructure and on-chain intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-foreground/10 hover:bg-foreground/5 bg-transparent"
              >
                Download CV
              </Button>
            </div>

            <div className="mt-16 flex justify-center gap-6 text-muted-foreground">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Github className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section id="skills" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="text-primary w-8 h-8" />
                Technical Competencies
              </h2>
              <div className="h-1 w-20 bg-primary rounded" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-foreground/5 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <Network className="w-10 h-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle>Network Security</CardTitle>
                  <CardDescription>Defensive operations and monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Packet Analysis (Wireshark)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Linux Systems Administration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Traffic Monitoring & Threat Detection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-foreground/5 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <Database className="w-10 h-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle>Digital Assets</CardTitle>
                  <CardDescription>Market analysis and on-chain metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Advanced Technical Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      On-chain Data Visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Defi Ecosystem Auditing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-foreground/5 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle>Infrastructure</CardTitle>
                  <CardDescription>Secure storage and asset protection</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Air-gapped Cold Storage Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Multi-signature Wallet Architect
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Operational Security (OpSec) Training
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Experience */}
        <section id="experience" className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="text-primary w-8 h-8" />
                Professional Trajectory
              </h2>
              <div className="h-1 w-20 bg-primary rounded" />
            </div>

            <div className="space-y-8 max-w-3xl">
              <div className="relative pl-8 border-l border-primary/20">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Operations Lead</h3>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">
                    2023 — Present
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Orchestrated daily logistics and resource allocation for a team of 50+ individuals. Streamlined
                  internal communications and ensured operational efficiency across multiple departments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    Management
                  </Badge>
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    Logistics
                  </Badge>
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    Leadership
                  </Badge>
                </div>
              </div>

              <div className="relative pl-8 border-l border-primary/20">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Independent Crypto Trader</h3>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">2021 — 2023</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Managed diverse digital asset portfolios with a focus on strict risk management and capital
                  preservation. Utilized proprietary technical indicators to navigate volatile market cycles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    Risk Management
                  </Badge>
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    Market Analysis
                  </Badge>
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    Trading
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Education & Certs */}
        <section id="education" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="text-primary w-6 h-6" />
                    Academic Foundation
                  </h2>
                  <div className="h-1 w-12 bg-primary rounded" />
                </div>
                <div className="bg-card p-6 rounded-lg border border-foreground/5">
                  <h3 className="text-lg font-bold">B.Agric</h3>
                  <p className="text-primary text-sm font-mono mb-2">
                    Federal University of Agriculture, Abeokuta (FUNAAB)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Currently in 200 Level, applying analytical methodologies from agricultural sciences to digital
                    ecosystems.
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Award className="text-primary w-6 h-6" />
                    Certifications
                  </h2>
                  <div className="h-1 w-12 bg-primary rounded" />
                </div>
                <div className="bg-card p-6 rounded-lg border border-foreground/5 flex items-center gap-4 group cursor-pointer hover:border-primary/20 transition-colors">
                  <div className="p-3 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">TryHackMe Certification</h3>
                    <p className="text-sm text-muted-foreground">
                      Proficiency in network security, web application security, and offensive security fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Booking */}
        <section id="booking" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Secure a Strategy Session</h2>
              <p className="text-muted-foreground">
                Book a consultation for cybersecurity audits or crypto market strategy analysis.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-foreground/5 overflow-hidden shadow-2xl">
              <div className="aspect-video w-full bg-secondary/50 flex items-center justify-center relative">
                {/* Simulated Booking Interface */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-transparent">
                  <Calendar className="w-16 h-16 text-primary mb-4 opacity-20" />
                  <p className="text-sm font-mono text-primary/60 mb-8 uppercase tracking-widest">
                    Initialization of Scheduling System
                  </p>

                  <div className="w-full max-w-2xl bg-background/50 backdrop-blur-sm border border-foreground/10 p-6 rounded-xl grid grid-cols-7 gap-2">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded flex items-center justify-center text-[10px] border transition-colors cursor-pointer ${i === 14 ? "bg-primary border-primary text-primary-foreground" : "border-foreground/5 hover:border-primary/50 text-muted-foreground"}`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
                    Open Full Calendar <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono font-bold text-primary mb-6 tracking-tighter">{">"} SEC_STRAT.END_OF_PAGE</div>
          <p className="text-sm text-muted-foreground">
            © 2026 Cybersecurity & Crypto Strategist Portfolio. Built for high-integrity asset management.
          </p>
        </div>
      </footer>
    </div>
  )
}
