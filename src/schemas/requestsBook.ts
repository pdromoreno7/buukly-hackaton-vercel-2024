import { z } from 'zod'

export const BookGenerationSchema = z.object({
  recipe: z.object({
    bookTitle: z.string(),
    bookDescription: z.string(),
    bookChapters: z.array(z.string()),
    bookKeyWords: z.array(z.string()),
  }),
})

export const KeyWordGenerationSchema = z.object({
  recipe: z.object({
    keyWordByTitle: z.string(),
  }),
})
export const chapterBookSchema = z.object({
  recipe: z.object({
    chapterText: z.string(),
  }),
})
export const colorBookSchema = z.string()

export type BookGenerationResponse = z.infer<typeof BookGenerationSchema>
export type KeyWordGenerationResponse = z.infer<typeof KeyWordGenerationSchema>
export type ChapterBookResponse = z.infer<typeof chapterBookSchema>
export type ColorBookResponse = z.infer<typeof colorBookSchema>
