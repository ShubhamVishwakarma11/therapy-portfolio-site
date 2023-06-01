import React from 'react'
import {BsApple} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
        <div className='w-90% bg-[#e9e2f7] rounded-[2rem] mt-[13vh] mb-[4vh] h-[83vh] flex items-center p-12'>
          <div className="hero-text flex flex-col gap-6 ">
            <h1 className='text-lg font-medium'>Ahead App</h1>
            <h2 className='text-6xl w-[32rem] font-bold'>Master your life by mastering emotions</h2>
            <div className="flex justify-start items-center gap-12 mt-4">
              <div className="bg-black rounded-md p-1 text-white flex gap-1 justify-between items-center">
                <BsApple className='text-2xl'/>
                <div className="flex flex-col items-center justify-center">
                  <p className='text-xs'>Download on the</p>
                  <p className='text-lg font-semibold'>AppStore</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between gap-2">
                  <AiFillStar className='text-yellow-300 text-xl'/>
                  <AiFillStar className='text-yellow-300 text-xl'/>
                  <AiFillStar className='text-yellow-300 text-xl'/>
                  <AiFillStar className='text-yellow-300 text-xl'/>
                  <AiFillStar className='text-yellow-300 text-xl'/>
                </div> 
                <p>100+ AppStore Reviews</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;