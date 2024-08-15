'use server'
// import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { z } from 'zod'

export async function getObjectByModelAi<T extends z.ZodType>(
  schema: T,
  prompt: string,
): Promise<z.infer<T>> {
  try {
    const { object } = await generateObject({
      // model: google('models/gemini-1.5-pro'),
      model: openai('gpt-4o-mini'),
      schema,
      prompt,
    })
    return object
  } catch (error) {
    throw new Error(`Error inesperado en getObjectByModelAi: ${error}`)
  }
}
