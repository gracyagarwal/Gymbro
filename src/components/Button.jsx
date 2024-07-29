import React from 'react'

export default function Button(props) {
    const {text, func} = props
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border bg-[#D6C8E0]
        border-[#D6C8E0] border-solid buttonShadow 
        duration-200'>
            <p className='text-[#1F2937]'>{text}</p>
        </button>
  )
}
