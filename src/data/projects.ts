import {
  GHG1,
  GHG2,
  GHG3,
  GEMMA1,
  GEMMA2,
  GEMMA3,
  TERR1,
  TERR2,
  TERR3,
  TERR4,
  DGA1,
} from '../assets'

export interface Project {
  slug: string
  title: string
  tipo: string
  hero: string
  gallery?: string[]
  shortDescription?: string
  longDescription?: string
  role?: string
  technologies?: string[]
  external?: string
}

export const projects: Project[] = [
  {
    slug: 'ghg-landing',
    title: 'Landing Page GHG',
    tipo: 'Sitio Web',
    hero: GHG1,
    gallery: [GHG1, GHG2, GHG3],
    shortDescription: 'Landing para campaña GHG con foco en conversión.',
    longDescription:
      'Diseñamos y desarrollamos una landing enfocada en conversión, con optimización de rendimiento, animaciones sutiles y un flujo claro para captación de leads.',
    role: 'Diseño y Desarrollo Frontend',
    technologies: ['Vue 3', 'Tailwind', 'Vite'],
    external: ''
  },
  {
    slug: 'gemma-landing',
    title: 'Landing Page Gemma',
    tipo: 'Sitio Web',
    hero: GEMMA1,
    gallery: [GEMMA1, GEMMA2, GEMMA3],
    shortDescription: 'Landing visual para presentación de producto.',
    longDescription:
      'Proyecto centrado en la narrativa visual y la presentación del producto, con secciones de características, testimonios y llamadas a la acción escalables.',
    role: 'Diseño UI / Frontend',
    technologies: ['Vue 3', 'Animation CSS'],
    external: ''
  },
  {
    slug: 'territorial-landing',
    title: 'Landing Page Territorial',
    tipo: 'Sitio Web',
    hero: TERR1,
    gallery: [TERR1, TERR2, TERR3, TERR4],
    shortDescription: 'Plataforma informativa territorial.',
    longDescription:
      'Desarrollo de una landing con recursos geográficos, mapas embebidos y materiales descargables, optimizada para accesibilidad y velocidad.',
    role: 'Frontend / Integración',
    technologies: ['Vue 3', 'Map APIs'],
    external: ''
  },
  {
    slug: 'dga-app',
    title: 'DGA',
    tipo: 'Aplicacion Web',
    hero: DGA1,
    gallery: [DGA1],
    shortDescription: 'Aplicación interna para gestión de datos.',
    longDescription:
      'Aplicación web para administrar procesos internos, con interfaces de datos, filtros avanzados y acceso por roles.',
    role: 'Arquitectura y Frontend',
    technologies: ['Vue 3', 'REST APIs'],
    external: ''
  },
]
