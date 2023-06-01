"use client";

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <nav 
      className={clsx(
        'bg-white flex justify-center pt-1 items-center w-full transition-all fixed', 
        `${isScrolled && "h-[4.5rem]"}`,
        `${!isScrolled && "h-[6rem]"}`)}>
            <div className='w-90% px-8 flex justify-between items-center'>
              <div className="">
                <Image src={!isScrolled ? "/ufo1.png" : "/ufo2.png"} width={64} height={64} alt="logo" />
              </div>
              <ul className="flex justify-between items-center gap-10">
                <li><Link href="/">Emotions</Link></li>
                <li><Link href="/">Manifesto</Link></li>
                <li><Link href="/">Self-awareness test</Link></li>
                <li><Link href="/">Work with us</Link></li>
              </ul>
              <button className='bg-black text-white px-6 py-3 rounded-full'>Download app</button>
            </div>
    </nav>
  )
}

export default NavBar