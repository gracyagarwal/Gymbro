import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10
    items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>IT'S TIME TO BECOME A</p>
            <h1 className='uppercase font-semibold text-5xl
            sm:text-6xl md:text-7xl 
            lg:text-8xl'>Gym<span className='text-[#1F2937]'>bro</span></h1>
        </div>
        <p className='text-sm md:text-base font-medium'>Meet Gymbro: Your ultimate gym buddy for <span className='text-[#1F2937] font-semibold'>personalized</span> workout plans. 
        <span className='text-[#1F2937] font-semibold'> Tailored exercises</span> and constant <span className='text-[#1F2937] font-semibold'>motivation</span>—Gymbro helps you crush your fitness goals. 
        Let’s get fit together!</p>
        <Button func={()=>{
            window.location.href = '#generate'
        }} text={"Begin"} />
    </div>
  )
}
