'use server'
import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'

export async function getObjectByModelAi<T extends z.ZodType>(
  schema: T,
  prompt: string,
  options: {
    maxRetries?: number
  } = {},
): Promise<z.infer<T>> {
  const { maxRetries = 1 } = options
  let retries = 0

  while (retries < maxRetries) {
    try {
      const { object } = await generateObject({
        model: google('models/gemini-1.5-pro'),
        schema,
        prompt,
      })
      return object
    } catch (error) {
      console.error(`Intento ${retries + 1} fallido:`, error)
      retries++

      if (retries >= maxRetries) {
        console.error('Número máximo de intentos alcanzado. Lanzando error.')
        throw new Error(
          'No se pudo generar el objeto después de múltiples intentos',
        )
      }

      await new Promise(resolve =>
        setTimeout(resolve, 1000 * Math.pow(2, retries)),
      )
    }
  }

  throw new Error('Error inesperado en getObjectByModelAi')
}
