import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface Chapter {
  chapterTitle: string
  text: string
}

interface BookData {
  bookTitle: string
  bookDescription: string
  bookChapters: string[]
  bookKeyWords: string[]
  chaptersWithContent?: Chapter[]
  colorCoverBook?: string
}

interface BookStore {
  dataEbook: BookData
  setBookData: (data: Partial<BookData>) => void
  setChaptersWithContent: (chapters: Chapter[]) => void
  bookCoverColor: string
  setBookCoverColor: (color: string) => void
}

export const useBookStore = create<BookStore>(set => ({
  dataEbook: {
    bookTitle: '',
    bookDescription: '',
    bookChapters: [],
    bookKeyWords: [],
    chaptersWithContent: [],
    colorCoverBook: '',
  },
  bookCoverColor: '',
  setBookData: (data: Partial<BookData>) =>
    set(state => ({ dataEbook: { ...state.dataEbook, ...data } })),
  setChaptersWithContent: (chapters: Chapter[]) =>
    set(state => ({
      dataEbook: { ...state.dataEbook, chaptersWithContent: chapters },
    })),
  setBookCoverColor: color => set({ bookCoverColor: color }),
}))

interface BookListStore {
  booksList: BookData[]
  addBookToList: (book: BookData) => void
  updateBookInList: (bookTitle: string, updatedBook: Partial<BookData>) => void
}

export const useBookListStore = create(
  persist<BookListStore>(
    set => ({
      booksList: [],
      addBookToList: (book: BookData) =>
        set(state => ({
          booksList: [...state.booksList, book],
        })),
      updateBookInList: (bookTitle: string, updatedBook: Partial<BookData>) =>
        set(state => ({
          booksList: state.booksList.map(book =>
            book.bookTitle === bookTitle ? { ...book, ...updatedBook } : book,
          ),
        })),
    }),
    {
      name: 'book-list-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
