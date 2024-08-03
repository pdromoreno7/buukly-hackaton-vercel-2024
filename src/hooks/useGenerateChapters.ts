'use client'
import { generateChapterText } from '@/actions/generateObjetcContent'
import { useState, useCallback } from 'react'

interface Chapter {
  chapterTitle: string
  text: string
}

interface UseGenerateChaptersResult {
  generateChapters: (
    chapterTitles: string[],
    bookTitle: string,
    keyWordsTitle: string,
  ) => Promise<Chapter[]>
  currentChapter: string
  progress: number
  error: string | null
}

export function useGenerateChapters(): UseGenerateChaptersResult {
  const [currentChapter, setCurrentChapter] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)

  const generateChapters = useCallback(
    async (
      chapterTitles: string[],
      bookTitle: string,
      keyWordsTitle: string,
    ): Promise<Chapter[]> => {
      const chaptersWithContent: Chapter[] = []
      const failedChapters: string[] = []

      for (let i = 0; i < chapterTitles.length; i++) {
        const chapterTitle = chapterTitles[i]
        setCurrentChapter(chapterTitle)
        setProgress(Math.round((i / chapterTitles.length) * 100))

        try {
          const chapterResult = await generateChapterText(
            chapterTitle,
            bookTitle,
            keyWordsTitle,
          )
          chaptersWithContent.push({
            chapterTitle,
            text: chapterResult.recipe.chapterText,
          })
        } catch (err) {
          console.error(`Error generating chapter "${chapterTitle}":`, err)
          failedChapters.push(chapterTitle)
          setError(`Error al generar el capítulo "${chapterTitle}"`)
        }
      }

      // Retry failed chapters
      for (const failedChapter of failedChapters) {
        setCurrentChapter(`Reintentando: ${failedChapter}`)
        try {
          const chapterResult = await generateChapterText(
            failedChapter,
            bookTitle,
            keyWordsTitle,
          )
          chaptersWithContent.push({
            chapterTitle: failedChapter,
            text: chapterResult.recipe.chapterText,
          })
          setError(null)
        } catch (err) {
          console.error(
            `Failed to generate chapter "${failedChapter}" after retry:`,
            err,
          )
          setError(
            `No se pudo generar el capítulo "${failedChapter}" después de reintentar`,
          )
        }
      }

      setProgress(100)
      setCurrentChapter('')
      return chaptersWithContent
    },
    [],
  )

  return { generateChapters, currentChapter, progress, error }
}
