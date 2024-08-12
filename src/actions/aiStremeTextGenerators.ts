'use server'
// import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

interface StreamTextResult {
  textStream: AsyncIterable<string>
}

export async function getStreamTextByModelAi(
  system: string,
  prompt: string,
): Promise<StreamTextResult> {
  try {
    const result = await streamText({
      // model: google('models/gemini-1.5-pro'),
      model: openai('gpt-4o-mini'),
      system,
      prompt,
    })
    return result
  } catch (error) {
    throw new Error(`Error inesperado en getObjectByModelAi: ${error}`)
  }
}
