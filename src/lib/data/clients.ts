import "server-only";
import type { Client } from "@/lib/types/client";

/**
 * Placeholder data source. Swap the body of these functions for Prisma/Supabase
 * queries later — the exported signatures should not need to change.
 */
const clients: Client[] = [];

export async function getClients(): Promise<Client[]> {
  return clients;
}

export async function getClientById(id: string): Promise<Client | null> {
  return clients.find((client) => client.id === id) ?? null;
}

export async function createClient(
  input: Omit<Client, "id" | "createdAt">,
): Promise<Client> {
  const client: Client = {
    ...input,
    id: `cli_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  clients.push(client);
  return client;
}
