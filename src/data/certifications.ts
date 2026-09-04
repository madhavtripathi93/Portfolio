import type { Certification } from './types'
import { certLinks } from './links'

// Order: best (professional cert) on top, worst (course) on bottom
export const certifications: Certification[] = [
  {
    id: 'salesforce-agentforce',
    title: 'Salesforce Agentforce Specialist',
    issuer: 'Salesforce',
    date: 'Dec 2025',
    category: 'salesforce',
    image: '/cert-images/salesforce-agentforce.png',
    file: '/certificates/salesforce-agentforce.pdf',
    credentialId: 'Cert7300404',
    verifyUrl: certLinks.salesforceAgentforce || undefined,
    featured: true,
  },
  {
    id: 'nptel-ml',
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL · IITs',
    date: '2025',
    category: 'nptel',
    image: '/cert-images/nptel-ml.png',
    file: '/certificates/nptel-ml.pdf',
    verifyUrl: certLinks.nptelML || undefined,
    featured: true,
  },
  {
    id: 'intro-dbms',
    title: 'Introduction to Database Systems',
    issuer: 'Course Certificate',
    date: '2025',
    category: 'course',
    image: '/cert-images/intro-dbms.png',
    file: '/certificates/intro-dbms.pdf',
    verifyUrl: certLinks.introDBMS || undefined,
  },
]
