import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    techStack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const competitions = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    award: z.string().optional(),
    team: z.string().optional(),
    organization: z.string().optional(),
    rank: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const courses = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    instructor: z.string().optional(),
    semester: z.string().optional(),
    grade: z.string().optional(),
    credits: z.number().optional(),
    textbook: z.string().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default("Sun Lu"),
  }),
});

export const collections = { projects, competitions, courses, blog };
