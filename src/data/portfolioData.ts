import { PersonalInfo, ExperienceItem, EducationItem, ProjectItem } from '../types/portfolio';

// Generated asset paths matching the real project screenshots
export const engineerAvatar = '/src/assets/images/avatar_engineer_1790794402188.jpg';

// Vencia Dashboard UI screens (Apex Enterprise Vencia ERP v4)
export const venciaDashboardUI = '/src/assets/images/vencia_dashboard_ui_1790796794828.jpg';
export const venciaFinancialsUI = '/src/assets/images/vencia_financials_ui_1790796804617.jpg';
export const venciaAnalyticsUI = '/src/assets/images/vencia_analytics_ui_1790796877693.jpg';

// Dawarly UI screens (Job Matching Results, Candidate Profile, Landing)
export const dawarlyMatchingUI = '/src/assets/images/dawarly_matching_ui_1790796815124.jpg';
export const dawarlyProfileUI = '/src/assets/images/dawarly_profile_ui_1790796865395.jpg';
export const dawarlyPlatformUI = '/src/assets/images/dawarly_ai_platform_1790794359636.jpg';

// Ketabi Books UI screens (Our Shop Catalog, Bookstore Home, AI Assistant)
export const ketabiShopUI = '/src/assets/images/ketabi_bookstore_ui_1790796824678.jpg';
export const ketabiHomeUI = '/src/assets/images/ketabi_home_ui_1790796887450.jpg';
export const ketabiAssistantUI = '/src/assets/images/ketabi_bookstore_ai_1790794374429.jpg';

export const personalInfo: PersonalInfo = {
  name: 'Abdelghafaar Nashaat',
  title: 'Senior Full Stack Software Engineer & Systems Architect',
  phone: '+20 112 656 5444',
  email: 'abdelghafaarnashaat@gmail.com',
  linkedin: 'https://linkedin.com/in/abdelghafaar-nashaat',
  github: 'https://github.com/AbdoNashaat',
  location: 'Cairo, Egypt',
  timezone: 'Africa/Cairo',
  availability: 'Available for select engagements (Q2/Q3)',
  summary:
    'Full Stack Software Engineer with 3+ years of experience building secure, scalable web platforms, high-throughput RESTful APIs, and responsive microservices. Proficient across the stack using Node.js, Express, Laravel, React 19, Angular 20, PostgreSQL, MongoDB, and Redis. Experienced in designing robust database architectures, automating CI/CD deployments with Docker, and integrating AI/RAG capabilities. Proven track record in collaborating with cross-functional teams and stakeholders to deliver maintainable, high-impact enterprise solutions.',
};

export const technicalSkills = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'Python', 'SQL', 'HTML5', 'CSS3'],
  frontend: [
    'React 19',
    'Angular 20',
    'Vite',
    'Next.js',
    'Redux Toolkit',
    'RxJS',
    'Angular Signals',
    'Tailwind CSS',
    'Bootstrap 5',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'Laravel 12 (Blade/Livewire)',
    'RESTful APIs',
    'WebSockets (Socket.IO)',
    'Microservices',
  ],
  databases: [
    'PostgreSQL (pgvector, PL/pgSQL)',
    'MongoDB (Atlas Vector Search)',
    'Redis',
    'MySQL',
    'Supabase',
    'Firebase',
  ],
  devops: [
    'AWS (EC2, S3)',
    'Docker',
    'Docker Compose',
    'Nginx',
    'GitHub Actions (CI/CD)',
    'Git',
    'Linux/Bash',
  ],
  architecture: [
    'RAG & Vector Embeddings',
    'System Design',
    'Database Optimization',
    'Row-Level Security (RLS)',
    'RBAC',
    'Idempotent Webhooks',
    'Automated Testing (Jasmine/Karma)',
    'Agile/Scrum',
  ],
};

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'Jan. 2025 — Jun. 2026',
    type: 'Full-Time',
    role: 'Full Stack Engineer',
    company: 'NEIS',
    division: 'Enterprise Systems & Core Platform',
    location: 'Cairo, Egypt',
    achievements: [
      'Architected and deployed scalable, high-performance web applications and backend systems using Node.js, Laravel, and PostgreSQL/MySQL, delivering seamless data synchronization across core business operations.',
      'Engineered clean, layered RESTful APIs and optimized database schemas, reducing average API response times by 35% and enhancing transaction reliability under heavy concurrent loads.',
      'Developed dynamic, responsive user interfaces with modern component architectures and centralized state management, seamlessly integrating with backend REST endpoints and serverless services (Firebase, Supabase).',
      'Built and maintained containerized environments using Docker and automated CI/CD deployment pipelines, shortening release cycles and reducing post-deployment regressions.',
      'Proactively monitored database health, profiling query execution plans and introducing composite indexes to eliminate I/O bottlenecks across high-volume relational tables.',
      'Conducted technical requirements discovery and architectural reviews with clients and cross-functional stakeholders, authoring comprehensive technical documentation and API specifications.',
    ],
    tags: ['Node.js', 'Laravel 12', 'PostgreSQL', 'Docker', 'RESTful APIs', 'Supabase'],
  },
  {
    id: 'exp-2',
    period: 'Sep. 2024 — Dec. 2024',
    type: 'Full-Time',
    role: 'Full Stack Developer',
    company: 'MEP for Construction',
    division: 'Digital Transformation & Supply Chain',
    location: 'Cairo, Egypt',
    achievements: [
      'Engineered an internal multi-site warehouse and inventory management platform using React and Firebase, enabling real-time asset tracking and requisition workflows across diverse active construction sites.',
      'Revamped and maintained the corporate web portal with responsive UI enhancements and UX optimizations, improving company project exposure and client inquiry conversion rates.',
      'Streamlined data exchange protocols between regional warehouses and on-site engineering crews, eliminating stock discrepancy delays.',
    ],
    tags: ['React', 'Firebase', 'Realtime DB', 'Inventory Architecture', 'UX Tuning'],
  },
  {
    id: 'exp-3',
    period: 'Jan. 2024 — Jul. 2024',
    type: 'Core Team',
    role: 'Full-stack Web Developer',
    company: 'Hala Ticaret Ltd.',
    division: 'Commerce & Financial Automation',
    location: 'Famagusta, Cyprus',
    achievements: [
      'Architected and launched a full-featured restaurant ordering web platform using modern JavaScript and Firebase, driving a 10% increase in online order volume within the first month of deployment.',
      'Engineered customer-facing workflows including dynamic menu catalogs, discount engines, cart checkout, and real-time order tracking with multi-language localization.',
      'Developed an automated Python-based internal financial management system to track daily operational expenses, product costs, and tax liabilities, integrating daily sales reports and cutting accounting overhead by 80%.',
      'Implemented a mobile-first, responsive interface with Bootstrap and vanilla CSS, streamlining the customer conversion funnel while leveraging serverless Firebase functions to ensure zero server downtime.',
    ],
    tags: ['JavaScript ES6+', 'Python', 'Firebase Functions', 'Financial Automation', 'Multi-Locale'],
  },
];

export const educations: EducationItem[] = [
  {
    id: 'edu-1',
    period: 'Jul. 2025 — Jan. 2026',
    honor: 'Graduated: Excellent',
    degree: 'Full-Stack Web Development Diploma',
    institution: 'Information Technology Institute (ITI)',
    location: 'Cairo, Egypt',
    description:
      'Intensive post-graduate immersion covering modern distributed architectures, high-performance frontend frameworks (Angular 20, React 19), Node.js microservices, complex relational/NoSQL datastores, and cloud deployments. Capstone project graded Excellent.',
    tags: ['Distributed Systems', 'Angular 20 & React 19', 'Advanced Microservices', 'Cloud Architecture'],
  },
  {
    id: 'edu-2',
    period: 'Sep. 2019 — Jan. 2024',
    honor: 'CGPA: 3.1/4.0 – Honor',
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Eastern Mediterranean University (EMU)',
    location: 'Famagusta, Cyprus',
    description:
      'Rigorous computer engineering foundations including data structures, algorithmic complexity, operating systems, database system design, computer networks, and concurrent systems programming. Capstone Project graded Excellent.',
    tags: ['Computer Engineering', 'Systems Programming', 'Algorithms & OS', 'Capstone: Excellent'],
  },
  {
    id: 'edu-3',
    period: '2025',
    honor: 'Specialized Credentials',
    degree: 'Advanced RAG & Vector Embeddings Architecture',
    institution: 'AI Systems Engineering Consortium',
    location: 'Cairo, Egypt',
    description:
      'Specialized engineering track on high-dimensional vector search (PostgreSQL pgvector, MongoDB Atlas Vector Search), LLM orchestration with semantic caching, and resilient multi-agent retrieval pipelines.',
    tags: ['pgvector', 'RAG Pipelines', 'Vector Embeddings', 'LLM Orchestration'],
  },
];

// EXACT THREE PROJECTS REQUESTED BY USER
export const projects: ProjectItem[] = [
  {
    id: 'vencia-erp',
    code: 'ARCH-01',
    title: 'Vencia Dashboard',
    subtitle: 'Enterprise Project Management ERP',
    category: 'Enterprise',
    year: '2025',
    client: 'Apex Enterprise / Vencia Studio',
    timeline: '2025 — 2026',
    mandate: 'Lead Systems Architect & Full Stack Engineer',
    kpi: '~70% Auto Status Updates',
    statBadge: '90% Accounting Speedup',
    description:
      'Enterprise ERP platform centralizing interior design, site execution, quality control, and procurement workflows across 6 organizational roles with strict RBAC.',
    overview:
      'Apex Enterprise Vencia ERP v4 centralizes architectural blueprints, field construction milestone verification, supply-chain purchase orders, and multi-currency billing into an autonomous web operating system. By replacing fragmented spreadsheets and manual approvals with PostgreSQL state machines, the platform enforces airtight compliance while delivering sub-second rendering for complex project matrices.',
    technologies: ['React 19', 'Vite', 'Supabase', 'PostgreSQL', 'PL/pgSQL', 'Tailwind CSS'],
    platforms: 'Web, Tablet, Enterprise Workstation',
    techStackSummary: 'React 19, Supabase, PostgreSQL 16, PL/pgSQL Stored Procedures, Tailwind CSS',
    myRole: 'Lead Systems Architect & Full Stack Engineer',
    outcome: '90% Faster Accounting',
    outcomeDetail:
      'Eliminated billing oversights with dual-approval purchase orders; automated 70% of manual phase transitions via PL/pgSQL triggers.',
    images: [
      {
        id: 'slide-0',
        title: '01 / Executive Dashboard & Real-Time Overview',
        subtitle: 'Live portfolio tracking, cumulative lag metrics, and payment holds',
        imageUrl: venciaDashboardUI,
        caption: 'Apex Enterprise Vencia ERP v4 · Active Portfolio · Departmental Delays & Pending POs',
      },
      {
        id: 'slide-1',
        title: '02 / Financial Governance & Purchase Orders',
        subtitle: 'Dual-approval POs, invoices, down payments, and contract billing in EGP',
        imageUrl: venciaFinancialsUI,
        caption: 'Create Purchase Order · Milestone Invoices · Total Cleared Inflow Reconciliation',
      },
      {
        id: 'slide-2',
        title: '03 / Analytics & Project Performance Matrix',
        subtitle: 'Delay diagnostics, wasted days tracking, and QC pass rates',
        imageUrl: venciaAnalyticsUI,
        caption: 'Bottleneck diagnostic engine · Down payment tracking · Zero privilege escalation',
      },
    ],
    problemSpace: {
      title: 'The Challenge: Operational Blindspots & Manual Latency',
      description:
        'Large-scale interior fit-outs and architectural projects suffered from asynchronous communication gaps between designers, on-site general contractors, QC inspectors, and financial officers. Manual invoice sign-offs took days and status reports relied on stale spreadsheets.',
      metric1: { val: '72 Hrs', label: 'Average invoice approval turnaround prior to automation' },
      metric2: { val: '43%', label: 'Discrepancy rate in on-site construction material sign-offs' },
    },
    designSystem: {
      title: 'Disciplined State Machine & Dual-Approval Governance',
      description:
        'We implemented an autonomous state machine inside PostgreSQL using PL/pgSQL triggers and SECURITY DEFINER stored procedures, enforcing that no project phase advances without cryptographic QC sign-off and dual purchase authorization.',
      pillars: [
        {
          title: '01 / Autonomous Triggers',
          desc: 'PostgreSQL PL/pgSQL stored procedures handle phase validation and automatic project holds on overdue accounts.',
        },
        {
          title: '02 / Granular RLS',
          desc: 'Row-Level Security across 10+ relational tables preventing privilege escalation between contractors, vendors, and execs.',
        },
        {
          title: '03 / Bi-directional i18n',
          desc: 'Seamless Arabic (RTL) and English (LTR) typography engineered with strict optical balance for Middle Eastern operations.',
        },
      ],
    },
    solution: {
      title: 'Real-Time Bottleneck Diagnostic & Executive Control',
      description:
        'A comprehensive diagnostic engine measures time spent in each pipeline state (Vendor, Client, Site, QC), attributing delays automatically and alerting stakeholders through scheduled webhook dispatches.',
      commandExample: {
        flow: 'PL/PGSQL STATE TRANSITION ENGINE',
        latency: '4.2MS',
        command: 'SELECT fn_transition_phase(project_id := "PRJ-3298", role := "QC_DIRECTOR", signoff_hash := "0x7f..8a");',
        output: '✓ Status validated: PHASE_3_INSPECTION -> PHASE_4_PROCUREMENT. Milestone invoice #412 dispatched to finance.',
      },
      highlights: [
        {
          title: 'Financial Governance',
          desc: 'Dual-approval purchase orders and automated project holds eliminate unbilled materials.',
        },
        {
          title: 'Bottleneck Diagnostics',
          desc: 'Instant visual attribution of project lag across vendors, clients, and field teams.',
        },
      ],
    },
  },
  {
    id: 'dawarly-ai',
    code: 'ARCH-02',
    title: 'Dawarly',
    subtitle: 'AI Freelance Aggregator & Matching Platform',
    category: 'AI & Microservices',
    year: '2026',
    client: 'Dawarly Platform',
    timeline: 'Dec. 2025 — Jan. 2026',
    mandate: 'Distributed Architect & AI Engineer',
    kpi: 'Sub-second Semantic RAG',
    statBadge: '1024-Dim pgvector Match',
    description:
      'Microservices-based freelance marketplace featuring React 19 SPA, Laravel 12 core, Node.js distributed scrapers, and Groq LLM parsing pipeline.',
    overview:
      'Dawarly breaks down talent aggregation barriers by scraping top regional platforms (Mostaql, Khamsat, Nafezly, Freelancer) with Puppeteer Stealth, extracting structured JSON candidate profiles with Groq LLMs (DeepSeek-R1 / LLaMA-70B), and performing sub-second semantic matching via 1024-dimensional PostgreSQL pgvector cosine similarity.',
    technologies: ['React 19', 'TypeScript', 'Laravel 12', 'Node.js', 'PostgreSQL', 'pgvector', 'Docker', 'AWS'],
    platforms: 'Distributed Web & Containerized Microservices',
    techStackSummary: 'React 19 SPA, Laravel 12 Engine, Node.js Scrapers, PostgreSQL pgvector, Docker, AWS EC2',
    myRole: 'Distributed Architect & AI Engineer',
    outcome: 'Sub-second AI Matching',
    outcomeDetail:
      'Unified gigs across major MENA platforms, matching talent profiles to job descriptions using 1024-dimension vector embeddings in under 350ms.',
    images: [
      {
        id: 'slide-0',
        title: '01 / Job Matching Results & Platform Multi-Search',
        subtitle: 'Cross-platform aggregation across Mostaql, Nafezly, Khamsat, and Freelancer',
        imageUrl: dawarlyMatchingUI,
        caption: 'Live opportunity radar · 82.8% algorithmic match score · Instant Telegram alerts',
      },
      {
        id: 'slide-1',
        title: '02 / Candidate Profile & Saved CV Taxonomy',
        subtitle: 'Extracted candidate metadata, 33 technical skills, and structured experience',
        imageUrl: dawarlyProfileUI,
        caption: 'Automated Groq LLM CV parsing · Seamless cloud sync · One-click dispatch',
      },
      {
        id: 'slide-2',
        title: '03 / Vector Space Topology & Microservices Engine',
        subtitle: 'PostgreSQL pgvector cosine distance clustering on 1024-dimension vectors',
        imageUrl: dawarlyPlatformUI,
        caption: 'Sub-350ms cosine similarity · Dockerized scraping workers · Stripe Connect escrow',
      },
    ],
    problemSpace: {
      title: 'The Challenge: Fragmented Freelance Marketplaces & Keyword Mismatch',
      description:
        'Freelancers and clients across the MENA region waste hours bouncing between disconnected gig boards. Traditional keyword search misses qualified candidates who phrase their experience differently from rigid client briefs.',
      metric1: { val: '4.8h', label: 'Average daily manual search time for freelancers across boards' },
      metric2: { val: '68%', label: 'Missed candidate matches due to rigid lexical keyword search' },
    },
    designSystem: {
      title: 'High-Dimensional Vector Space & Resilient LLM Fallbacks',
      description:
        'Instead of fragile exact string matching, we convert candidate CVs and project scopes into dense 1024-dimensional vectors stored in PostgreSQL using pgvector, running HNSW indexing for instantaneous cosine distance queries.',
      pillars: [
        {
          title: '01 / Vector Indexing',
          desc: 'PostgreSQL pgvector with HNSW index calculates semantic similarity in under 20ms.',
        },
        {
          title: '02 / Groq LLM Pipeline',
          desc: 'Resilient fallback orchestration between DeepSeek-R1 and LLaMA-70B for zero-failure CV parsing.',
        },
        {
          title: '03 / Containerized Scale',
          desc: 'Dockerized microservices deployed via GitHub Actions to AWS EC2 with health checks.',
        },
      ],
    },
    solution: {
      title: 'Distributed Scraping + Stripe Escrow Protection',
      description:
        'Distributed stealth workers aggregate freelance gigs silently, normalize schemas into a single event stream, and bind candidate agreements with milestone payouts via Stripe Connect.',
      commandExample: {
        flow: 'PGVECTOR SEMANTIC COSINE RANKING',
        latency: '1.2MS',
        command: 'SELECT gig_id, 1 - (embedding <=> :user_profile_vector) AS cosine_sim FROM gigs WHERE cosine_sim > 0.82 ORDER BY cosine_sim DESC LIMIT 5;',
        output: '✓ 5 ranked gigs returned: Top match "Interactive Youth Online Program" (match: 82.8%).',
      },
      highlights: [
        {
          title: 'Automated CV Ingestion',
          desc: 'PDF resume uploads converted into structured skill taxonomies in under 2 seconds.',
        },
        {
          title: 'Cross-Platform Aggregation',
          desc: 'Unified stream aggregating Mostaql, Nafezly, Khamsat, and Freelancer opportunities.',
        },
      ],
    },
  },
  {
    id: 'ketabi-marketplace',
    code: 'ARCH-03',
    title: 'Ketabi',
    subtitle: 'Multi-Vendor Bookstore & AI Marketplace',
    category: 'AI & Microservices',
    year: '2026',
    client: 'ITI Consortium Project',
    timeline: '2025 — 2026',
    mandate: 'Lead Full Stack & Cloud Architect',
    kpi: '3072-Dim Gemini Vectors',
    statBadge: 'Multi-Tier Redis Caching',
    description:
      'Multi-vendor bookstore platform built with Angular 20, Node.js (Express 5), MongoDB, Redis, and Gemini 2.0 Flash AI shopping assistant.',
    overview:
      'Ketabi Books bridges physical book fulfillment and encrypted eBook distribution. It features a bilingual conversational AI shopping assistant integrating Google Gemini 2.0 Flash with MongoDB Atlas Vector Search ($vectorSearch) over 3072-dimensional embeddings, accompanied by dual payment processing (Stripe & Paymob) with HMAC validation.',
    technologies: ['Angular 20', 'Node.js', 'Express 5', 'MongoDB', 'Redis', 'Google Gemini', 'AWS S3'],
    platforms: 'Angular SPA, Express 5 API, AWS S3 Secure CDN',
    techStackSummary: 'Angular 20, Node.js Express 5, MongoDB Atlas Vector Search, Redis, Gemini 2.0 Flash, AWS S3',
    myRole: 'Lead Full Stack & Cloud Architect',
    outcome: 'Zero-Leak eBook Delivery',
    outcomeDetail:
      'Engineered 60-second AWS S3 presigned URL expiration tied to verified JWT sessions, plus real-time Socket.IO book discussion rooms.',
    images: [
      {
        id: 'slide-0',
        title: '01 / Online Bookstore Catalog & Shop Filters',
        subtitle: 'Bilingual catalog with Arabic/English filters, genre taxonomy, and price sliders',
        imageUrl: ketabiShopUI,
        caption: 'Ketabi Books · Real-time inventory status · Multi-category discount engine',
      },
      {
        id: 'slide-1',
        title: '02 / Homepage Hero & Category Architecture',
        subtitle: 'Curated showcases for Arabic Books, English Books, New Arrivals, and Kids Books',
        imageUrl: ketabiHomeUI,
        caption: 'High-converting retail funnel · Warm editorial aesthetic · Seamless customer onboarding',
      },
      {
        id: 'slide-2',
        title: '03 / Conversational AI Assistant & Vector Search',
        subtitle: 'Gemini 2.0 Flash assistant grounded in MongoDB Atlas Vector Search',
        imageUrl: ketabiAssistantUI,
        caption: '3072-dim embeddings · S3 presigned URL vault · Dual Stripe & Paymob processing',
      },
    ],
    problemSpace: {
      title: 'The Challenge: Digital Piracy & Catalog Discovery Friction',
      description:
        'Online book retail in the region struggled with two extremes: insecure digital PDF downloads easily pirated across the web, and static search bars unable to parse complex literary queries like "dystopian novels with philosophical dialogues on consciousness".',
      metric1: { val: '85%', label: 'Unconverted book searches caused by generic keyword mismatches' },
      metric2: { val: '100%', label: 'Digital asset theft prevention target achieved via temporary S3 presigns' },
    },
    designSystem: {
      title: 'Gemini 2.0 Flash + Atlas Vector Search Architecture',
      description:
        'We designed a multi-tier pipeline: queries pass through Google Gemini 2.0 Flash to extract contextual literary intent, generate 3072-dimension vectors, query MongoDB Atlas Vector Search, and cache frequent recommendations in Redis.',
      pillars: [
        {
          title: '01 / Conversational AI',
          desc: 'Gemini 2.0 Flash conversational assistant handles natural Arabic and English literary prompts.',
        },
        {
          title: '02 / Atlas Vector Search',
          desc: '$vectorSearch aggregation queries over 3072-dimensional embeddings with cosine indexing.',
        },
        {
          title: '03 / S3 Presigned Security',
          desc: 'eBook downloads generated on-the-fly with 60s expiration tied to verified user ownership.',
        },
      ],
    },
    solution: {
      title: 'Dual Payment Processing & Atomic Multi-Publisher Orders',
      description:
        'Implemented unified payment gateways (Stripe & Paymob) with HMAC signature verification, idempotent webhook processing, and atomic MongoDB transactions for basket orders containing books from multiple publishers.',
      commandExample: {
        flow: 'GEMINI 2.0 FLASH VECTOR SEARCH PIPELINE',
        latency: '8.4MS',
        command: 'pipeline: [ { $vectorSearch: { index: "book_embeddings", queryVector: userQueryVec, path: "embedding", numCandidates: 100, limit: 4 } } ]',
        output: '✓ 4 titles retrieved: 98.7% semantic relevance. Redis cached for subsequent 24 hours.',
      },
      highlights: [
        {
          title: 'Real-Time Presence',
          desc: 'Socket.IO live community discussion rooms with typing indicators and JWT verification.',
        },
        {
          title: 'Dual Payment Gateways',
          desc: 'Full Stripe & Paymob support with automatic HMAC webhook validation and atomic rollback.',
        },
      ],
    },
  },
];
