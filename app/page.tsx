import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <div className='h-[50vh] bg-yellow-200'>Hello there</div>
      <div className='h-[50vh] bg-yellow-200'>Hello there</div>
      <div className='h-[50vh] bg-yellow-200'>Hello there</div>
    </>
    
  )
}
