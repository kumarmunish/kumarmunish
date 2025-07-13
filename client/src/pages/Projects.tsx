import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Zap, Monitor, Cloud, Database, Code, GitBranch } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Warehouse Management System (WMS) - Maersk',
      description: 'Contributed to the infrastructure and SRE efforts for a globally deployed warehouse system. Used Terraform and Ansible to provision AKS-based clusters, implemented CI/CD pipelines with GitHub Actions, and deployed an observability stack to support 30+ microservices.',
      icon: <Cloud className="h-8 w-8" />,
      techStack: ['Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'Prometheus', 'Grafana', 'Loki', 'Tempo'],
      highlights: [
        'Global deployment across multiple regions',
        'Full observability stack implementation',
        'Automated infrastructure provisioning',
        'Support for 30+ microservices'
      ],
      category: 'Infrastructure'
    },
    {
      title: 'Internal DevOps Tooling - Shuttl',
      description: 'Built and deployed internal DevOps tooling for service teams enabling self-service deployments, monitoring setup, and debugging utilities. This initiative cut deployment times by 50% and empowered developers with faster delivery cycles.',
      icon: <Zap className="h-8 w-8" />,
      techStack: ['Nomad', 'Consul', 'Vault', 'Terraform', 'Python', 'Bash'],
      highlights: [
        'Self-service deployment platform',
        '50% reduction in deployment time',
        'Automated monitoring setup',
        'Developer empowerment tools'
      ],
      category: 'Automation'
    },
    {
      title: 'Monitoring & Alerting Framework',
      description: 'Designed comprehensive monitoring systems using Prometheus, Datadog, Grafana, and Sentry. Defined custom alerts, implemented SLO-driven alert routing, and integrated dashboards to improve signal-to-noise ratio in on-call operations.',
      icon: <Monitor className="h-8 w-8" />,
      techStack: ['Prometheus', 'Grafana', 'Datadog', 'Sentry', 'AlertManager', 'PagerDuty'],
      highlights: [
        'SLO-driven alerting strategy',
        'Custom dashboard integrations',
        'Reduced alert fatigue by 25%',
        'End-to-end observability'
      ],
      category: 'Observability'
    },
    {
      title: 'Terraform Infrastructure Modules',
      description: 'Provisioned scalable, production-grade infrastructure using Terraform, enabling repeatable deployments and reducing manual errors. Created reusable modules for AWS and Azure cloud resources.',
      icon: <Code className="h-8 w-8" />,
      techStack: ['Terraform', 'AWS', 'Azure', 'Helm', 'Kubernetes'],
      highlights: [
        'Reusable infrastructure modules',
        'Multi-cloud deployment support',
        '70% reduction in setup time',
        'Standardized resource provisioning'
      ],
      category: 'Infrastructure as Code',
      github: 'https://github.com/kumarmunish'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Enhanced observability through Grafana and Prometheus with custom alerting rules, improving monitoring coverage and incident response efficiency. Built robust CI/CD pipelines increasing deployment success rate by 40%.',
      icon: <GitBranch className="h-8 w-8" />,
      techStack: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Helm'],
      highlights: [
        '40% improvement in deployment success',
        'Automated testing and validation',
        'Blue-green deployment strategies',
        'Rollback automation'
      ],
      category: 'CI/CD'
    },
    {
      title: 'Incident Response & Documentation',
      description: 'Authored actionable incident response documentation, enabling faster recovery and smoother on-call handoffs. Implemented blameless postmortem processes and runbook automation.',
      icon: <Database className="h-8 w-8" />,
      techStack: ['Runbooks', 'PagerDuty', 'Slack', 'Confluence', 'JIRA'],
      highlights: [
        'Blameless postmortem culture',
        'Automated runbook execution',
        '30% reduction in MTTR',
        'Knowledge sharing processes'
      ],
      category: 'Process Improvement'
    }
  ]

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects & Key Initiatives</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of infrastructure automation, observability solutions, and DevOps tooling 
            that have driven significant improvements in reliability and operational efficiency.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-primary flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <Badge variant="secondary" className="mb-3">
                      {project.category}
                    </Badge>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {project.github && (
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <section className="text-center">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Github className="h-6 w-6 text-primary" />
                More Projects on GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Explore more of my work including infrastructure automation scripts, 
                monitoring configurations, and DevOps utilities on my GitHub profile.
              </p>
              <Button asChild>
                <a 
                  href="https://github.com/kumarmunish" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Visit GitHub Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Projects