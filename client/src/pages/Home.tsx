import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'wouter'
import SkillIcons from '@/components/SkillIcons'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              <span className="block">Munish Kumar</span>
              <span className="text-primary text-3xl sm:text-4xl lg:text-5xl">
                Site Reliability Engineer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              DevOps Specialist & Cloud Infrastructure Automation Expert with 8+ years of experience 
              building reliable, scalable, and cost-efficient systems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Link href="/about">
                <Button size="lg" className="w-full sm:w-auto button-enhanced">
                  View About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto button-enhanced">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 9999954851</span>
              </div>
              <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>munishkumar631@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 skills-gradient relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Core Technologies & Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertise in cloud infrastructure, automation, and observability across modern tech stacks
            </p>
          </div>
          
          <SkillIcons />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="text-center stats-card card-enhanced">
              <CardContent className="p-6">
                <div className="stats-number text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            
            <Card className="text-center stats-card card-enhanced">
              <CardContent className="p-6">
                <div className="stats-number text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </CardContent>
            </Card>
            
            <Card className="text-center stats-card card-enhanced">
              <CardContent className="p-6">
                <div className="stats-number text-3xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">MTTR Reduction</div>
              </CardContent>
            </Card>
            
            <Card className="text-center stats-card card-enhanced">
              <CardContent className="p-6">
                <div className="stats-number text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Microservices</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Reliable Systems Together?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help improve your infrastructure reliability and reduce operational costs
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="button-enhanced">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home