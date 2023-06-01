import clsx from 'clsx'
import React from 'react'

type CardProps = {
    heading: string,
    description: string,
    color: string
}

const Card = ({heading, description, color} : CardProps) => {
  return (
    <div 
        style={{backgroundColor: color}} 
        className="flex flex-col justify-center gap-4 p-6 items-start rounded-lg w-[20rem] h-[14rem]">
        <span className='text-4xl'>&#x1F609;</span>
        <div className="flex flex-col justify-center items-start gap-2">
            <h5 className='text-lg font-semibold'>{heading}</h5>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default Card