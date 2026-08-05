export type ProjectStatus =
  | "sourcing"
  | "renovation"
  | "furnishing"
  | "leased"
  | "completed";

export type PropertyType = "single-family" | "multi-family" | "condo" | "townhouse";

export interface ProjectFinancials {
  acquisitionPrice: number;
  renovationBudget: number;
  monthlyRent: number;
  grossYield: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  city: string;
  state: string;
  propertyType: PropertyType;
  status: ProjectStatus;
  clientId?: string;
  coverImage: string;
  gallery: string[];
  financials: ProjectFinancials;
  description: string;
  featured: boolean;
  createdAt: string;
}
