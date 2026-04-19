import React from 'react'

const BookCard = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 bg-gray-100 min-h-screen">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        📚 Select Your Book
      </h1>

      {/* Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700">
          Trending Books
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-4">

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
            
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="book"
              className="h-40 sm:h-44 md:h-48 w-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="p-4 text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                English Literature
              </h3>

              <button className="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base rounded-full hover:bg-blue-700 transition">
                Read
              </button>
            </div>
          </div>

          {/* Repeat Cards */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              alt="book"
              className="h-40 sm:h-44 md:h-48 w-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Science</h3>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base rounded-full hover:bg-blue-700 transition">
                Read
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="book"
              className="h-40 sm:h-44 md:h-48 w-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-2">History</h3>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base rounded-full hover:bg-blue-700 transition">
                Read
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookCard