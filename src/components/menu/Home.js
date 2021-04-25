import React from 'react'
import Slider from '../widgets/newsSlider/Slider'

export default function Home() {
    return (
        <div>
            <Slider
             type="featured"
             start={0}
             amount={5}
             settings={{
                 dots:false
             }}
              />
        </div>
    )
}
