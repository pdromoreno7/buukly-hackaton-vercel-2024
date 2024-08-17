'use server'
import { createClientSSR } from '@/utils/supabase/server'

export async function deleteBook(bookId: string) {
  const supabase = createClientSSR()
  try {
    const result = await supabase
      .from('books') // Asume que tu tabla se llama 'books'
      .delete()
      .eq('id', bookId)

    return result
  } catch (error) {
    console.error('Error al eliminar el libro:', error)
    return { success: false, message: 'Error al eliminar el libro' }
  }
}
