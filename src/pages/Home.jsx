import React, { useState } from 'react'
import { Button } from 'reactstrap'

const Home = () => {

  const [text, setText] = useState("")

  const handleUppercase = () => {
    setText(text.toUpperCase())
  }
  const handleLowercase = () => {
    setText(text.toLowerCase())
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }
  const handleClear = () => {
    setText("")
  }

  return (
    <div>
      <div className="container-fluid p-5 ">
        <textarea onChange={(e) => {
          setText(e.target.value)
        }} value={text} className='w-100 m-auto' rows="10"></textarea>
        <div className="container mt-3">
          <Button onClick={handleUppercase} className='me-2' color='primary'>UPPERCASE</Button>
          <Button onClick={handleLowercase} className='me-2' color='secondary'>lowercase</Button>
          <Button onClick={handleCopy} className='me-2' color='success'>Copy</Button>
          <Button onClick={handleClear} className='me-2' color='danger'>Clear Text</Button>
          <Button onClick={() => {
            setText(text.split(/[ ]+/).join(" "));
          }} className='me-2' color='danger'>Remove Extra Space</Button>
        </div>
      </div>
    </div>
  )
}

export default Home