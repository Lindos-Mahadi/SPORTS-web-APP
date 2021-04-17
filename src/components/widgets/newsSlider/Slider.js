import axios from 'axios'
import React, { Component } from 'react'
import SliderTemplate from './SliderTemplete';

export default class Slider extends Component {

    state={
        news: []
    }

    componentDidMount(){
        axios.get(`http://localhost:3005/articles? start=0&_end=5`)
        .then(response=>{
            this.setState({
                news:response.data
            })
        })
    }

    render() {
        // console.log(this.state.news)
        return (
            <div>
                <SliderTemplate data={this.state.news} />
            </div>
        )
    }
}
