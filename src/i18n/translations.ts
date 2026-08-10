import type { CourseKey, EducationKey } from '../data/education'
import type { ExperienceKey } from '../data/experience'
import type { FeaturedProjectKey, OtherProjectKey, SkillKey } from '../data/portfolio'

export type Locale = 'pt' | 'en' | 'es'

export const localeOptions: ReadonlyArray<{ code: Locale; label: string; htmlLang: string }> = [
  { code: 'pt', label: 'PT', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
  { code: 'es', label: 'ES', htmlLang: 'es' },
]

type NavigationKey = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact'
type ProjectCopy = { eyebrow: string; title: string; description: string }
type OtherProjectCopy = { title: string; description: string; category: string }
type ExperienceCopy = { company: string; role: string; period: string; summary: string; highlights: string[] }
type EducationCopy = { institution: string; degree: string; period: string }
type CourseCopy = { name: string; provider: string; duration: string }

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
  experience: {
    eyebrow: string
    title: string
    description: string
    currentBadge: string
    linkedinCta: string
    items: Record<ExperienceKey, ExperienceCopy>
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
  education: {
    eyebrow: string
    title: string
    description: string
    items: Record<EducationKey, EducationCopy>
    coursesTitle: string
    courses: Record<CourseKey, CourseCopy>
    languagesTitle: string
    languages: Array<{ name: string; level: string }>
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
    title: 'Thainara Gomes | Engenheira de Software Pleno | Backend Java',
    description: 'Portfólio de Thainara Gomes — Engenheira de Software Pleno com foco em Backend Java, AWS, pagamentos, PIX e integrações.',
  },
  navigation: { home: 'Início', about: 'Sobre', experience: 'Experiência', skills: 'Skills', projects: 'Projetos', education: 'Formação', contact: 'Contato' },
  accessibility: {
    skipToContent: 'Pular para o conteúdo', mainNavigation: 'Navegação principal', mobileNavigation: 'Navegação móvel', goHome: 'Ir para o início',
    lightTheme: 'Ativar tema claro', darkTheme: 'Ativar tema escuro', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', languageSelector: 'Selecionar idioma',
    socialLinks: 'Redes e contato', aboutLink: 'Ir para a seção sobre', technologiesFor: 'Tecnologias de',
  },
  hero: {
    availability: 'Disponível para novos desafios', greeting: 'Olá, eu sou', role: 'Engenheira de Software Pleno | Backend Java',
    description: 'Desenvolvo soluções backend para pagamentos digitais, PIX e integrações críticas, com Java, Spring Boot, AWS, APIs REST, segurança e observabilidade.',
    projectsCta: 'Ver projetos', contactCta: 'Falar comigo', portraitAlt: 'Retrato de Thainara Gomes', stackLabel: 'Foco', stackValue: 'Java • AWS • PIX • BACEN',
  },
  about: {
    eyebrow: 'Sobre mim', title: 'Backend, pagamentos e cloud com impacto real.',
    paragraph1: 'Sou Engenheira de Software Pleno com mais de 4 anos de experiência em desenvolvimento de sistemas, atuando em backend, integrações, cloud e soluções para o setor financeiro. Hoje trabalho principalmente com Java, Spring Boot e AWS.',
    paragraph2: 'Tenho experiência no ecossistema PIX, incluindo fluxos estáticos e dinâmicos, regras de negócio, processamento de requisições, consultas e geração de QR Codes conforme requisitos do BACEN. Minha trajetória também inclui segurança e certificados digitais, CI/CD, observabilidade, desenvolvimento full stack e chatbots.',
    portraitAlt: 'Thainara Gomes',
    highlights: [{ value: '4+ anos', label: 'Engenharia de software' }, { value: 'PIX & BACEN', label: 'Pagamentos digitais' }, { value: 'AWS', label: 'Cloud e integrações' }],
  },
  experience: {
    eyebrow: 'Trajetória', title: 'Experiência profissional', description: 'Experiências que mostram minha evolução de desenvolvimento full stack e chatbots para backend Java, cloud e pagamentos.',
    currentBadge: 'Atual', linkedinCta: 'Ver perfil no LinkedIn',
    items: {
      getnet: {
        company: 'Getnet Platform', role: 'Engenheira de Software Pleno', period: 'Set 2025 — Atual',
        summary: 'Atuação backend em soluções do ecossistema PIX, combinando Java, AWS, segurança e observabilidade em sistemas financeiros.',
        highlights: [
          'Desenvolvimento backend para o ecossistema PIX utilizando Java e serviços AWS, incluindo Cognito e KMS.',
          'Construção de fluxos de PIX estático e dinâmico conforme requisitos do BACEN, incluindo regras de negócio, consultas e geração de QR Codes.',
          'Atuação com certificados digitais e participação em migração de certificados armazenados em HSM para Vault.',
          'Uso de Concourse em CI/CD e de Elastic e Komodor para observabilidade e acompanhamento das aplicações.',
        ],
      },
      positivo: {
        company: 'Positivo S+', role: 'Analista Desenvolvedora Júnior', period: 'Jul 2024 — Set 2025',
        summary: 'Desenvolvimento e sustentação de soluções de software e chatbots, com atuação em cloud e integrações.',
        highlights: [
          'Atuação em projetos com Java, JavaScript, Python, Azure, AWS e IBM Watson.',
          'Uso de serviços AWS como Lambda, Cognito, CloudWatch e API Gateway.',
          'Desenvolvimento, manutenção e evolução de chatbots, incluindo experiências com IA cognitiva e generativa e atuação em incidentes.',
        ],
      },
      run2biz: {
        company: 'Run2biz Software LTDA', role: 'Analista Desenvolvedora Júnior', period: 'Mar 2023 — Jul 2024',
        summary: 'Atuação full stack em produtos digitais, APIs e soluções low-code.',
        highlights: [
          'Desenvolvimento frontend e backend utilizando Node.js, Low-Code, APIs e MongoDB.',
          'Participação na criação de marketplace, atuando tanto no frontend quanto no backend.',
          'Implementação de experience center e funcionalidades de personalização.',
        ],
      },
      spread: {
        company: 'Spread Teleinformática Ltda', role: 'Programadora de Sistemas da Informação', period: 'Fev 2022 — Ago 2022',
        summary: 'Desenvolvimento e manutenção de aplicações corporativas em Java, frontend e banco de dados.',
        highlights: [
          'Atuação com Java, Spring Boot, JavaScript, MVC, Struts, JSP, EJB, Hibernate e banco de dados.',
          'Desenvolvimento de funcionalidades relacionadas a contratos de aceite eletrônico e histórico de aceite.',
          'Criação de tabelas, consultas e operações DML e DDL.',
        ],
      },
    },
  },
  skills: {
    eyebrow: 'Tecnologias', title: 'Minha stack principal', description: 'Tecnologias alinhadas ao meu foco atual em backend, pagamentos, cloud, segurança e operação de sistemas.',
    items: {
      java: 'Java & Spring Boot', api: 'APIs REST & Integrações', cloud: 'AWS & Cloud', payments: 'PIX & BACEN',
      messaging: 'Kafka & Mensageria', database: 'SQL & Bancos de Dados', security: 'KMS, HSM & Vault', devops: 'Docker, CI/CD & Observabilidade',
    },
  },
  projects: {
    eyebrow: 'Destaques técnicos', title: 'Onde código encontra impacto.', description: 'Frentes que representam minha experiência técnica sem expor detalhes confidenciais de projetos corporativos.',
    items: {
      payments: { eyebrow: 'Backend & Pagamentos', title: 'Ecossistema PIX', description: 'Construção e evolução de fluxos de pagamentos, APIs, consultas e geração de QR Codes com foco em robustez e requisitos do BACEN.' },
      security: { eyebrow: 'Cloud & Segurança', title: 'Segurança e operação de plataforma', description: 'Experiência com gestão de chaves e certificados, KMS, HSM, Vault, pipelines de CI/CD e observabilidade de aplicações.' },
      ai: { eyebrow: 'IA & Automação', title: 'Chatbots e experiências inteligentes', description: 'Desenvolvimento e sustentação de chatbots e integrações, incluindo experiências com IBM Watson, AWS e IA generativa.' },
    },
  },
  otherProjects: {
    eyebrow: 'Projetos públicos', title: 'Outros projetos', description: 'Uma seleção curada de repositórios públicos que mostra diferentes stacks, estudos e produtos que desenvolvi.',
    publicBadge: 'Repositório público', repositoryCta: 'Ver código', referenceCta: 'Ver Swagger', allProjectsCta: 'Ver todos no GitHub',
    items: {
      javaOpenAi: { title: 'Java + OpenAI', category: 'IA & integrações', description: 'Integração em Java 23 para realizar requisições à API da OpenAI e contar tokens com JTokkit.' },
      chronos: { title: 'Chronos Pomodoro', category: 'Produtividade', description: 'Aplicação de foco construída com React, TypeScript e Vite para organizar ciclos do método Pomodoro.' },
      myFinance: { title: 'MyFinance Web', category: 'Finanças', description: 'Sistema financeiro pessoal em ASP.NET Core, organizado em camadas e com persistência via Entity Framework Core e SQL Server.' },
      taskScheduler: { title: 'Agendamento de Tarefas', category: 'API REST', description: 'Web API para CRUD e consultas de tarefas, usando Entity Framework Core, SQL Server e documentação Swagger.' },
    },
  },
  education: {
    eyebrow: 'Formação', title: 'Base acadêmica e aprendizado contínuo.', description: 'Formação acadêmica e cursos que complementam minha experiência profissional em engenharia de software.',
    items: {
      puc: { institution: 'PUC Minas', degree: 'Especialização em Engenharia de Software', period: 'Jun 2024 — Dez 2025' },
      unasp: { institution: 'UNASP', degree: 'Bacharelado em Ciência da Computação', period: 'Jan 2020 — Dez 2023' },
    },
    coursesTitle: 'Cursos complementares',
    courses: {
      javascript: { name: 'Front-end JavaScript Junior', provider: 'Run2biz / be.academy', duration: '110 horas' },
      spreadJava: { name: 'Bootcamp Spread Java Developer', provider: 'Digital Innovation One / Spread', duration: '97 horas' },
      webIntro: { name: 'Introdução ao Desenvolvimento Web', provider: 'UNASP/SP', duration: '30 horas' },
    },
    languagesTitle: 'Idiomas', languages: [{ name: 'Inglês', level: 'Intermediário' }, { name: 'Espanhol', level: 'Intermediário' }],
  },
  contact: {
    eyebrow: 'Contato', title: 'Vamos construir algo interessante?', description: 'Estou aberta a conversar sobre oportunidades em backend, pagamentos, cloud e engenharia de software.',
    emailCta: 'Enviar e-mail', location: 'São Paulo, Brasil',
  },
  footer: 'Desenvolvido com React, TypeScript e Vite.',
}

const en: Messages = {
  meta: {
    title: 'Thainara Gomes | Mid-level Software Engineer | Java Backend',
    description: 'Thainara Gomes portfolio — Mid-level Software Engineer focused on Java backend, AWS, payments, Pix and integrations.',
  },
  navigation: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
  accessibility: {
    skipToContent: 'Skip to content', mainNavigation: 'Main navigation', mobileNavigation: 'Mobile navigation', goHome: 'Go to home',
    lightTheme: 'Enable light theme', darkTheme: 'Enable dark theme', openMenu: 'Open menu', closeMenu: 'Close menu', languageSelector: 'Select language',
    socialLinks: 'Social links and contact', aboutLink: 'Go to about section', technologiesFor: 'Technologies used in',
  },
  hero: {
    availability: 'Open to new opportunities', greeting: "Hi, I'm", role: 'Mid-level Software Engineer | Java Backend',
    description: 'I build backend solutions for digital payments, Pix and critical integrations using Java, Spring Boot, AWS, REST APIs, security and observability.',
    projectsCta: 'View projects', contactCta: 'Contact me', portraitAlt: 'Portrait of Thainara Gomes', stackLabel: 'Focus', stackValue: 'Java • AWS • Pix • BACEN',
  },
  about: {
    eyebrow: 'About me', title: 'Backend, payments and cloud with real impact.',
    paragraph1: 'I am a Mid-level Software Engineer with more than 4 years of experience in software development, working across backend, integrations, cloud and financial solutions. Today I mainly work with Java, Spring Boot and AWS.',
    paragraph2: 'I have experience in the Pix ecosystem, including static and dynamic flows, business rules, request processing, queries and QR Code generation aligned with BACEN requirements. My background also includes digital certificate security, CI/CD, observability, full stack development and chatbots.',
    portraitAlt: 'Thainara Gomes',
    highlights: [{ value: '4+ years', label: 'Software engineering' }, { value: 'Pix & BACEN', label: 'Digital payments' }, { value: 'AWS', label: 'Cloud and integrations' }],
  },
  experience: {
    eyebrow: 'Career', title: 'Professional experience', description: 'Experience that shows my progression from full stack development and chatbots to Java backend, cloud and payments.',
    currentBadge: 'Current', linkedinCta: 'View LinkedIn profile',
    items: {
      getnet: {
        company: 'Getnet Platform', role: 'Mid-level Software Engineer', period: 'Sep 2025 — Present',
        summary: 'Backend work on Pix ecosystem solutions, combining Java, AWS, security and observability in financial systems.',
        highlights: [
          'Backend development for the Pix ecosystem using Java and AWS services, including Cognito and KMS.',
          'Development of static and dynamic Pix flows aligned with BACEN requirements, including business rules, queries and QR Code generation.',
          'Work with digital certificates, including participation in a migration from HSM-based storage to Vault.',
          'Use of Concourse for CI/CD and Elastic and Komodor for application observability and monitoring.',
        ],
      },
      positivo: {
        company: 'Positivo S+', role: 'Junior Software Developer Analyst', period: 'Jul 2024 — Sep 2025',
        summary: 'Development and support of software solutions and chatbots, with cloud and integration work.',
        highlights: [
          'Projects using Java, JavaScript, Python, Azure, AWS and IBM Watson.',
          'Use of AWS services such as Lambda, Cognito, CloudWatch and API Gateway.',
          'Development, maintenance and continuous evolution of chatbots, including cognitive and generative AI experiences and incident handling.',
        ],
      },
      run2biz: {
        company: 'Run2biz Software LTDA', role: 'Junior Software Developer Analyst', period: 'Mar 2023 — Jul 2024',
        summary: 'Full stack work on digital products, APIs and low-code solutions.',
        highlights: [
          'Frontend and backend development using Node.js, low-code, APIs and MongoDB.',
          'Contributed to a marketplace across both frontend and backend.',
          'Implemented an experience center and personalization features.',
        ],
      },
      spread: {
        company: 'Spread Teleinformática Ltda', role: 'Information Systems Programmer', period: 'Feb 2022 — Aug 2022',
        summary: 'Development and maintenance of enterprise applications across Java, frontend and databases.',
        highlights: [
          'Worked with Java, Spring Boot, JavaScript, MVC, Struts, JSP, EJB, Hibernate and databases.',
          'Developed features related to electronic contract acceptance and acceptance history.',
          'Created tables, queries and DML/DDL database operations.',
        ],
      },
    },
  },
  skills: {
    eyebrow: 'Technologies', title: 'My core stack', description: 'Technologies aligned with my current focus on backend, payments, cloud, security and system operations.',
    items: {
      java: 'Java & Spring Boot', api: 'REST APIs & Integrations', cloud: 'AWS & Cloud', payments: 'Pix & BACEN',
      messaging: 'Kafka & Messaging', database: 'SQL & Databases', security: 'KMS, HSM & Vault', devops: 'Docker, CI/CD & Observability',
    },
  },
  projects: {
    eyebrow: 'Technical highlights', title: 'Where code meets impact.', description: 'Areas that represent my technical experience without exposing confidential details from corporate projects.',
    items: {
      payments: { eyebrow: 'Backend & Payments', title: 'Pix ecosystem', description: 'Building and evolving payment flows, APIs, queries and QR Code generation with a focus on robustness and BACEN requirements.' },
      security: { eyebrow: 'Cloud & Security', title: 'Platform security and operations', description: 'Experience with key and certificate management, KMS, HSM, Vault, CI/CD pipelines and application observability.' },
      ai: { eyebrow: 'AI & Automation', title: 'Chatbots and intelligent experiences', description: 'Development and support of chatbots and integrations, including IBM Watson, AWS and generative AI experiences.' },
    },
  },
  otherProjects: {
    eyebrow: 'Public projects', title: 'Other projects', description: 'A curated selection of public repositories showing different stacks, studies and products I have built.',
    publicBadge: 'Public repository', repositoryCta: 'View code', referenceCta: 'View Swagger', allProjectsCta: 'View all on GitHub',
    items: {
      javaOpenAi: { title: 'Java + OpenAI', category: 'AI & integrations', description: 'Java integration for sending requests to the OpenAI API and counting tokens with JTokkit.' },
      chronos: { title: 'Chronos Pomodoro', category: 'Productivity', description: 'Focus application built with React, TypeScript and Vite to organize Pomodoro work cycles.' },
      myFinance: { title: 'MyFinance Web', category: 'Finance', description: 'Personal finance system built with ASP.NET Core, layered architecture, Entity Framework Core and SQL Server.' },
      taskScheduler: { title: 'Task Scheduling', category: 'REST API', description: 'Web API for task CRUD and queries using Entity Framework Core, SQL Server and Swagger documentation.' },
    },
  },
  education: {
    eyebrow: 'Education', title: 'Academic foundation and continuous learning.', description: 'Academic education and complementary courses that support my software engineering experience.',
    items: {
      puc: { institution: 'PUC Minas', degree: 'Postgraduate Specialization in Software Engineering', period: 'Jun 2024 — Dec 2025' },
      unasp: { institution: 'UNASP', degree: 'Bachelor of Computer Science', period: 'Jan 2020 — Dec 2023' },
    },
    coursesTitle: 'Additional courses',
    courses: {
      javascript: { name: 'Front-end JavaScript Junior', provider: 'Run2biz / be.academy', duration: '110 hours' },
      spreadJava: { name: 'Bootcamp Spread Java Developer', provider: 'Digital Innovation One / Spread', duration: '97 hours' },
      webIntro: { name: 'Introduction to Web Development', provider: 'UNASP/SP', duration: '30 hours' },
    },
    languagesTitle: 'Languages', languages: [{ name: 'English', level: 'Intermediate' }, { name: 'Spanish', level: 'Intermediate' }],
  },
  contact: {
    eyebrow: 'Contact', title: 'Shall we build something interesting?', description: 'I am open to opportunities and conversations about backend engineering, payments, cloud and software products.',
    emailCta: 'Send email', location: 'São Paulo, Brazil',
  },
  footer: 'Built with React, TypeScript and Vite.',
}

const es: Messages = {
  meta: {
    title: 'Thainara Gomes | Ingeniera de Software | Backend Java',
    description: 'Portafolio de Thainara Gomes — Ingeniera de Software enfocada en backend Java, AWS, pagos, Pix e integraciones.',
  },
  navigation: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', skills: 'Skills', projects: 'Proyectos', education: 'Formación', contact: 'Contacto' },
  accessibility: {
    skipToContent: 'Saltar al contenido', mainNavigation: 'Navegación principal', mobileNavigation: 'Navegación móvil', goHome: 'Ir al inicio',
    lightTheme: 'Activar tema claro', darkTheme: 'Activar tema oscuro', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', languageSelector: 'Seleccionar idioma',
    socialLinks: 'Redes y contacto', aboutLink: 'Ir a la sección sobre mí', technologiesFor: 'Tecnologías de',
  },
  hero: {
    availability: 'Disponible para nuevos desafíos', greeting: 'Hola, soy', role: 'Ingeniera de Software | Backend Java',
    description: 'Desarrollo soluciones backend para pagos digitales, Pix e integraciones críticas con Java, Spring Boot, AWS, APIs REST, seguridad y observabilidad.',
    projectsCta: 'Ver proyectos', contactCta: 'Contactarme', portraitAlt: 'Retrato de Thainara Gomes', stackLabel: 'Enfoque', stackValue: 'Java • AWS • Pix • BACEN',
  },
  about: {
    eyebrow: 'Sobre mí', title: 'Backend, pagos y cloud con impacto real.',
    paragraph1: 'Soy Ingeniera de Software con más de 4 años de experiencia en desarrollo de sistemas, trabajando en backend, integraciones, cloud y soluciones para el sector financiero. Actualmente trabajo principalmente con Java, Spring Boot y AWS.',
    paragraph2: 'Tengo experiencia en el ecosistema Pix, incluyendo flujos estáticos y dinámicos, reglas de negocio, procesamiento de solicitudes, consultas y generación de códigos QR de acuerdo con requisitos de BACEN. Mi trayectoria también incluye seguridad de certificados digitales, CI/CD, observabilidad, desarrollo full stack y chatbots.',
    portraitAlt: 'Thainara Gomes',
    highlights: [{ value: '4+ años', label: 'Ingeniería de software' }, { value: 'Pix & BACEN', label: 'Pagos digitales' }, { value: 'AWS', label: 'Cloud e integraciones' }],
  },
  experience: {
    eyebrow: 'Trayectoria', title: 'Experiencia profesional', description: 'Experiencias que muestran mi evolución desde desarrollo full stack y chatbots hacia backend Java, cloud y pagos.',
    currentBadge: 'Actual', linkedinCta: 'Ver perfil en LinkedIn',
    items: {
      getnet: {
        company: 'Getnet Platform', role: 'Ingeniera de Software', period: 'Sep 2025 — Actual',
        summary: 'Trabajo backend en soluciones del ecosistema Pix, combinando Java, AWS, seguridad y observabilidad en sistemas financieros.',
        highlights: [
          'Desarrollo backend para el ecosistema Pix utilizando Java y servicios AWS, incluidos Cognito y KMS.',
          'Construcción de flujos Pix estáticos y dinámicos según requisitos de BACEN, incluyendo reglas de negocio, consultas y generación de códigos QR.',
          'Trabajo con certificados digitales y participación en una migración de almacenamiento en HSM hacia Vault.',
          'Uso de Concourse para CI/CD y de Elastic y Komodor para observabilidad y seguimiento de aplicaciones.',
        ],
      },
      positivo: {
        company: 'Positivo S+', role: 'Analista Desarrolladora Junior', period: 'Jul 2024 — Sep 2025',
        summary: 'Desarrollo y soporte de soluciones de software y chatbots, con trabajo en cloud e integraciones.',
        highlights: [
          'Participación en proyectos con Java, JavaScript, Python, Azure, AWS e IBM Watson.',
          'Uso de servicios AWS como Lambda, Cognito, CloudWatch y API Gateway.',
          'Desarrollo, mantenimiento y evolución de chatbots, incluyendo experiencias con IA cognitiva y generativa y gestión de incidentes.',
        ],
      },
      run2biz: {
        company: 'Run2biz Software LTDA', role: 'Analista Desarrolladora Junior', period: 'Mar 2023 — Jul 2024',
        summary: 'Trabajo full stack en productos digitales, APIs y soluciones low-code.',
        highlights: [
          'Desarrollo frontend y backend utilizando Node.js, low-code, APIs y MongoDB.',
          'Participación en la creación de un marketplace, tanto en frontend como en backend.',
          'Implementación de un experience center y funcionalidades de personalización.',
        ],
      },
      spread: {
        company: 'Spread Teleinformática Ltda', role: 'Programadora de Sistemas de Información', period: 'Feb 2022 — Ago 2022',
        summary: 'Desarrollo y mantenimiento de aplicaciones corporativas en Java, frontend y bases de datos.',
        highlights: [
          'Trabajo con Java, Spring Boot, JavaScript, MVC, Struts, JSP, EJB, Hibernate y bases de datos.',
          'Desarrollo de funcionalidades relacionadas con aceptación electrónica de contratos e historial de aceptación.',
          'Creación de tablas, consultas y operaciones DML y DDL.',
        ],
      },
    },
  },
  skills: {
    eyebrow: 'Tecnologías', title: 'Mi stack principal', description: 'Tecnologías alineadas con mi enfoque actual en backend, pagos, cloud, seguridad y operación de sistemas.',
    items: {
      java: 'Java & Spring Boot', api: 'APIs REST & Integraciones', cloud: 'AWS & Cloud', payments: 'Pix & BACEN',
      messaging: 'Kafka & Mensajería', database: 'SQL & Bases de Datos', security: 'KMS, HSM & Vault', devops: 'Docker, CI/CD & Observabilidad',
    },
  },
  projects: {
    eyebrow: 'Destacados técnicos', title: 'Donde el código genera impacto.', description: 'Áreas que representan mi experiencia técnica sin exponer detalles confidenciales de proyectos corporativos.',
    items: {
      payments: { eyebrow: 'Backend & Pagos', title: 'Ecosistema Pix', description: 'Construcción y evolución de flujos de pago, APIs, consultas y generación de códigos QR con foco en robustez y requisitos de BACEN.' },
      security: { eyebrow: 'Cloud & Seguridad', title: 'Seguridad y operación de plataforma', description: 'Experiencia con gestión de claves y certificados, KMS, HSM, Vault, pipelines de CI/CD y observabilidad de aplicaciones.' },
      ai: { eyebrow: 'IA & Automatización', title: 'Chatbots y experiencias inteligentes', description: 'Desarrollo y soporte de chatbots e integraciones, incluyendo IBM Watson, AWS y experiencias con IA generativa.' },
    },
  },
  otherProjects: {
    eyebrow: 'Proyectos públicos', title: 'Otros proyectos', description: 'Una selección curada de repositorios públicos que muestra diferentes stacks, estudios y productos que he desarrollado.',
    publicBadge: 'Repositorio público', repositoryCta: 'Ver código', referenceCta: 'Ver Swagger', allProjectsCta: 'Ver todos en GitHub',
    items: {
      javaOpenAi: { title: 'Java + OpenAI', category: 'IA e integraciones', description: 'Integración en Java para realizar solicitudes a la API de OpenAI y contar tokens con JTokkit.' },
      chronos: { title: 'Chronos Pomodoro', category: 'Productividad', description: 'Aplicación de enfoque construida con React, TypeScript y Vite para organizar ciclos del método Pomodoro.' },
      myFinance: { title: 'MyFinance Web', category: 'Finanzas', description: 'Sistema de finanzas personales en ASP.NET Core, organizado en capas y con Entity Framework Core y SQL Server.' },
      taskScheduler: { title: 'Programación de Tareas', category: 'API REST', description: 'Web API para CRUD y consultas de tareas, utilizando Entity Framework Core, SQL Server y documentación Swagger.' },
    },
  },
  education: {
    eyebrow: 'Formación', title: 'Base académica y aprendizaje continuo.', description: 'Formación académica y cursos complementarios que respaldan mi experiencia en ingeniería de software.',
    items: {
      puc: { institution: 'PUC Minas', degree: 'Especialización en Ingeniería de Software', period: 'Jun 2024 — Dic 2025' },
      unasp: { institution: 'UNASP', degree: 'Licenciatura en Ciencias de la Computación', period: 'Ene 2020 — Dic 2023' },
    },
    coursesTitle: 'Cursos complementarios',
    courses: {
      javascript: { name: 'Front-end JavaScript Junior', provider: 'Run2biz / be.academy', duration: '110 horas' },
      spreadJava: { name: 'Bootcamp Spread Java Developer', provider: 'Digital Innovation One / Spread', duration: '97 horas' },
      webIntro: { name: 'Introducción al Desarrollo Web', provider: 'UNASP/SP', duration: '30 horas' },
    },
    languagesTitle: 'Idiomas', languages: [{ name: 'Inglés', level: 'Intermedio' }, { name: 'Español', level: 'Intermedio' }],
  },
  contact: {
    eyebrow: 'Contacto', title: '¿Construimos algo interesante?', description: 'Estoy abierta a oportunidades y conversaciones sobre backend, pagos, cloud e ingeniería de software.',
    emailCta: 'Enviar correo', location: 'São Paulo, Brasil',
  },
  footer: 'Desarrollado con React, TypeScript y Vite.',
}

export const translations: Record<Locale, Messages> = { pt, en, es }
