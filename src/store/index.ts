import { create } from 'zustand'

interface BookData {
  bookTitle: string
  bookDescription: string
  bookChapters: string[]
  bookKeyWords: string[]
}

interface BookStore {
  dataEbook: BookData
  bookCoverColor: string
  setBookData: (data: BookData) => void
  setBookCoverColor: (color: string) => void
}

export const useBookStore = create<BookStore>(set => ({
  dataEbook: {
    bookTitle: '',
    bookDescription: '',
    bookChapters: [],
    bookKeyWords: [],
  },
  bookCoverColor: '',
  setBookData: (data: BookData) =>
    set(state => ({ dataEbook: { ...state.dataEbook, ...data } })),
  setBookCoverColor: color => set({ bookCoverColor: color }),
}))
