import { z } from 'zod'
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '*.md'
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',

      schema: z.object({
          title: z.string(),
          description: z.string().optional(),
          publishedAt: z.string()
        
    })
  })

  }
})