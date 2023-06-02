import React from 'react'
import List from './List'

const FourthSlide = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className="w-90% flex flex-col h-full mt-[10vh] mb-[4vh]">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Wrong with self-improvement & how we're fixing it.</h3>
                <h3 className='text-6xl font-bold'>Self-improvement. Ugh.</h3>
            </div>
            <div className="flex justify-center items-center p-12">
                <List/>
            </div>
        </div>
    </div>
  )
}

export default FourthSlide