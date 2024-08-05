import { create } from 'zustand'

interface Chapter {
  chapterTitle: string
  text: string
}

interface BookData {
  bookTitle: string
  bookDescription: string
  bookChapters: string[]
  bookKeyWords: string[]
  chaptersWithContent: Chapter[]
}

interface BookStore {
  dataEbook: BookData
  setBookData: (data: Partial<BookData>) => void
  setChaptersWithContent: (chapters: Chapter[]) => void
}

export const useBookStore = create<BookStore>(set => ({
  dataEbook: {
    bookTitle: '',
    bookDescription: '',
    bookChapters: [],
    bookKeyWords: [],
    chaptersWithContent: [],
  },
  setBookData: (data: Partial<BookData>) =>
    set(state => ({ dataEbook: { ...state.dataEbook, ...data } })),
  setChaptersWithContent: (chapters: Chapter[]) =>
    set(state => ({
      dataEbook: { ...state.dataEbook, chaptersWithContent: chapters },
    })),
}))
