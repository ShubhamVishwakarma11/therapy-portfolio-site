import React from 'react'

const ThirdSlide = () => {
  return (
    <div className="flex justify-center items-center">
        <div className='w-90% bg-[#fcf6f1] rounded-[2rem] mt-[13vh] mb-[4vh] h-[83vh] flex justify-between gap-12 p-12'>
          <div className="hero-text flex flex-col gap-6 my-12">
            <h3 className='text-lg font-medium'>Built out of frustation</h3>
            <h3 className='text-5xl w-[40rem] font-bold'>Meet the ahead app</h3>
          </div>
          <div className="flex flex-col items-start justify-center gap-8 m-12 p-12">
            <p className='text-lg'>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
            <p className='text-lg'>Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
          </div>
        </div>
    </div>
  )
}

export default ThirdSlide