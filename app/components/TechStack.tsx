import React from 'react'
import { getData } from '../apiService'


export default async function TechStack() {
  const categories = await getData('TechStack')
  let randomNum: number = Math.floor(Math.random() * categories.length + 1)

  return (
    <div className="grid gap-4 grid-cols-6">
      {categories.map((category, i) => (        
        <div key={category.publishedAt} 
          className={`flex flex-col bg-orange-600 text-white rounded-md border-black border-2 
          ${i > randomNum ? 'size-64 col-span-2 row-span-2' : (i < randomNum/3 ? 'size-96 col-span-3 row-span-3': 'size-32 col-span-1 row-span-1')}`}>
          <p>{category.title}</p>
          <p>{i}</p>
        </div>
      ))}
    </div>
  )
}