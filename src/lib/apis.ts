import fetch from "node-fetch";
import { Entries, Entry, RequireOne } from "~/types";
import { stringify } from "qs";

const endpoints = {
  entries: "https://napochaan.microcms.io/api/v1/entries",
} as const;
const headers = { "X-API-KEY": "3fdae01b-781b-4e04-ab86-432dc5790914" };

type Query = RequireOne<{
  q: string;
  limit: number;
  offset: number;
  orders: string;
}>;

export const getEntries = async (query?: Query): Promise<Entries> => {
  const params = stringify(query);
  const response = await fetch(`${endpoints.entries}?${params}`, { headers });
  return response.json();
};

export const getEntry = async (id: string): Promise<Entry | null> => {
  const response = await fetch(`${endpoints.entries}/${id}`, { headers });
  const entry: Entry = await response.json();

  return entry ? entry : null;
};
