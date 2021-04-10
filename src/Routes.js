import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import Home from './components/menu/Home';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Routes path="/" exact component={Home} />
            </Switch>
        )
    }
}