import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reference = z.object({
  id: z.number(),
  author: z.string(),
  title: z.string(),
  publisher: z.string().optional(),
  year: z.number().optional(),
  url: z.string().optional(),
  type: z
    .enum(["book", "article", "journal", "report", "document", "website"])
    .optional(),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    order: z.number().optional(),
  }),
});

const glosarium = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glosarium" }),
  schema: z.object({
    term: z.string(),
    category: z.string().optional(),
    source: z.string().optional(),
  }),
});

const tokoh = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tokoh" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    period: z.string().optional(),
    region: z.string().optional(),
    references: z.array(reference).optional(),
  }),
});

const sejarah = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sejarah" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    period: z.string().optional(),
    references: z.array(reference).optional(),
  }),
});

const wilayah = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wilayah" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    ibukota: z.string(),
    suku: z.array(z.string()),
    order: z.number().optional(),
    references: z.array(reference).optional(),
  }),
});

export const collections = { faq, glosarium, tokoh, sejarah, wilayah };
