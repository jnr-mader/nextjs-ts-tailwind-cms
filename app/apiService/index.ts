import { getDocuments } from 'outstatic/server'

export async function getData(targetCategory: string) {
  const data = getDocuments(targetCategory, ['title', 'publishedAt', 'slug'])
  return data
}