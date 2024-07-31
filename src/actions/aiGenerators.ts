'use server'
import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

export async function getObjectByModelAi<T extends z.ZodType>(
  schema: T,
  prompt: string,
): Promise<z.infer<T>> {
  try {
    const { object } = await generateObject({
      model: google('models/gemini-1.5-pro'),
      schema,
      prompt,
    })

    return object
  } catch (error) {
    console.error('Error generando:', error)
    throw new Error('No se pudo generar el objeto')
  }
}
