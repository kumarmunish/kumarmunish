import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  MapPin, 
  Award, 
  TrendingUp, 
  Users, 
  Zap,
  Shield,
  Monitor,
  Code,
  Database,
  Cloud
} from 'lucide-react'
import SkillIcons from '@/components/SkillIcons'

const About = () => {
  const experiences = [
    {
      company: 'A.P. Moller - Maersk',
      role: 'Senior Software Engineer – Site Reliability Engineering',
      period: 'Sep 2021 – Present',
      location: 'Bengaluru, India',
      highlights: [
        'Designed GitHub Actions-based CI/CD pipelines, increasing deployment success rate by 40%',
        'Automated multi-region cloud infrastructure using Terraform and Ansible, reducing setup time by 70%',
        'Managed scalable workloads on AKS, deploying 30+ microservices with high availability',
        'Built full-stack observability improving system visibility and reducing MTTR by 30%',
        'Optimized cloud spend by 20% through rightsizing, resource scheduling, and auto-scaling'
      ]
    },
    {
      company: 'Shuttl (Acquired by Chalo)',
      role: 'Site Reliability Engineer',
      period: '2020–2021',
      location: 'Gurgaon, India',
      highlights: [
        'Deployed containerized infrastructure using Nomad, Consul, Vault, and Terraform',
        'Built self-service tooling reducing deployment turnaround by 50%',
        'Set up observability using Datadog, Sentry with detailed monitors and dashboards',
        'Handled on-call operations and conducted post-incident reviews'
      ]
    },
    {
      company: 'Shuttl',
      role: 'Senior QA Engineer',
      period: '2017–2020',
      location: 'Gurgaon, India',
      highlights: [
        'Led QA automation for microservices architecture using Postman, REST-Assured, JMeter, Selenium',
        'Created robust testing strategies for critical features like scheduling, payments, and routing'
      ]
    },
    {
      company: 'Tata 1mg',
      role: 'QA Engineer',
      period: 'Jul 2015 – Aug 2017',
      location: 'Gurgaon, India',
      highlights: [
        'Owned QA for diagnostics platform across mobile/web ensuring stability',
        'Automated test coverage using Selenium and Postman'
      ]
    }
  ]

  const coreCompetencies = [
    {
      category: 'Infrastructure & Cloud',
      icon: <Cloud className="h-5 w-5" />,
      skills: ['AWS', 'Azure', 'Kubernetes (AKS)', 'Docker', 'Linux', 'Terraform', 'Ansible', 'Helm']
    },
    {
      category: 'CI/CD & Automation',
      icon: <Zap className="h-5 w-5" />,
      skills: ['GitHub Actions', 'Jenkins', 'Bash', 'Python', 'Golang']
    },
    {
      category: 'Monitoring & Observability',
      icon: <Monitor className="h-5 w-5" />,
      skills: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Datadog', 'OpenTelemetry', 'Sentry']
    },
    {
      category: 'Databases & Queues',
      icon: <Database className="h-5 w-5" />,
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'RabbitMQ']
    },
    {
      category: 'SRE Practices',
      icon: <Shield className="h-5 w-5" />,
      skills: ['Incident Management', 'Root Cause Analysis', 'Blameless Postmortems', 'SLO/SLI Design', 'Error Budgets']
    }
  ]

  const impacts = [
    { metric: 'MTTR Reduction', value: '30%', icon: <TrendingUp className="h-5 w-5" /> },
    { metric: 'Cloud Cost Optimization', value: '20%', icon: <TrendingUp className="h-5 w-5" /> },
    { metric: 'Deployment Success Rate', value: '40%', icon: <TrendingUp className="h-5 w-5" /> },
    { metric: 'Alert Fatigue Reduction', value: '25%', icon: <TrendingUp className="h-5 w-5" /> },
    { metric: 'Recurring Incidents Drop', value: '20%', icon: <TrendingUp className="h-5 w-5" /> },
    { metric: 'Setup Time Reduction', value: '70%', icon: <TrendingUp className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced Site Reliability Engineer with over 8 years in building reliable, scalable, 
            and cost-efficient infrastructure across cloud-native and containerized systems.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Transitioned from QA to SRE, bringing a strong testing mindset to system reliability, 
                automation, and observability. Skilled in automating infrastructure with Terraform and Ansible, 
                building CI/CD pipelines, managing Kubernetes (AKS) workloads, and improving production resilience, 
                uptime, and visibility. Known for reducing operational toil and enabling engineering teams to ship 
                faster with confidence.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core Technologies</h2>
          <SkillIcons />
        </section>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="text-primary">{category.icon}</div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Reliability Impact Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-2">{impact.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{impact.value}</div>
                  <div className="text-sm text-muted-foreground">{impact.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Bachelor of Technology (B.Tech)
              </CardTitle>
              <CardDescription>Maharishi Dayanand University, Rohtak</CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Potential Certifications */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Planned Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Certified Kubernetes Administrator</h3>
                <p className="text-sm text-muted-foreground">CKA</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Azure DevOps Engineer Expert</h3>
                <p className="text-sm text-muted-foreground">Microsoft Azure</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">AWS Certified SysOps Administrator</h3>
                <p className="text-sm text-muted-foreground">Amazon Web Services</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About