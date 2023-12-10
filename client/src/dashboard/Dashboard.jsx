import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt='Favourite Image' className='rounded-md md:w-10/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-sky-700'>Books Here...</span></h2>
            <p className='mb-10 text-lg md:w-5/6 font-medium'>Welcome to our special bookstore, where the wonderful world of books meets a classy atmosphere. We've carefully chosen each book in our collection to give you a variety of interesting things to read and enjoy.</p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>500+</h3>
                    <p className='text-base font-semibold'>Book Listings</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1000+</h3>
                    <p className='text-base font-semibold'>Registered Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1500+</h3>
                    <p className='text-base font-semibold'>PDF Downloads</p>
                </div>
            </div>

            <Link to='/shop' className='mt-12 block'><button className='bg-sky-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-100'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default Dashboard