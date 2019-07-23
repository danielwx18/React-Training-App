"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import {AuthorList} from './AuthorList';

export class Authors extends React.Component{

    render() {
        console.log("authors.js", this.props.authorList);
        return(
            <div>
                <AuthorList authorList = {this.props.authorList} />
            </div>
        );
    }
}

Authors.propTypes = {
    authorList: PropTypes.array.isRequired
};
