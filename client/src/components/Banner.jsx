import React from 'react'
import BannerCard from './../home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-3xl md:text-5xl font-bold leading-snug text-black '>Buy And Sell Your Books <br/><span className='text-sky-800'>For the Best Price</span> </h2>
            <p className='md:w-4/5'>Welcome to our website, where pages come to life and stories unfold! Explore the enchanting world of books at our bookstore, where every shelf beckons with tales of adventure, romance, mystery, and knowledge.</p>
            {/* right side */}
                <div>
                    <input type='search' name='search' id='search' placeholder='Search a Book' className='mt-2 px-2 py-2 rounded-s-sm outline-none rounded-md'/>
                    <button className='bg-gray-600 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 mx-2 rounded-md'>Search</button>
                </div>
            </div>
            <div>
              <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner