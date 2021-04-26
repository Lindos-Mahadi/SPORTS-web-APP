import React, { Component } from 'react'
import './newsList.css';

import { CSSTransition , TransitionGroup } from 'react-transition-group';
import { Link } from  'react-router-dom';
import axios from 'axios';

import {URL} from '../../../config';
import Button from '../Buttons/Button';


class NewsList extends Component {

    state = {
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    componentDidMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) =>{
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response =>{
            this.setState({
                items:[...this.state.items, ...response.data]
            })
            // console.log(response)
        })
    }

    loadMore(){
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }

    renderNews = (type) =>{
        let template = null;

        switch(type){
            case('card'):
                template = this.state.items.map((item, i) =>(
                    <CSSTransition classNames="newsList_wrapper"
                    timeout={500}
                    key={i}
                    >
                        <div>
                            <div className="newslist_item">
                                <Link to={`/articles/${item.id}`}>
                                    Teams
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            default:
                template = null;
        }
        return template;
    }

    render() {
        // console.log(this.state.items)
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    { this.renderNews( this.props.type )}
                </TransitionGroup>
                {/* <div onClick={()=>this.loadMore()}>Load More</div> */}
                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                 />
            </div>
        )
    }
}

export default NewsList;