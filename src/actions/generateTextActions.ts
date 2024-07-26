'use server'
import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

import { generateBookTitleAndChaptersPrompt } from '@/lib/promps'
export async function runGeminiObject(query: string): Promise<{
  recipe: { bookTitle: string; bookChapters: string[]; bookKeyWords: string[] }
}> {
  try {
    const { object } = await generateObject({
      model: google('models/gemini-1.5-pro'),
      schema: z.object({
        recipe: z.object({
          bookTitle: z.string(),
          bookChapters: z.array(z.string()),
          bookKeyWords: z.array(z.string()),
        }),
      }),
      prompt: generateBookTitleAndChaptersPrompt(query),
    })

    return object
  } catch (error) {
    console.error('Error generando:', error)
    throw new Error('No se pudo generar el objeto')
  }
}
