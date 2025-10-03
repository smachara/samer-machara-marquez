import type { CVData } from './types';

export const cvData: CVData = {
  personalInfo: {
    name: "Samer MACHARA MARQUEZ",
    title: "Architecte Logiciel & Responsable de Projets Techniques",
    location: "Evry Courcouronnes, France",
    email: "smachara@gmail.com",
    phone: "(+33) 6 48 58 69 31",
    website: "smachara.github.io/samer-machara-marquez",
    linkedin: "linkedin.com/in/samer-machara",
    github: "github.com/smachara",
  },
  summary: "Architecte logiciel et leader technique avec plus de 15 ans d'expérience dans la conception de systèmes distribués, d'architectures microservices et la mise en œuvre de pratiques DevOps. Expert en pilotage de projets stratégiques en environnement Agile, avec une forte compétence en sécurité et en alignement avec les référentiels métiers.",
  experience: [
    {
      title: "Référent Technique – DOPS / Département Intégration",
      company: "Agence du Numérique en Santé (ANS)",
      period: "févr. 2023 - aujourd'hui",
      responsibilities: [
        "Responsable technique des projets FINESS et RIPSC (architecture, sécurité, validation DAT/DAL).",
        "Définition et application des règles d'architecture logicielle et technique (microservices, DDD).",
        "Coordination des acteurs internes (MOA, MOE) et externes (éditeurs, sous-traitants).",
        "Conduite des travaux de mise en conformité sécurité (EBIOS, homologation ANS) pour FINESS.",
        "Initiation d'une encyclopédie des bonnes pratiques pour standardiser les livrables et capitaliser sur les retours d'expérience.",
      ],
    },
    {
      title: "Chef de projet",
      company: "Freelance pour Plug and Plate",
      period: "oct. 2021 - déc. 2022",
      responsibilities: [
        "Pilotage de projet Agile (Scrum) pour le développement de solutions web pour la restauration.",
        "Cadrage des besoins métiers, rédaction des Users Stories, et priorisation du Backlog.",
        "Accompagnement des équipes de développement et organisation de la recette.",
      ],
    },
    {
      title: "Chef de projet SI",
      company: "Contrat Facil SAS (Testamento.fr)",
      period: "oct. 2017 - janv. 2020",
      responsibilities: [
        "Implémentation de la méthodologie Scrum au sein de l'équipe interne.",
        "Gestion du projet d'industrialisation de la solution vers une architecture micro-services.",
        "Supervision et sélection des prestataires sous-traitants.",
      ],
    },
    {
      title: "Ingénieur Plateforme Cloud",
      company: "Institut Mines-Télécom Sud-Paris & CNRS",
      period: "mars 2016 - sept. 2017",
      responsibilities: [
        "Consolidation de la gestion et de l'administration de la plateforme Cloud du laboratoire.",
        "Coordination du déménagement du Data Center et centralisation de la documentation.",
      ],
    },
     {
      title: "Ingénieur recherche et développement (Doctorat)",
      company: "Institut Mines-Télécom Sud-Paris",
      period: "oct. 2011 - oct. 2014",
      responsibilities: [
        "Conception de modèles pour la gestion de la qualité de l'information dans l'IoT.",
        "Gestion autonome du projet de recherche, expérimentation et rédaction scientifique.",
      ],
    },
  ],
  education: [
    {
      degree: "Doctorat (PhD) en Informatique",
      institution: "L'Université Paris-Saclay, France",
      period: "2011 - 2015",
    },
    {
      degree: "Master en Informatique et Réseaux",
      institution: "Institut Mines-Télécom Sud-Paris, France",
      period: "2009 - 2011",
    },
    {
      degree: "Ingénieur en Sciences Informatiques",
      institution: "Université Nueva Esparta, Venezuela",
      period: "1995 - 2000",
    },
  ],
  certificates: [
    { title: "Elastic Observability Engineer", issuer: "PLB Consultant", date: "2024" },
    { title: "Réaliser une architecture microservices en Java", issuer: "ORSYS", date: "2024" },
    { title: "Manager une équipe - niveau 1", issuer: "CEGOS", date: "2023" },
    { title: "Conduite des projets informatiques", issuer: "CNAM", date: "2012" },
  ],
  skills: [
    {
      category: "Architecture & Conception",
      items: ["Microservices", "DDD", "SOA", "API REST", "Design Patterns", "Clean Architecture"],
    },
    {
      category: "Langages & Frameworks",
      items: ["Java (Spring Boot)", "JavaScript", "TypeScript (Node.js)", "Python"],
    },
    {
      category: "Bases de données",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "CI/CD (GitLab CI, Jenkins)", "HelmChart", "OVH", "ArgoCD"],
    },
    {
      category: "Sécurité",
      items: ["EBIOS", "OWASP Top 10", "Homologation ANSSI"],
    },
    {
      category: "Méthodologies",
      items: ["Agile (Scrum, Kanban)", "TDD", "BDD", "Cycle en V"],
    },
    {
        category: "IA",
        items: ["ChatGPT", "Gemini", "AgentsAI", "N8N", "LangChain"],
    }
  ],
  languages: [
    { name: "Espagnol", level: "Courant (natif)" },
    { name: "Français", level: "Courant (C1)" },
    { name: "Anglais", level: "Courant (B2)" },
  ],
  references: "Références disponibles sur demande.",
};