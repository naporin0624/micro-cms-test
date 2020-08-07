export type Entry = {
  id: string;
  title: string;
  body: string;
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
