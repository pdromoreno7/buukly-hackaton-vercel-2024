'use server'
import { google } from '@ai-sdk/google'
import { generateText } from 'ai'

export async function getTextByModelAi(
  system: string,
  prompt: string,
): Promise<string> {
  try {
    const { text } = await generateText({
      model: google('models/gemini-1.5-pro'),
      system,
      prompt,
    })
    return text
  } catch (error) {
    throw new Error(`Error inesperado en getObjectByModelAi: ${error}`)
  }
}
