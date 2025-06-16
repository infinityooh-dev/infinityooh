export type ContentItemType = {
  title: string;
  slug: string;
};

export type UnorderedListType = { id?: string; title?: string; text?: string };

export type OrderedListType = {
  id?: string;
  title?: string;
  text?: string;
  ul?: UnorderedListType[];
};

export type ItemContentType = ContentItemType & {
  title?: string;
  descriptions?: string[];
  ol?: OrderedListType[];
  content?: { title?: string; description?: string }[];
};

export type LegalPageType = {
  heading: string;
  // tagline: string;
  descriptions: string[];
  version: string;
  // lastUpdated: string;
  body: ItemContentType[];
};
