export interface BookType {
  id: string
  user_id: string
  created_at: string
  book_title: string
  book_description: string
  chapters: string[]
  last_read_chapter: string | null
  is_favorite: boolean
  status: string
  color_cover: string
}
export interface BookSaveTyp {
  book_title: string
  book_description: string
  chapters: string[]
  color_cover: string
}

export interface ChapterType {
  id: string
  book_id: string
  created_at: string
  chapter_title: string
  chapter_content: string
  chapter_number: number
}
export interface ChapterSaveType {
  chapterTitle: string
  text: string
}
