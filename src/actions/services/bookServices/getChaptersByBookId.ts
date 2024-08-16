'use client'
import { createClientSR } from '@/utils/supabase/client'

export async function getChaptersByBookId(bookID: string) {
  const supabase = createClientSR()
  try {
    const resultChapters = await supabase
      .from('book_chapters')
      .select('*')
      .eq('book_id', bookID)

    return resultChapters
  } catch (error) {
    console.error('Error fetching chapters by book ID:', error)
    throw error
  }
}
