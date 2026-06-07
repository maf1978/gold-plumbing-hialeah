import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    titleEs: z.string(),
    slug: z.string(),
    targetKeyword: z.string(),
    hook: z.string(),
    hookEs: z.string(),
    intro: z.string(),
    introEs: z.string(),
    problemStatement: z.string(),
    problemStatementEs: z.string(),
    included: z.array(z.string()),
    includedEs: z.array(z.string()),
    signsYouNeed: z.array(z.string()),
    signsYouNeedEs: z.array(z.string()),
    processSteps: z
      .array(
        z.object({
          title: z.string(),
          titleEs: z.string(),
          description: z.string(),
          descriptionEs: z.string(),
        })
      )
      .length(4),
    whyUs: z.array(z.string()),
    whyUsEs: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        questionEs: z.string(),
        answer: z.string(),
        answerEs: z.string(),
      })
    ),
    seoTitle: z.string().max(70),
    seoDescription: z.string().max(160),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const locationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    city: z.string(),
    cityEs: z.string().optional(),
    state: z.string(),
    slug: z.string(),
    zipCodes: z.array(z.string()),
    localHook: z.string(),
    localHookEs: z.string(),
    localBody: z.string(),
    localBodyEs: z.string(),
    nearbyAreas: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        questionEs: z.string(),
        answer: z.string(),
        answerEs: z.string(),
      })
    ),
    seoTitle: z.string().max(70),
    seoDescription: z.string().max(160),
  }),
});

export const collections = {
  services: servicesCollection,
  locations: locationsCollection,
};
