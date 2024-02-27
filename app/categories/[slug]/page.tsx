import { getData } from '@/app/apiService'
import Image from 'next/image';

export default async function Index() {
  const categories = await getData('TechStack')

  return (
    <div className="grid gap-4 grid-cols-6">
      {categories.map((category) =>(
      <div key={category.publishedAt} className="flex bg-orange-600 text-white rounded-md border-black border-2">
        <p>{category.title}</p>
        <Image src={category.coverImage as string} width='150' height={'150'} alt={category.title}/>
      </div>
      ))}
    </div>
  )
}