import axios from 'axios'
import React, { Component } from 'react'
import SliderTemplates from './SliderTemplete'

class Slider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){
        axios.get(`http://localhost:3005/articles?_start=0&_end=5`)
        .then( response => {
            this.setState({
                news:response.data 
            })
        })
    }

    render() {
        console.log(this.state.news)
        return (
            <div>
                {/* <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings} /> */}
            {/* slider */}
            <SliderTemplates data={this.state.news} type="featured" />
            </div>
        )
    }
}
export default Slider;