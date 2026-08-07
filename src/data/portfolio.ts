import { BrainCircuit, Cloud, Code2, Database, GitBranch, Layers3, ServerCog, Workflow } from 'lucide-react'

export const skills = [
  { name: 'Java & Spring Boot', icon: ServerCog },
  { name: 'React & TypeScript', icon: Code2 },
  { name: 'APIs REST & Integrações', icon: Workflow },
  { name: 'AWS & Cloud', icon: Cloud },
  { name: 'Kafka & Mensageria', icon: GitBranch },
  { name: 'SQL & Bancos de Dados', icon: Database },
  { name: 'Docker & Microsserviços', icon: Layers3 },
  { name: 'IA Generativa & LLMs', icon: BrainCircuit },
]

export const highlights = [
  { value: 'Full Stack', label: 'Backend + Frontend' },
  { value: 'Cloud', label: 'AWS e integrações' },
  { value: 'IA', label: 'LLMs, RAG e agentes' },
]

export const projects = [
  {
    eyebrow: 'Backend & Integrações',
    title: 'Ecossistema de pagamentos',
    description: 'Experiência com APIs, geração de QR Code Pix, integrações entre serviços e fluxos orientados a eventos.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'REST'],
  },
  {
    eyebrow: 'Inteligência Artificial',
    title: 'Chatbots e automações inteligentes',
    description: 'Construção de experiências conversacionais e integrações para automação de jornadas corporativas.',
    tags: ['LLMs', 'RAG', 'Python', 'Chatbots'],
  },
  {
    eyebrow: 'Frontend',
    title: 'Interfaces web modernas',
    description: 'Desenvolvimento de experiências responsivas e componentizadas com foco em clareza, acessibilidade e manutenção.',
    tags: ['React', 'TypeScript', 'UI', 'APIs'],
  },
]
