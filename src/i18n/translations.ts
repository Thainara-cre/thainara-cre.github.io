import type { FeaturedProjectKey, OtherProjectKey, SkillKey } from '../data/portfolio'

export type Locale = 'pt' | 'en' | 'es'

export const localeOptions: ReadonlyArray<{ code: Locale; label: string; htmlLang: string }> = [
  { code: 'pt', label: 'PT', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
  { code: 'es', label: 'ES', htmlLang: 'es' },
]

type NavigationKey = 'home' | 'about' | 'skills' | 'projects' | 'otherProjects' | 'contact'

type ProjectCopy = { eyebrow: string; title: string; description: string }
type OtherProjectCopy = { title: string; description: string; category: string }

export interface Messages {
  meta: { title: string; description: string }
  navigation: Record<NavigationKey, string>
  accessibility: {
    skipToContent: string
    mainNavigation: string
    mobileNavigation: string
    goHome: string
    lightTheme: string
    darkTheme: string
    openMenu: string
    closeMenu: string
    languageSelector: string
    socialLinks: string
    aboutLink: string
    technologiesFor: string
  }
  hero: {
    availability: string
    greeting: string
    role: string
    description: string
    projectsCta: string
    contactCta: string
    portraitAlt: string
    stackLabel: string
    stackValue: string
  }
  about: {
    eyebrow: string
    title: string
    paragraph1: string
    paragraph2: string
    portraitAlt: string
    highlights: Array<{ value: string; label: string }>
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    items: Record<SkillKey, string>
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    items: Record<FeaturedProjectKey, ProjectCopy>
  }
  otherProjects: {
    eyebrow: string
    title: string
    description: string
    publicBadge: string
    repositoryCta: string
    referenceCta: string
    allProjectsCta: string
    items: Record<OtherProjectKey, OtherProjectCopy>
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    emailCta: string
    location: string
  }
  footer: string
}

const pt: Messages = {
  meta: {
    title: 'Thainara Gomes | Desenvolvedora Full Stack',
    description: 'Portfólio de Thainara Gomes — Desenvolvedora Full Stack com foco em Java, Spring Boot, React, Cloud e Inteligência Artificial.',
  },
  navigation: { home: 'Início', about: 'Sobre', skills: 'Skills', projects: 'Experiência', otherProjects: 'Outros Projetos', contact: 'Contato' },
  accessibility: {
    skipToContent: 'Pular para o conteúdo', mainNavigation: 'Navegação principal', mobileNavigation: 'Navegação móvel', goHome: 'Ir para o início',
    lightTheme: 'Ativar tema claro', darkTheme: 'Ativar tema escuro', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', languageSelector: 'Selecionar idioma',
    socialLinks: 'Redes e contato', aboutLink: 'Ir para a seção sobre', technologiesFor: 'Tecnologias de',
  },
  hero: {
    availability: 'Disponível para novos desafios', greeting: 'Olá, eu sou', role: 'Desenvolvedora Full Stack',
    description: 'Construo soluções robustas combinando Java, Spring Boot, React, Cloud e Inteligência Artificial.',
    projectsCta: 'Ver projetos', contactCta: 'Falar comigo', portraitAlt: 'Retrato de Thainara Gomes', stackLabel: 'Stack', stackValue: 'Java • React • IA',
  },
  about: {
    eyebrow: 'Sobre mim', title: 'Tecnologia que resolve problemas reais.',
    paragraph1: 'Sou desenvolvedora Full Stack com atuação em aplicações corporativas, integrações e experiências web. No backend, trabalho principalmente com Java e Spring Boot; no frontend, com React e TypeScript.',
    paragraph2: 'Também tenho experiência com mensageria, cloud, bancos de dados e soluções que incorporam Inteligência Artificial, conectando engenharia de software a automações e experiências conversacionais.',
    portraitAlt: 'Thainara Gomes',
    highlights: [{ value: 'Full Stack', label: 'Backend + Frontend' }, { value: 'Cloud', label: 'AWS e integrações' }, { value: 'IA', label: 'LLMs, RAG e agentes' }],
  },
  skills: {
    eyebrow: 'Tecnologias', title: 'Minha stack principal', description: 'Ferramentas que uso para construir produtos do backend à interface, passando por cloud, dados e IA.',
    items: { java: 'Java & Spring Boot', react: 'React & TypeScript', api: 'APIs REST & Integrações', cloud: 'AWS & Cloud', messaging: 'Kafka & Mensageria', database: 'SQL & Bancos de Dados', architecture: 'Docker & Microsserviços', ai: 'IA Generativa & LLMs' },
  },
  projects: {
    eyebrow: 'Projetos & experiência', title: 'Onde código encontra impacto.', description: 'Algumas frentes que representam minha experiência técnica, sem expor detalhes confidenciais de projetos corporativos.',
    items: {
      payments: { eyebrow: 'Backend & Integrações', title: 'Ecossistema de pagamentos', description: 'Experiência com APIs, geração de QR Code Pix, integrações entre serviços e fluxos orientados a eventos.' },
      ai: { eyebrow: 'Inteligência Artificial', title: 'Chatbots e automações inteligentes', description: 'Construção de experiências conversacionais e integrações para automação de jornadas corporativas.' },
      frontend: { eyebrow: 'Frontend', title: 'Interfaces web modernas', description: 'Desenvolvimento de experiências responsivas e componentizadas com foco em clareza, acessibilidade e manutenção.' },
    },
  },
  otherProjects: {
    eyebrow: 'Projetos públicos', title: 'Outros projetos', description: 'Uma seleção curada de repositórios públicos que mostra diferentes stacks, estudos e produtos que desenvolvi.',
    publicBadge: 'Repositório público', repositoryCta: 'Ver código', referenceCta: 'Ver Swagger', allProjectsCta: 'Ver todos no GitHub',
    items: {
      javaOpenAi: { title: 'Java + OpenAI', category: 'IA & integrações', description: 'Integração em Java 23 para realizar requisições à API da OpenAI e contar tokens com JTokkit.' },
      chronos: { title: 'Chronos Pomodoro', category: 'Produtividade', description: 'Aplicação de foco construída com React 19, TypeScript e Vite para organizar ciclos do método Pomodoro.' },
      myFinance: { title: 'MyFinance Web', category: 'Finanças', description: 'Sistema financeiro pessoal em ASP.NET Core/.NET 9, organizado em camadas e com persistência via EF Core e SQL Server.' },
      taskScheduler: { title: 'Agendamento de Tarefas', category: 'API REST', description: 'Web API .NET 6 para CRUD e consultas de tarefas, usando Entity Framework Core, SQL Server e documentação Swagger.' },
    },
  },
  contact: {
    eyebrow: 'Contato', title: 'Vamos construir algo interessante?', description: 'Estou aberta a conversar sobre oportunidades, produtos, engenharia de software e projetos de tecnologia.',
    emailCta: 'Enviar e-mail', location: 'São Paulo, Brasil',
  },
  footer: 'Desenvolvido com React, TypeScript e Vite.',
}

const en: Messages = {
  meta: {
    title: 'Thainara Gomes | Full Stack Developer',
    description: 'Thainara Gomes portfolio — Full Stack Developer focused on Java, Spring Boot, React, Cloud and Artificial Intelligence.',
  },
  navigation: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Experience', otherProjects: 'Other Projects', contact: 'Contact' },
  accessibility: {
    skipToContent: 'Skip to content', mainNavigation: 'Main navigation', mobileNavigation: 'Mobile navigation', goHome: 'Go to home',
    lightTheme: 'Enable light theme', darkTheme: 'Enable dark theme', openMenu: 'Open menu', closeMenu: 'Close menu', languageSelector: 'Select language',
    socialLinks: 'Social links and contact', aboutLink: 'Go to about section', technologiesFor: 'Technologies used in',
  },
  hero: {
    availability: 'Open to new opportunities', greeting: "Hi, I'm", role: 'Full Stack Developer',
    description: 'I build robust solutions combining Java, Spring Boot, React, Cloud and Artificial Intelligence.',
    projectsCta: 'View projects', contactCta: 'Contact me', portraitAlt: 'Portrait of Thainara Gomes', stackLabel: 'Stack', stackValue: 'Java • React • AI',
  },
  about: {
    eyebrow: 'About me', title: 'Technology that solves real problems.',
    paragraph1: 'I am a Full Stack Developer working with enterprise applications, integrations and web experiences. On the backend, I mainly work with Java and Spring Boot; on the frontend, with React and TypeScript.',
    paragraph2: 'I also have experience with messaging, cloud, databases and solutions that incorporate Artificial Intelligence, connecting software engineering with automation and conversational experiences.',
    portraitAlt: 'Thainara Gomes',
    highlights: [{ value: 'Full Stack', label: 'Backend + Frontend' }, { value: 'Cloud', label: 'AWS and integrations' }, { value: 'AI', label: 'LLMs, RAG and agents' }],
  },
  skills: {
    eyebrow: 'Technologies', title: 'My core stack', description: 'Tools I use to build products from backend to interface, including cloud, data and AI.',
    items: { java: 'Java & Spring Boot', react: 'React & TypeScript', api: 'REST APIs & Integrations', cloud: 'AWS & Cloud', messaging: 'Kafka & Messaging', database: 'SQL & Databases', architecture: 'Docker & Microservices', ai: 'Generative AI & LLMs' },
  },
  projects: {
    eyebrow: 'Projects & experience', title: 'Where code meets impact.', description: 'A few areas that represent my technical experience without exposing confidential details from corporate projects.',
    items: {
      payments: { eyebrow: 'Backend & Integrations', title: 'Payments ecosystem', description: 'Experience with APIs, Pix QR Code generation, service integrations and event-driven flows.' },
      ai: { eyebrow: 'Artificial Intelligence', title: 'Chatbots and intelligent automation', description: 'Building conversational experiences and integrations to automate business journeys.' },
      frontend: { eyebrow: 'Frontend', title: 'Modern web interfaces', description: 'Development of responsive, component-based experiences focused on clarity, accessibility and maintainability.' },
    },
  },
  otherProjects: {
    eyebrow: 'Public projects', title: 'Other projects', description: 'A curated selection of public repositories showing different stacks, studies and products I have built.',
    publicBadge: 'Public repository', repositoryCta: 'View code', referenceCta: 'View Swagger', allProjectsCta: 'View all on GitHub',
    items: {
      javaOpenAi: { title: 'Java + OpenAI', category: 'AI & integrations', description: 'Java 23 integration for sending requests to the OpenAI API and counting tokens with JTokkit.' },
      chronos: { title: 'Chronos Pomodoro', category: 'Productivity', description: 'Focus application built with React 19, TypeScript and Vite to organize Pomodoro work cycles.' },
      myFinance: { title: 'MyFinance Web', category: 'Finance', description: 'Personal finance system built with ASP.NET Core/.NET 9, layered architecture, EF Core and SQL Server.' },
      taskScheduler: { title: 'Task Scheduling', category: 'REST API', description: '.NET 6 Web API for task CRUD and queries using Entity Framework Core, SQL Server and Swagger documentation.' },
    },
  },
  contact: {
    eyebrow: 'Contact', title: 'Shall we build something interesting?', description: 'I am open to conversations about opportunities, products, software engineering and technology projects.',
    emailCta: 'Send email', location: 'São Paulo, Brazil',
  },
  footer: 'Built with React, TypeScript and Vite.',
}

const es: Messages = {
  meta: {
    title: 'Thainara Gomes | Desarrolladora Full Stack',
    description: 'Portafolio de Thainara Gomes — Desarrolladora Full Stack enfocada en Java, Spring Boot, React, Cloud e Inteligencia Artificial.',
  },
  navigation: { home: 'Inicio', about: 'Sobre mí', skills: 'Skills', projects: 'Experiencia', otherProjects: 'Otros Proyectos', contact: 'Contacto' },
  accessibility: {
    skipToContent: 'Saltar al contenido', mainNavigation: 'Navegación principal', mobileNavigation: 'Navegación móvil', goHome: 'Ir al inicio',
    lightTheme: 'Activar tema claro', darkTheme: 'Activar tema oscuro', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', languageSelector: 'Seleccionar idioma',
    socialLinks: 'Redes y contacto', aboutLink: 'Ir a la sección sobre mí', technologiesFor: 'Tecnologías de',
  },
  hero: {
    availability: 'Disponible para nuevos desafíos', greeting: 'Hola, soy', role: 'Desarrolladora Full Stack',
    description: 'Construyo soluciones robustas combinando Java, Spring Boot, React, Cloud e Inteligencia Artificial.',
    projectsCta: 'Ver proyectos', contactCta: 'Contactarme', portraitAlt: 'Retrato de Thainara Gomes', stackLabel: 'Stack', stackValue: 'Java • React • IA',
  },
  about: {
    eyebrow: 'Sobre mí', title: 'Tecnología que resuelve problemas reales.',
    paragraph1: 'Soy desarrolladora Full Stack con experiencia en aplicaciones corporativas, integraciones y experiencias web. En backend trabajo principalmente con Java y Spring Boot; en frontend, con React y TypeScript.',
    paragraph2: 'También tengo experiencia con mensajería, cloud, bases de datos y soluciones que incorporan Inteligencia Artificial, conectando ingeniería de software con automatización y experiencias conversacionales.',
    portraitAlt: 'Thainara Gomes',
    highlights: [{ value: 'Full Stack', label: 'Backend + Frontend' }, { value: 'Cloud', label: 'AWS e integraciones' }, { value: 'IA', label: 'LLMs, RAG y agentes' }],
  },
  skills: {
    eyebrow: 'Tecnologías', title: 'Mi stack principal', description: 'Herramientas que utilizo para construir productos desde el backend hasta la interfaz, incluyendo cloud, datos e IA.',
    items: { java: 'Java & Spring Boot', react: 'React & TypeScript', api: 'APIs REST & Integraciones', cloud: 'AWS & Cloud', messaging: 'Kafka & Mensajería', database: 'SQL & Bases de Datos', architecture: 'Docker & Microservicios', ai: 'IA Generativa & LLMs' },
  },
  projects: {
    eyebrow: 'Proyectos & experiencia', title: 'Donde el código genera impacto.', description: 'Algunas áreas que representan mi experiencia técnica sin exponer detalles confidenciales de proyectos corporativos.',
    items: {
      payments: { eyebrow: 'Backend & Integraciones', title: 'Ecosistema de pagos', description: 'Experiencia con APIs, generación de códigos QR Pix, integraciones entre servicios y flujos orientados a eventos.' },
      ai: { eyebrow: 'Inteligencia Artificial', title: 'Chatbots y automatizaciones inteligentes', description: 'Creación de experiencias conversacionales e integraciones para automatizar procesos corporativos.' },
      frontend: { eyebrow: 'Frontend', title: 'Interfaces web modernas', description: 'Desarrollo de experiencias responsivas y componentizadas con foco en claridad, accesibilidad y mantenibilidad.' },
    },
  },
  otherProjects: {
    eyebrow: 'Proyectos públicos', title: 'Otros proyectos', description: 'Una selección curada de repositorios públicos que muestra diferentes stacks, estudios y productos que he desarrollado.',
    publicBadge: 'Repositorio público', repositoryCta: 'Ver código', referenceCta: 'Ver Swagger', allProjectsCta: 'Ver todos en GitHub',
    items: {
      javaOpenAi: { title: 'Java + OpenAI', category: 'IA e integraciones', description: 'Integración en Java 23 para realizar solicitudes a la API de OpenAI y contar tokens con JTokkit.' },
      chronos: { title: 'Chronos Pomodoro', category: 'Productividad', description: 'Aplicación de enfoque construida con React 19, TypeScript y Vite para organizar ciclos del método Pomodoro.' },
      myFinance: { title: 'MyFinance Web', category: 'Finanzas', description: 'Sistema de finanzas personales en ASP.NET Core/.NET 9, organizado en capas y con EF Core y SQL Server.' },
      taskScheduler: { title: 'Programación de Tareas', category: 'API REST', description: 'Web API .NET 6 para CRUD y consultas de tareas, utilizando Entity Framework Core, SQL Server y documentación Swagger.' },
    },
  },
  contact: {
    eyebrow: 'Contacto', title: '¿Construimos algo interesante?', description: 'Estoy abierta a conversar sobre oportunidades, productos, ingeniería de software y proyectos de tecnología.',
    emailCta: 'Enviar correo', location: 'São Paulo, Brasil',
  },
  footer: 'Desarrollado con React, TypeScript y Vite.',
}

export const translations: Record<Locale, Messages> = { pt, en, es }
