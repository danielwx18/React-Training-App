"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from './header.js';
import {Home} from './home.js';
import {Authors} from './authors.js';
import addAuthor from './addAuthor';
import AuthorStore from '../stores/authorStore';


export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            authorList:[]
        };
    }

    render() {
        console.log("app.js - authorList",this.state.authorList);
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/authors' render={(props) => (<Authors {...props} authorList={this.state.authorList} />)}/>
                    <Route path='/addAuthor' component={addAuthor} />
                </Switch>
            </div>
        );
    }

    UNSAFE_componentWillMount(){
        AuthorStore.addChangeListener(this._onAuthorChange.bind(this));
    }

    componentWillUnmount(){
        AuthorStore.removeChangeListener(this._onAuthorChange.bind(this));
    }

    _onAuthorChange(){
        this.setState({authorList: AuthorStore.getAllAuthors()});
    }
}