import { create } from 'zustand'

interface BookData {
  bookTitle: string
  bookDescription: string
  bookChapters: string[]
  bookKeyWords: string[]
}

interface BookStore {
  dataEbook: BookData
  setBookData: (data: BookData) => void
}

export const useBookStore = create<BookStore>(set => ({
  dataEbook: {
    bookTitle: '',
    bookDescription: '',
    bookChapters: [],
    bookKeyWords: [],
  },
  setBookData: (data: BookData) =>
    set(state => ({ dataEbook: { ...state.dataEbook, ...data } })),
}))
