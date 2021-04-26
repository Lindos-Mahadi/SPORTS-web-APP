import React from 'react';
import NewsList from '../../../widgets/newsList/NewsList';
import Slider from '../../../widgets/newsSlider/Slider';

const NewsMain = () => (
    <div>
        <Slider
            type="featured"
            settings={{dots:false}}
            start={0}
            amount={3}
        />
        <NewsList
            type="cardMain"
            loadMore={true}
            start={3}
            amount={10}
        />
    </div>
)

export default NewsMain;