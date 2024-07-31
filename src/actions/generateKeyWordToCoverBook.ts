'use server'
import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

import { generateKeyWordToCoverBookPrompt } from '@/lib/promps'
export async function generateKeyWordToCoverBook(title: string): Promise<{
  recipe: { keyWordByTitle: string }
}> {
  try {
    const { object } = await generateObject({
      model: google('models/gemini-1.5-pro'),
      schema: z.object({
        recipe: z.object({
          keyWordByTitle: z.string(),
        }),
      }),
      prompt: generateKeyWordToCoverBookPrompt(title),
    })

    return object
  } catch (error) {
    console.error('Error generando:', error)
    throw new Error('No se pudo generar el objeto')
  }
}
