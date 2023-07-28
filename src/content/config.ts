import { z, defineCollection } from "astro:content";

const materiCollection = defineCollection({
  schema: z.object({
    layout: z.string().startsWith("@layouts/Presentation"),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  materi: materiCollection,
};
