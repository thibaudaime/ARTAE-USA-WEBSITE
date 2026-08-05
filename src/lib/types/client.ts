export type ClientType = "individual" | "expat" | "company";

export interface Client {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  type: ClientType;
  country: string;
  locale: "en" | "fr";
  createdAt: string;
  notes?: string;
}
