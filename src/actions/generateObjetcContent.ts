'use server'
import {
  BookGenerationResponse,
  BookGenerationSchema,
  KeyWordGenerationResponse,
  KeyWordGenerationSchema,
} from '@/schemas/requestsBook'

import {
  generateBookTitleAndChaptersPrompt,
  generateKeyWordToCoverBookPrompt,
} from '@/lib/promps'

import { getObjectByModelAi } from './aiGenerators'

export async function generateBookByTitle(
  title: string,
): Promise<BookGenerationResponse> {
  return getObjectByModelAi(
    BookGenerationSchema,
    generateBookTitleAndChaptersPrompt(title),
  )
}

export async function generateKeyWordByTitle(
  title: string,
): Promise<KeyWordGenerationResponse> {
  return getObjectByModelAi(
    KeyWordGenerationSchema,
    generateKeyWordToCoverBookPrompt(title),
  )
}
