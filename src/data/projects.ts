import type { Project } from './types'
import { projectLinks } from './links'

export const projects: Project[] = [
  {
    id: 'event-ticket-booking',
    title: 'Event Ticket Booking Backend',
    tagline: 'Scalable event booking with group expense splitting',
    status: 'Completed',
    description:
      'A production-grade REST API backend for event ticket booking — handling user registration, authentication, event publishing, seat selection, and ticket booking with a built-in group expense splitting engine.',
    problem:
      'Event booking platforms often lack integrated expense management for group bookings, forcing users to rely on external tools for splitting costs and settling debts among friends.',
    solution:
      'Engineered a Flask-based backend with PostgreSQL that combines full ticket booking workflows with automatic group expense splitting, balance calculation, and debt settlement logic to minimize transactions between group members.',
    features: [
      'Built an 11-endpoint REST API for event management and ticket booking using Flask and PostgreSQL, covering user authentication, venues, events, seat management, and bookings.',
      'Implemented transactional seat booking with PostgreSQL row-level locking (SELECT ... FOR UPDATE) to prevent double-booking when multiple users attempt to reserve the same seat concurrently.',
      'Implemented JWT-based authentication with role-based authorization, restricting organizer operations such as event, venue, and seat management to authorized users.',
      'Implemented Splitwise-style group expense splitting for shared bookings, calculating net balances per group and applying a debt-settlement algorithm to minimize the number of settling transactions between members.',
    ],
    architecture: [
      { layer: 'API Layer', stack: 'Python, Flask, REST APIs' },
      { layer: 'Authentication', stack: 'JWT Tokens, Role-based Authorization' },
      { layer: 'Database', stack: 'PostgreSQL, SQL Queries' },
      { layer: 'Deployment', stack: 'Docker, Containerized Services' },
    ],
    technologies: ['Python', 'Flask', 'PostgreSQL', 'SQL', 'JWT', 'Docker', 'REST APIs'],
    github: projectLinks.eventTicketBooking || undefined,
    featured: true,
  },
  {
    id: 'multi-rag',
    title: 'MultiRAG',
    tagline: 'Content Aware Multimodal RAG System',
    status: 'Completed',
    description:
      'A local multimodal Retrieval-Augmented Generation (RAG) system that answers questions from PDFs containing text, tables, images, and diagrams (Team Project with Indrajeet Singh).',
    problem:
      'Standard RAG systems only handle plain text, losing critical information embedded in tables, images, and diagrams within PDF documents, leading to incomplete and inaccurate answers.',
    solution:
      'Built a content-aware ingestion pipeline with semantic chunking, metadata tagging, table extraction, and vision-based image understanding. Implemented multimodal retrieval with reranking and evaluated against a text-only baseline for retrieval quality and hallucinations.',
    features: [
      'Co-developed a local multimodal RAG system to answer questions from complex PDFs (text, tables, images, and diagrams), coordinating the ingestion and retrieval architecture via Git feature branches and pull requests.',
      'Designed a content aware ingestion pipeline utilizing semantic chunking, metadata tagging, table extraction, and vision based image understanding to parse document layouts.',
      'Implemented multimodal retrieval using cross-encoder reranking and local LLM/VLM inference to improve context relevance for generated answers.',
      'Evaluated the pipeline against a text only RAG baseline using an \'LLM as a judge\' framework, achieving a 75% relative reduction in hallucination rate, and iterated on the architecture based on the findings.',
    ],
    architecture: [
      { layer: 'Orchestration', stack: 'Python, LangChain, LangGraph' },
      { layer: 'LLM / VLM', stack: 'Ollama, Qwen (local inference)' },
      { layer: 'Retrieval', stack: 'Semantic Chunking, Reranking, Vector Store' },
      { layer: 'Deployment', stack: 'Docker, Local Environment' },
    ],
    technologies: ['Python', 'LangChain', 'LangGraph', 'Ollama', 'Qwen', 'Docker', 'RAG'],
    github: projectLinks.multiRAG || undefined,
    featured: true,
  },
  {
    id: 'agent-marketplace',
    title: 'Agent Marketplace',
    tagline: 'Cloud & DevOps Platform',
    status: 'Completed',
    description:
      'An agent marketplace application containerized with Docker and deployed on Kubernetes hosted on AWS EC2, featuring a full Jenkins CI/CD pipeline.',
    features: [
      'Built and deployed an agent marketplace application, containerized with Docker and deployed on Kubernetes hosted on AWS EC2 instance.',
      'Designed a Jenkins CI/CD pipeline to automate Docker image builds and application deployment to Kubernetes.',
      'Configured a Kubernetes Deployment with 3 replicas, Services, and liveness/readiness probes to distribute traffic across healthy pods and detect unhealthy application instances.',
      'Validated Kubernetes workload recovery by simulating pod failures and verifying automatic pod recreation and restoration of the desired replica count.',
      'Received the Best Project Award for cloud infrastructure design and deployment using AWS and DevOps practices.',
    ],
    architecture: [
      { layer: 'Orchestration', stack: 'Kubernetes, Docker' },
      { layer: 'CI/CD Pipeline', stack: 'Jenkins' },
      { layer: 'Cloud Provider', stack: 'AWS EC2' },
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    github: projectLinks.cricketTournament || undefined,
    featured: true,
  },
]
