import React, { useState } from 'react'

const Work = () => {
     const [clicked, setclicked] = useState("show clicked")
      const handleclick = () => {
        setclicked("unclicked")
      }
  return (
    <div>
         <button onClick={handleclick} className='bg-red-400 text-white p-4 '>{clicked}</button>
      
    </div>
  )
}

export default Work
