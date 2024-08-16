import { createClientSR } from '@/utils/supabase/client'

export async function getBookById(bookID: string) {
  const supabase = createClientSR()
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
