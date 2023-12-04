import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books/")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here:</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book => (
          <Card key={book.id} className='flex flex-col h-full bg-slate-50'>
            <img src={book.imageURL} alt='Book Cover' className='h-96 object-cover' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
              {book.bookTitle}
            </h5>
            <p className="font-semibold text-gray-700 dark:text-gray-400 mt-2 flex-grow">
              {book.bookDescription}
            </p>
            <button className='bg-sky-700 text-white font-semibold py-2 rounded-md mt-4'>Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
