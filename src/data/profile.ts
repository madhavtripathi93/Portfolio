import type { Education, SkillGroup, Achievement } from './types'
import { socialLinks } from './links'

export const profile = {
  name: 'Madhav Tripathi',
  role: 'Backend & AI Engineer',
  focus: 'Backend · AI/LLM · Cloud/DevOps',
  location: 'Chennai, India',
  email: 'tripathimadhav8318@gmail.com',
  phone: '+91-7786844811',
  socials: {
    github: socialLinks.github,
    linkedin: socialLinks.linkedin,
  },
}

export const about: { text: string; highlight?: boolean }[] = [
  { text: 'I\u2019m Madhav — a ' },
  { text: 'B.Tech CSE', highlight: true },
  { text: ' student at SRMIST with a ' },
  { text: '9.54 CGPA', highlight: true },
  { text: ', focused on ' },
  { text: 'Data Structures & Algorithms, backend engineering and applied AI systems', highlight: true },
  { text: '. I build REST APIs, relational database systems, RAG pipelines and LLM-based applications using ' },
  { text: 'C++, Python, SQL and Docker', highlight: true },
  { text: '. Currently strengthening System Design, Cloud infrastructure and scalable backend development.' },
]

export const skills: SkillGroup[] = [
  { label: 'Languages', skills: ['C++', 'Python', 'SQL'] },
  { label: 'Backend Development', skills: ['Flask', 'Node.js', 'REST APIs', 'JWT Authentication'] },
  { label: 'Databases', skills: ['MySQL', 'MongoDB', 'Database Design'] },
  { label: 'AI / LLM', skills: ['LangChain', 'LangGraph', 'RAG', 'Ollama', 'MCP', 'A2A', 'SHAP'] },
  { label: 'Cloud / DevOps', skills: ['AWS (EC2, S3, EBS, Lambda, CloudFront, Route 53, EKS, CloudWatch, VPC)', 'Docker', 'Jenkins', 'Kubernetes'] },
  { label: 'Tools', skills: ['Git', 'GitHub'] },
]

export const education: Education[] = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech, Computer Science and Engineering',
    period: 'Aug 2023 – May 2027',
    location: 'Kattankulathur, Chennai',
    detail: 'CGPA: 9.54',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Merit-Based Scholarship',
    detail: 'Merit-Based 50% Scholarship awarded by the college.',
    image: '/cert-images/scholarship-2025-26.png',
  },
  {
    title: 'Best Project Award',
    detail: 'Best Project Award for showcasing Cloud Infrastructure design and project deployment on AWS using DevOps tools.',
    image: '/cert-images/best-project-award.jpg',
  },
  {
    title: 'DSA & Problem Solving',
    detail: 'Solved 100+ DSA problems on LeetCode, CodeForces and CodeChef, demonstrating strong algorithmic and problem-solving skill.',
  },
]

export const stats = [
  { value: '9.54', label: 'CGPA' },
  { value: '3', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '3', label: 'Achievements' },
]
