'use server'
import {
  BookGenerationResponse,
  BookGenerationSchema,
  // ChapterBookResponse,
  // chapterBookSchema,
  ColorBookResponse,
  colorBookSchema,
  KeyWordGenerationResponse,
  KeyWordGenerationSchema,
} from '@/schemas/requestsBook'

import {
  generateBookTitleAndChaptersPrompt,
  // generateChapterTextPrompt,
  generateColorBookPrompt,
  generateKeyWordToCoverBookPrompt,
} from '@/lib/promps'

import { getObjectByModelAi } from './aiObjectGenerators'

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
export async function generateColorBook(
  bookTitle: string,
): Promise<ColorBookResponse> {
  return getObjectByModelAi(colorBookSchema, generateColorBookPrompt(bookTitle))
}
