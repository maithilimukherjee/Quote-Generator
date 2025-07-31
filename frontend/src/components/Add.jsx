import React, { useState } from 'react'
import Button from './Button'
import './Add.css'
import axios from 'axios'

const Add = () => {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const addQuote = async () => {
    if (!text.trim()) {
      alert('Quote text cannot be empty!')
      return
    }

    try {
      await axios.post('http://localhost:8000/api/quotes/', {
        text,
        author: author || 'Anonymous'
      })
      alert('Quote added successfully!')
      setText('')
      setAuthor('')
    } catch (error) {
      console.error(error)
      alert('Failed to add quote. Try again later.')
    }
  }

  return (
    <div className='add'>
      <hr />
      <p>
        Have a quote on your mind? Add it below and we will display it on our page!
      </p>

      <div className='add-inputs'>
        <input
          type="text"
          placeholder="Enter your quote here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <Button title='Submit' onClick={addQuote} />
    </div>
  )
}

export default Add
