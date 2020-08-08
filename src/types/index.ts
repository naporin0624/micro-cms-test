export type Entry = {
  id: string;
  title: string;
  body: string;
  image: { url: string };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type Entries = {
  contents: Entry[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type RequireOne<T> = {
  [K in keyof T]: { [K1 in K]: T[K] } & Partial<Omit<T, K>>;
}[keyof T];
