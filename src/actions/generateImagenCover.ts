'use server'

import axios from 'axios'

import { generateKeyWordByTitle } from './generateObjetcContent'

const API_KEY = process.env.API_PEXELS_KEY

export async function getImageCover(title: string) {
  try {
    const { recipe } = await generateKeyWordByTitle(title)
    const { keyWordByTitle } = recipe
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${keyWordByTitle}&per_page=1`,
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    )
    return response.data.photos[0].src
  } catch (err) {
    throw new Error('Failed to fetch images')
  }
}
