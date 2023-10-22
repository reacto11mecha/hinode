import { z, defineCollection } from "astro:content";

const materiSchema = z.object({
  layout: z.string().startsWith("@/layouts/materi").optional(),
  title: z.string(),
  description: z.string(),
  created_at: z.string(),
  isExternal: z.boolean().optional(),
  link: z.string().optional(),
});

const materiCollection = defineCollection({
  schema: materiSchema,
});

export const collections = {
  materi: materiCollection,
};

export type TMateri = z.infer<typeof materiSchema>;
