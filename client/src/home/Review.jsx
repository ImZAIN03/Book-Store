import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import proPic from '../assets/profile.jpg';

const Review = () => {
  const reviews = [
    {
      stars: 5,
      content:
        "I stumbled upon this book website, and it has become my literary sanctuary. The user-friendly interface makes browsing a joy, and the extensive collection caters to all tastes. From classic literature to the latest releases, the website has it all.",
      author: 'Claire Parkins',
      role: 'Author',
    },
    {
      stars: 5,
      content:
        "I've been a loyal customer of this book website for years, and their exceptional service keeps me coming back. The website's interface is clean and easy to navigate, providing a hassle-free shopping experience.",
      author: 'Anna Hopkins',
      role: 'Critic',
    },
    {
      stars: 5,
      content:
        "This website is a dream come true for any avid reader. The layout is intuitive, making it easy to explore diverse genres and discover new authors. The search and filter options are robust, ensuring I find exactly what I'm looking for.",
      author: 'Emma Clark',
      role: 'Teacher',
    },
  ];

  return (
    <div className='my-12 px-4 lg:px-14'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'
          >
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                {[...Array(review.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <div className='mt-3'>
              <p className='mb-5 font-semibold'>{review.content}</p>
              <Avatar img={proPic} alt='avatar of Customer' className='w-10 mb-4' />
              <h5 className='text-lg font-medium'>{review.author}</h5>
              <p className='text-base font-medium'>{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
