'use server'
import { createClientSSR } from '@/utils/supabase/server'

export async function getBookById(bookID: string) {
  const supabase = createClientSSR()
  try {
    const resultBook = await supabase
      .from('user_books')
      .select('*')
      .eq('id', bookID)
      .single()

    return resultBook
  } catch (error) {
    console.error('Error fetching book by ID:', error)
    throw error
  }
}
