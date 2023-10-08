import { z, defineCollection } from "astro:content";

const materiCollection = defineCollection({
  schema: z.object({
    layout: z.string().startsWith("@/layouts/Presentation"),
    title: z.string(),
    description: z.string(),
    created_at: z.string(),
  }),
});

export const collections = {
  materi: materiCollection,
};
