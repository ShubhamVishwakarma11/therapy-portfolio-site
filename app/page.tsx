import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import SecondSlide from '@/components/SecondSlide/SecondSlide'

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <SecondSlide/>
      <div className='h-[50vh] bg-yellow-200'>Hello there</div>
      <div className='h-[50vh] bg-yellow-200'>Hello there</div>
      <div className='h-[50vh] bg-yellow-200'>Hello there</div>
    </>
  )
}
