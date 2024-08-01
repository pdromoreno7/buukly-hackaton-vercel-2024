'use server'
import {
  BookGenerationResponse,
  BookGenerationSchema,
  ChapterBookResponse,
  chapterBookSchema,
  KeyWordGenerationResponse,
  KeyWordGenerationSchema,
} from '@/schemas/requestsBook'

import {
  generateBookTitleAndChaptersPrompt,
  generateChapterTextPrompt,
  generateKeyWordToCoverBookPrompt,
} from '@/lib/promps'

import { getObjectByModelAi } from './aiGenerators'

export async function generateDataBookByTitle(
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

export async function generateChapterText(
  chapterTitle: string,
  bookTitle: string,
  keyWordsTitle: string,
): Promise<ChapterBookResponse> {
  return getObjectByModelAi(
    chapterBookSchema,
    generateChapterTextPrompt(chapterTitle, bookTitle, keyWordsTitle),
  )
}
