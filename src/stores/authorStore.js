import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _authorStore = {
    authors: []
};

class AuthorStoreClass extends EventEmitter {

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getAllAuthors() {
        return _authorStore.authors;
    }

}

const AuthorStore = new AuthorStoreClass();

Dispatcher.register((action) => {

    switch (action.actionType) {
        case "GET_AUTHORS_BY_NAME":
            _authorStore.authors = action.data.data;
            console.log("store",_authorStore.authors);
            AuthorStore.emitChange();   
            break;
        case "CREATE_AUTHOR":
            _authorStore.authors = action.data.data;
            AuthorStore.emitChange();
            break;
        case "UPDATE_AUTHOR":
            _authorStore.authors = action.data.data;
            AuthorStore.emitChange();
            break;
        case "DELETE_AUTHOR":
            _authorStore.authors = {};
            AuthorStore.emitChange();
            break;
        default:
            return;
    }
});

export default AuthorStore;