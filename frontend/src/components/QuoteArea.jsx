import React, { useState } from 'react'
import './QuoteArea.css'
import Button from './Button'
import axios from 'axios'

const QuoteArea = () => {
  const [quote, setQuote] = useState('Click the button to get a quote!')

  const fetchQuote = async () => {
    try {
      const res = await axios.get('https://quote-generator-cs01.onrender.com/api/random/')
      const data = res.data
      setQuote(`"${data.text}" — ${data.author}`)
    } catch (err) {
      setQuote('Oops, something went wrong. Try again later!')
    }
  }

  return (
    <div className='quote-area'>
      <p>{quote}</p>
      <Button title='Get Quote' onClick={fetchQuote} />
    </div>
  )
}

export default QuoteArea
