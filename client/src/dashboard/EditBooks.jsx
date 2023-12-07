import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams()
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFUrl} = useLoaderData()
  
  
  const bookCategories = [
    "Historical Fiction",
    "Fiction",
    "Thriller",
    "Fantasy",
    "Biography",
    "Nonfiction",
    "Finance",
    "Historical",
    "Science Fiction",
    "Programming",
    "Mistery",
    "Horror",
    "Autobiography",
    "Self-Help",
    "Memoir",
    "Children Books",
    "Travel", "Art And Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // Update Book Data
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFUrl
    } 

    // console.log(bookObj)
    // Update Book Data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data);
      // alert("Book Updated")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
          placeholder="Enter Book Name" 
          required 
          type="text" 
          defaultValue={bookTitle}
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
          placeholder="Enter Author Name" 
          required 
          type="text" 
          defaultValue={authorName}
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
          placeholder="Enter Book Image URL" 
          required 
          type="text" 
          defaultValue={imageURL}
        />
        </div>

        {/* Category */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label 
              htmlFor="inputState" 
              value="Book Category" 
            />
          </div>

          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>
        
          </div>
        </div>      
      
        {/* Book Description */}
        <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="bookDescription" 
            value="Book Description" 
          />
        </div>
        <Textarea 
          id="bookDescription" 
          name='bookDescription' 
          placeholder="Write Your Book Description..." 
          required 
          className='w-full'
          rows={6} 
          defaultValue={bookDescription}
        />

      </div>
      
      {/* Book PDF Link */}
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="bookPDFUrl" 
            value="Book PDF URL" 
          />
        </div>
        <TextInput 
          id="bookPDFUrl" 
          name='bookPDFUrl'
          placeholder="Enter Book PDF URL" 
          required 
          type="text" 
          defaultValue={bookPDFUrl}
          />
      </div>

      <Button type="submit" className='mt-5'>
        Update Book
      </Button>

    </form>
    </div>
  )
}

export default EditBooks