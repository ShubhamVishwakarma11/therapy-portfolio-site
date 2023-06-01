import React from 'react'
import Carousel from './Carousel'

const SecondSlide = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className="w-90% flex flex-col h-[83vh] mt-[13vh] mb-[4vh]">
            <div className="flex justify-between items-start">
                <h3 className='text-3xl font-semibold'>EQ beats IQ</h3>
                <div className="flex justify-center items-start gap-12">
                    <div className="w-[25rem]"><p className='text-2xl text-gray-600'>
                        People with high emotional intelligence(EQ) 
                        live more fulfilled lives. They tend to be happier 
                        and have healthier relationships.</p>
                    </div>
                    <div className="w-[25rem]"><p className='text-2xl text-gray-600'>
                        They are more successful in their pursuits and
                        make for inspiring leaders. According to science,
                        earn $29k a year.</p>
                    </div>
                </div>
            </div>
            <div className="mt-[16vh]">
                <h2 className='text-5xl font-semibold'>Does this sound familiar...</h2>
            </div>
            <div className="mt-12">
                <div className="h-[15rem] w-[100vw] absolute translate-x-[-50%] left-[50%]">
                    <Carousel />
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default SecondSlide