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
      'Built REST APIs for user registration, authentication, event publishing, seat selection, and ticket booking.',
      'Designed PostgreSQL tables and wrote SQL queries for user accounts, expenses, balances, and settlements.',
      'Implemented group expense splitting for shared bookings with automatic balance calculation and debt settlement logic to reduce transactions between group members.',
      'Implemented JWT based authentication and authorization for secure access to backend APIs.',
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
    tagline: 'Content-aware multimodal RAG system',
    status: 'Completed',
    description:
      'A local multimodal Retrieval-Augmented Generation (RAG) system that answers questions from PDFs containing text, tables, images, and diagrams — using content-aware ingestion, semantic chunking, and local LLM/VLM inference.',
    problem:
      'Standard RAG systems only handle plain text, losing critical information embedded in tables, images, and diagrams within PDF documents, leading to incomplete and inaccurate answers.',
    solution:
      'Built a content-aware ingestion pipeline with semantic chunking, metadata tagging, table extraction, and vision-based image understanding. Implemented multimodal retrieval with reranking and evaluated against a text-only baseline for retrieval quality and hallucinations.',
    features: [
      'Built a local multimodal RAG system to answer questions from PDFs containing text, tables, images, and diagrams.',
      'Designed a content-aware ingestion pipeline with semantic chunking, metadata tagging, table extraction, and vision based image understanding.',
      'Implemented multimodal retrieval with reranking and local LLM/VLM inference to provide relevant context for answers.',
      'Evaluated answers for retrieval quality and hallucinations, comparing the multimodal pipeline with a text-only RAG baseline.',
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
    id: 'cricket-tournament',
    title: 'Cricket Tournament Management',
    tagline: 'Normalized relational database system',
    status: 'Completed',
    description:
      'A comprehensive relational database system for managing cricket tournaments — featuring normalized schema design through ER modelling, with advanced SQL constructs for robust tournament data management.',
    features: [
      'Designed a normalized relational database schema using ER modelling.',
      'Implemented Constraints, Aggregates, Stored Procedures, Triggers, Joins and Transactions.',
    ],
    technologies: ['MySQL', 'ER Modelling', 'SQL', 'Stored Procedures', 'Triggers'],
    github: projectLinks.cricketTournament || undefined,
    featured: true,
  },
]
