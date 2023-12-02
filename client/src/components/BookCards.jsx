import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './BookCards.css';

// import required modules
import { Pagination } from 'swiper/modules';

import { FaCartShopping } from 'react-icons/fa6'

const BookCards = ({headline, books}) => {
  console.log(books);

  return (
    <div className='my-10 px-4 lg:px-2'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* cards */}
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {
          books.map(book => <SwiperSlide key={book._id}>
            <Link to="/">
              <div className='relative'>
                <img src={book.imageURL} alt=''/>
                <div className='absolute top-3 right-3  bg-yellow-100 hover:bg-slate-400 p-2 rounded'>
                  <FaCartShopping className='w-4'/>
                </div>
              </div>
              <div>
                <div>
                  <h3>{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                </div>
                <div>
                  <p>PKR 1000 </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards