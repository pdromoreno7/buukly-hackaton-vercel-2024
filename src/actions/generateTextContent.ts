'use server'

import { generateChapterTextPrompt } from '@/lib/promps'
import { FORMAL_EBOOK_SYSTEM_PROMPT } from '@/lib/systems_promps'

import { getTextByModelAi } from './aiTextGenerators'

export async function generateChapterText(
  chapterTitle: string,
  bookTitle: string,
  keyWordsTitle: string,
): Promise<string> {
  return getTextByModelAi(
    FORMAL_EBOOK_SYSTEM_PROMPT,
    generateChapterTextPrompt(chapterTitle, bookTitle, keyWordsTitle),
  )
}
