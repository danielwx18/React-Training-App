
//import BookApi from '../api/bookApi';
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
import api from './configuration';


//Here add all crud actions for Books

const AuthorsActions = {
   
    readAuthors : function(authorName, cb) {
        if(!authorName) authorName = '';
        let path = "http://localhost:8060/lms/admin/readAllAuthors?authorName=";
        axios
        .get(`${path}${authorName}`)
        .then(response => {
            Dispatcher.dispatch({ actionType: "GET_AUTHORS_BY_NAME", data: response })
            if(cb) cb();
        })
        .catch(err=>{
            console.log({err:err,param:authorName});
        });
    },

    createAuthor : function(author, cb) {
        if(!author) author = {authorName : ''};
        axios
        .post("http://localhost:8060/lms/admin/addAuthors", author)
        .then(response => {
            Dispatcher.dispatch({actionType: "CREATE_AUTHOR", data: response})
            if(cb) cb();
        })
    }, 

    updateAuthor : function(author, cb) {
        axios
        .put("http://localhost:8060/lms/admin/updateAuthors", author)
        .then(response => {
            Dispatcher.dispatch({actionType: "UPDATE_AUTHOR", data: response})
            if(cb) cb();
        })
    },

    deleteAuthor : function(author, cb) {
        axios
        .delete("http://localhost:8060/lms/admin/deleteAuthors", author)
        .then(response => {
            Dispatcher.dispatch({actionType: "DELETE_AUTHOR", data: {}})
            if(cb) cb();
        })
    }
}

module.exports = AuthorsActions;