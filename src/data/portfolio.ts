import { Activity, BrainCircuit, Cloud, CreditCard, Database, GitBranch, ServerCog, ShieldCheck, Workflow } from 'lucide-react'

export type SkillKey = 'java' | 'api' | 'cloud' | 'payments' | 'messaging' | 'database' | 'security' | 'devops'

export const skills: ReadonlyArray<{ key: SkillKey; icon: typeof ServerCog }> = [
  { key: 'java', icon: ServerCog },
  { key: 'api', icon: Workflow },
  { key: 'cloud', icon: Cloud },
  { key: 'payments', icon: CreditCard },
  { key: 'messaging', icon: GitBranch },
  { key: 'database', icon: Database },
  { key: 'security', icon: ShieldCheck },
  { key: 'devops', icon: Activity },
]

export type FeaturedProjectKey = 'payments' | 'security' | 'ai'

export const featuredProjects: ReadonlyArray<{ key: FeaturedProjectKey; tags: readonly string[] }> = [
  { key: 'payments', tags: ['Java', 'Spring Boot', 'AWS', 'PIX', 'BACEN'] },
  { key: 'security', tags: ['KMS', 'HSM', 'Vault', 'CI/CD', 'Observability'] },
  { key: 'ai', tags: ['IBM Watson', 'AWS', 'IA Generativa', 'Chatbots'] },
]

export type OtherProjectKey = 'javaOpenAi' | 'chronos' | 'myFinance' | 'taskScheduler'
export type OtherProjectVisual = 'ai' | 'focus' | 'finance' | 'api'

export interface OtherProject {
  key: OtherProjectKey
  repositoryUrl: string
  tags: readonly string[]
  visual: OtherProjectVisual
  referenceUrl?: string
}

export const otherProjects: ReadonlyArray<OtherProject> = [
  {
    key: 'javaOpenAi',
    repositoryUrl: 'https://github.com/Thainara-cre/java-com-openai',
    tags: ['Java 23', 'OpenAI API', 'JTokkit'],
    visual: 'ai',
  },
  {
    key: 'chronos',
    repositoryUrl: 'https://github.com/Thainara-cre/chronos-pomodoro',
    tags: ['React 19', 'TypeScript', 'Vite'],
    visual: 'focus',
  },
  {
    key: 'myFinance',
    repositoryUrl: 'https://github.com/Thainara-cre/MyFinance-Web.',
    tags: ['.NET 9', 'ASP.NET Core', 'EF Core', 'SQL Server'],
    visual: 'finance',
  },
  {
    key: 'taskScheduler',
    repositoryUrl: 'https://github.com/Thainara-cre/Sistema-de-Agendamento-de-Tarefas-com-Entity-Framework',
    tags: ['.NET 6', 'Web API', 'EF Core', 'Swagger'],
    visual: 'api',
    referenceUrl: 'https://github.com/Thainara-cre/Sistema-de-Agendamento-de-Tarefas-com-Entity-Framework/blob/main/swagger.png',
  },
]
