'use server'

import { generateChapterTextPrompt } from '@/lib/promps'
import { FORMAL_EBOOK_SYSTEM_PROMPT } from '@/lib/systems_promps'

import { getStreamTextByModelAi } from './aiStremeTextGenerators'

interface StreamTextResult {
  textStream: AsyncIterable<string>
}

export async function generateChapterText(
  chapterTitle: string,
  bookTitle: string,
  keyWordsTitle: string,
): Promise<StreamTextResult> {
  return getStreamTextByModelAi(
    FORMAL_EBOOK_SYSTEM_PROMPT,
    generateChapterTextPrompt(chapterTitle, bookTitle, keyWordsTitle),
  )
}
