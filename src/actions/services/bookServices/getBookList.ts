import { createClientSR } from '@/utils/supabase/client'

export async function getBookList() {
  const supabase = createClientSR()
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error('User not authenticated')
    }

    const dataResult = await supabase
      .from('user_books')
      .select('*')
      .eq('user_id', user.id)

    return dataResult
  } catch (error) {
    console.error('Error getting book list:', error)
    throw error
  }
}
