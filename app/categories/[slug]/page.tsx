import { getData } from '@/app/apiService'

export default async function Index() {
  const categories = await getData('TechStack')
  return categories.map((category) => <h1 key={category.publishedAt}>{category.title}</h1>)
}