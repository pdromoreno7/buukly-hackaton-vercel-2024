'use server'
import { createClientSSR } from '@/utils/supabase/server'

export async function deleteBook(bookId: string) {
  const supabase = createClientSSR()
  try {
    const { error } = await supabase
      .from('user_books')
      .delete()
      .eq('id', bookId)

    return error
  } catch (error) {
    console.error('Error al eliminar el libro:', error)
    return { success: false, message: 'Error al eliminar el libro' }
  }
}
