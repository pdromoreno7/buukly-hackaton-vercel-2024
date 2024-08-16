'use client'
import { ChapterSaveType } from '@/interfaces/bookInterfaces'
import { createClientSR } from '@/utils/supabase/client'

export async function saveChaptersBook(
  bookId: string,
  chaptersWithContentResult: ChapterSaveType[],
) {
  const supabase = createClientSR()
  try {
    for (let i = 0; i < chaptersWithContentResult.length; i++) {
      const resultSaveChapter = await supabase.from('book_chapters').insert({
        book_id: bookId,
        chapter_title: chaptersWithContentResult[i]?.chapterTitle,
        chapter_content: chaptersWithContentResult[i]?.text,
        chapter_number: i + 1,
      })

      return resultSaveChapter
    }
  } catch (error) {
    console.error('Error saving chapters:', error)
    throw error
  }
}