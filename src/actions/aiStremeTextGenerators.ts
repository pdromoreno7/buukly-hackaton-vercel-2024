'use server'
// import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export async function getStreamTextByModelAi(
  system: string,
  prompt: string,
): Promise<string> {
  let fullText = ''
  try {
    const result = await streamText({
      // model: google('models/gemini-1.5-pro'),
      model: openai('gpt-4o-mini'),
      system,
      prompt,
    })
    for await (const textPart of result.textStream) {
      fullText += textPart
    }
    return fullText
  } catch (error) {
    throw new Error(`Error inesperado en getObjectByModelAi: ${error}`)
  }
}
