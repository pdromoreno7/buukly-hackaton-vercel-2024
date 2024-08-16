'use client'
import { BookSaveTyp } from '@/interfaces/bookInterfaces'
import { createClientSR } from '@/utils/supabase/client'

export async function saveNewBook(dataSend: BookSaveTyp) {
  const supabase = createClientSR()
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error('User not authenticated')
    }

    const resultSaveBook = await supabase
      .from('user_books')
      .insert({
        user_id: user.id,
        book_title: dataSend?.book_title,
        book_description: dataSend?.book_description,
        chapters: dataSend?.chapters,
        color_cover: dataSend?.color_cover,
      })
      .select()
      .single()

    return resultSaveBook
  } catch (error) {
    console.error('Error saving book:', error)
    throw error
  }
}
