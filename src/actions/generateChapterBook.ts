import { generateChapterText } from './generateObjetcContent'

export async function generateAllChaptersContent(
  chapterTitles: string[],
  bookTitle: string,
  keyWordsTitle: string,
): Promise<{ chapterTitle: string; text: string }[]> {
  const chaptersWithContent = []

  for (const chapterTitle of chapterTitles) {
    const chapterText = await generateChapterText(
      chapterTitle,
      bookTitle,
      keyWordsTitle,
    )
    chaptersWithContent.push({
      chapterTitle,
      text: chapterText.recipe.chapterText,
    })
  }

  return chaptersWithContent
}
