import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsMain from './components/articles/news/main/NewsMain';

import Home from "./components/menu/Home";
import Layout from './hoc/Layout/Layout';



class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={NewsMain}/>
                </Switch>
            </Layout>
           
        )
    }
}

export default Routes;