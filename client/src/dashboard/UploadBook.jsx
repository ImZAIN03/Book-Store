import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


const UploadBook = () => {
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
            htmlFor="bookTitle" 
            value="Book Title" 
          />
        </div>
        <TextInput 
          id="bookTitle" 
          name='bookTitle'
          placeholder="Book Name" 
          required 
          type="text" 
        />
        </div>

        {/* Author Name */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
            htmlFor="authorName" 
            value="Author Name" 
          />
        </div>
        <TextInput 
          id="authorName" 
          name='authorName'
          placeholder="Author Name" 
          required 
          type="text" 
        />
          </div>
        </div>    

        {/* Second Row   */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
            htmlFor="imageURL" 
            value="Book Image URL" 
          />
        </div>
        <TextInput 
          id="imageURL" 
          name='imageURL'
          placeholder="Book Image URL" 
          required 
          type="text" 
        />
        </div>

        {/* Category */}
        <div className='lg:w-1/2'>
        
        
          </div>
        </div>      
      
      
    </form>
    </div>
  )
}

export default UploadBook