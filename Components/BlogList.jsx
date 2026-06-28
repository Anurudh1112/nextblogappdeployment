import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const categories = ["All", "Technology", "Startup", "Lifestyle"]

const BlogList = () => {

  const [menu, setMenu] = useState("All")
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog')
      setBlogs(response.data.blogs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">

        {categories.map((item) => (

          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
              ${
                menu === item
                  ? "bg-black text-white shadow-lg"
                  : "bg-white border border-gray-300 hover:bg-black hover:text-white"
              }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Blog Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs
          .filter((item) =>
            menu === "All" ? true : item.category === menu
          )
          .map((item) => (

            <BlogItem
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />

          ))}

      </div>

    </section>
  )
}

export default BlogList