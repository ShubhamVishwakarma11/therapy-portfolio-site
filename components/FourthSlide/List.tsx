'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {BsCircleFill} from 'react-icons/bs'
import clsx from 'clsx';

const UIComponent = () => {
  const data = [
    {   
        heading: 'Old habits are hard to break', 
        subheading: 'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.'
    },
    {   
        heading: "You and your motivation don't have a long-term relationship.", 
        subheading: 'Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.'
    },
    {   
        heading: "Books just don't offer practical", 
        subheading: "Remember wehen you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action."
    },
    {   
        heading: "Inspiration is great, but then what.", 
        subheading: "We make sure your energy from all the content you consume does not fizzle out."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeItemRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(scrollInterval);
  }, [data.length]);


  return (
    <div className="flex items-center">
      <div className="w-2 h-full" />
      <div className="ml-4 overflow-y-scroll">
        <div className="" ref={containerRef}>
          {data.map((item, index) => (
            <motion.div
              className={`p-4 pl-[4rem] mb-4 w-[45rem] flex flex-col gap-2`}
              key={index}
              initial={{ opacity: 0}}
              animate={{
                opacity: index === currentIndex ? 1 : 0.3
              }}
              transition={{ duration: 0.5 }}
              ref={index === currentIndex ? activeItemRef : null}
            >
                    <div className="flex items-center relative">
                        <div className="m-4 absolute -left-12">
                            <BsCircleFill className={clsx(`${index === currentIndex ? "text-[#7557e9]" : "text-[#cec2f6]"}`)}/>
                        </div>
                        <h2
                            className={`${index === currentIndex ? 'text-black' : 'text-gray-500'} w-[25rem] text-xl font-semibold`}
                        >
                            {item.heading}
                        </h2>
                    </div>
                    
                    <h3
                        className={`${index === currentIndex ? 'text-black' : 'text-gray-500'} text-md font-medium`}
                    >
                        {item.subheading}
                    </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIComponent;
