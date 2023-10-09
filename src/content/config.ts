import { z, defineCollection } from "astro:content";

const materiCollection = defineCollection({
  schema: z.object({
    layout: z.string().startsWith("@/layouts/materi").optional(),
    title: z.string(),
    description: z.string(),
    created_at: z.string(),
    isExternal: z.boolean().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  materi: materiCollection,
};
