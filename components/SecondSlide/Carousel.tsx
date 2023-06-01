import React from 'react'
import Card from './Card'

const Carousel = () => {
  return (
    <div className="w-full h-full flex gap-12 items-center overflow-hidden">
        <Card
            heading="You attend a class reunion" 
            description="You compare yourself with your peers achievements
                        , instead of making your self-judgement more 
                        independent of others." 
            color="#eeeafc"/>
        <Card
            heading="You attend a class reunion" 
            description="You compare yourself with your peers achievements
                        , instead of making your self-judgement more 
                        independent of others." 
            color="#fff0d7"/>
        <Card
            heading="You attend a class reunion" 
            description="You compare yourself with your peers achievements
                        , instead of making your self-judgement more 
                        independent of others." 
            color="#fefbec"/>
    </div>
  )
}

export default Carousel