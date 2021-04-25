import React from 'react'
import Slider from '../widgets/newsSlider/Slider'
import NewsList from '../widgets/newsList/NewsList'

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
              <NewsList
                type="card"
                loadmore={true}
                start={6}
                amount={3}
               />
        </div>
    )
}
