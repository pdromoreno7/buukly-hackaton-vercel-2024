import { create } from 'zustand'

interface BookData {
  bookTitle: string
  bookChapters: string[]
  bookKeyWords: string[]
}

interface BookStore {
  dataEbook: BookData
  setBookData: (data: BookData) => void
}

export const useBookStore = create<BookStore>(set => ({
  dataEbook: { bookTitle: '', bookChapters: [], bookKeyWords: [] },
  setBookData: (data: BookData) =>
    set(state => ({ dataEbook: { ...state.dataEbook, data } })),
}))
