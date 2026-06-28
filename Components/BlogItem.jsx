import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">

      <Link href={`/blogs/${id}`} className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex flex-col flex-1 p-6">

        <span className="inline-block w-fit px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide">
          {category}
        </span>

        <h2 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2 min-h-[60px]">
          {title}
        </h2>

        <p
          className="mt-3 text-gray-600 text-sm leading-6 flex-1 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 150),
          }}
        ></p>

        <Link
          href={`/blogs/${id}`}
          className="mt-6 inline-flex items-center font-semibold text-black group-hover:text-blue-600 transition-colors"
        >
          Read More

          <Image
            src={assets.arrow}
            alt="Arrow"
            width={18}
            height={18}
            className="ml-2 transition-transform group-hover:translate-x-2"
          />
        </Link>

      </div>
    </div>
  )
}

export default BlogItem