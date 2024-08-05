'use server'
import {
  BookGenerationResponse,
  BookGenerationSchema,
  KeyWordGenerationResponse,
  KeyWordGenerationSchema,
} from '@/schemas/requestsBook'

import {
  generateBookTitleAndChaptersPrompt,
  generateColorBookPrompt,
  generateKeyWordToCoverBookPrompt,
} from '@/lib/promps'

import { getObjectByModelAi } from './aiObjectGenerators'
import { getTextByModelAi } from './aiTextGenerators'

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

// export async function generateChapterText(
//   chapterTitle: string,
//   bookTitle: string,
//   keyWordsTitle: string,
// ): Promise<ChapterBookResponse> {
//   return getObjectByModelAi(
//     chapterBookSchema,
//     generateChapterTextPrompt(chapterTitle, bookTitle, keyWordsTitle),
//   )
// }

// genera un color basado en el titulo del libro
export async function generateColorBook(bookTitle: string): Promise<string> {
  return getTextByModelAi(bookTitle, generateColorBookPrompt(bookTitle))
}
