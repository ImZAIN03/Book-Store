import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();
  
  return (
    <div className='mt- px-4 lg:px-24 flex flex-col items-center justify-center h-screen bg-gray-100'>
      <img src={imageURL} alt='images' className='h-96' />
      <h2 className='mt-4 font-bold text-2xl'>{bookTitle}</h2>
      <p className='mt-4 mx-2 font-semibold text-xl'>{bookDescription}</p>
    </div>
  );
}

export default SingleBook;
