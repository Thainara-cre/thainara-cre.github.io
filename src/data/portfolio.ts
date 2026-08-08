import { BrainCircuit, Cloud, Code2, Database, GitBranch, Layers3, ServerCog, Workflow } from 'lucide-react'

export type SkillKey = 'java' | 'react' | 'api' | 'cloud' | 'messaging' | 'database' | 'architecture' | 'ai'

export const skills: ReadonlyArray<{ key: SkillKey; icon: typeof ServerCog }> = [
  { key: 'java', icon: ServerCog },
  { key: 'react', icon: Code2 },
  { key: 'api', icon: Workflow },
  { key: 'cloud', icon: Cloud },
  { key: 'messaging', icon: GitBranch },
  { key: 'database', icon: Database },
  { key: 'architecture', icon: Layers3 },
  { key: 'ai', icon: BrainCircuit },
]

export type FeaturedProjectKey = 'payments' | 'ai' | 'frontend'

export const featuredProjects: ReadonlyArray<{ key: FeaturedProjectKey; tags: readonly string[] }> = [
  { key: 'payments', tags: ['Java', 'Spring Boot', 'Kafka', 'REST'] },
  { key: 'ai', tags: ['LLMs', 'RAG', 'Python', 'Chatbots'] },
  { key: 'frontend', tags: ['React', 'TypeScript', 'UI', 'APIs'] },
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
