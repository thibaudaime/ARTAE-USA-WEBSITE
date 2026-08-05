import "server-only";
import type { Project } from "@/lib/types/project";

/**
 * Placeholder data source. Swap the body of these functions for Prisma/Supabase
 * queries later — the exported signatures should not need to change.
 */
const projects: Project[] = [
  {
    id: "prj_001",
    slug: "hollywood-duplex",
    title: "Hollywood Duplex Renovation",
    city: "Hollywood",
    state: "FL",
    propertyType: "multi-family",
    status: "leased",
    coverImage: "/images/placeholder-project-1.jpg",
    gallery: [],
    financials: {
      acquisitionPrice: 385000,
      renovationBudget: 62000,
      monthlyRent: 3400,
      grossYield: 9.1,
    },
    description:
      "Full turnkey acquisition, renovation and lease-up of a two-unit property near Hollywood Beach.",
    featured: true,
    createdAt: "2025-02-10",
  },
  {
    id: "prj_002",
    slug: "lauderhill-single-family",
    title: "Lauderhill Single-Family Flip-to-Rent",
    city: "Lauderhill",
    state: "FL",
    propertyType: "single-family",
    status: "leased",
    coverImage: "/images/placeholder-project-2.jpg",
    gallery: [],
    financials: {
      acquisitionPrice: 310000,
      renovationBudget: 45000,
      monthlyRent: 2650,
      grossYield: 8.9,
    },
    description:
      "Complete interior renovation and furnishing of a single-family home, delivered tenant-ready.",
    featured: true,
    createdAt: "2025-04-22",
  },
  {
    id: "prj_003",
    slug: "fort-lauderdale-condo",
    title: "Fort Lauderdale Condo Conversion",
    city: "Fort Lauderdale",
    state: "FL",
    propertyType: "condo",
    status: "furnishing",
    coverImage: "/images/placeholder-project-3.jpg",
    gallery: [],
    financials: {
      acquisitionPrice: 275000,
      renovationBudget: 38000,
      monthlyRent: 2400,
      grossYield: 9.3,
    },
    description:
      "Mid-rise condo acquired for a French-speaking expat investor, currently in the furnishing phase.",
    featured: true,
    createdAt: "2025-07-05",
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((project) => project.slug === slug) ?? null;
}
