import { z, defineCollection } from "astro:content";

const materiSchema = z.object({
  layout: z.string().startsWith("@/layouts/materi").optional(),
  title: z.string(),
  description: z.string(),
  created_at: z.string(),
  isExternal: z.boolean().optional(),
  link: z.string().optional(),
});

const galeriSchema = z.object({
  title: z.string(),
  description: z.string(),
  created_at: z.string(),
});

export const collections = {
  materi: defineCollection({
    schema: materiSchema,
  }),
  galeri: defineCollection({
    schema: galeriSchema,
  }),
};

export type TMateri = z.infer<typeof materiSchema>;
export type TGaleri = z.infer<typeof galeriSchema>;
