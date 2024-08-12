'use client'
import { generateChapterText } from '@/actions/generateTextContent'
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
  counterChapters: number
  totalChapters: number
  error: string | null
}

export function useGenerateChapters(): UseGenerateChaptersResult {
  const [currentChapter, setCurrentChapter] = useState<string>('')
  const [counterChapters, setCounterChapters] = useState<number>(0)
  const [totalChapters, setTotalChapters] = useState<number>(0)
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
      setTotalChapters(chapterTitles.length)

      for (let i = 0; i < chapterTitles.length; i++) {
        setCounterChapters(i)
        const chapterTitle = chapterTitles[i]
        setCurrentChapter(chapterTitle)
        setProgress(Math.round((i / chapterTitles.length) * 100))

        try {
          const chapterTextResult = await generateChapterText(
            chapterTitle,
            bookTitle,
            keyWordsTitle,
          )
          chaptersWithContent.push({
            chapterTitle,
            text: chapterTextResult,
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
          const chapterTextResult = await generateChapterText(
            failedChapter,
            bookTitle,
            keyWordsTitle,
          )
          chaptersWithContent.push({
            chapterTitle: failedChapter,
            text: chapterTextResult,
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
      setCounterChapters(chapterTitles.length)
      setProgress(100)
      setCurrentChapter('Capitulos generados')
      return chaptersWithContent
    },
    [],
  )

  return {
    generateChapters,
    currentChapter,
    progress,
    counterChapters,
    totalChapters,
    error,
  }
}
