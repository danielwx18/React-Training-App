"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/authorActions';
import { Button, Modal } from 'react-bootstrap';
import AuthorStore from '../stores/authorStore';

export class AuthorList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: {
                authorName: ''
            },
            modalShow: false,
            setModalShow: false
        }
        // this.handleChangeName = this.handleChangeName.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.goCreateAuthor = this.goCreateAuthor.bind(this);
    }

    UNSAFE_componentWillMount() {
        AuthorActions.readAuthors();
    }

    //book?
    createAuthorRow(author) {
        //let modalClose = () => this.setState({ modalShow: false });
        return (
            <tr key={author.authorId}>
                <td> {author.authorId} </td>
                <td> {author.authorName} </td>
                <td>
                    <Button variant="primary" onClick={() => this.setState({ setModalShow: true })}>
                        Modal Test
                    </Button>
                    <MyVerticallyCenteredModal
                        show={this.state.modalShow}
                        onHide={() => this.setState({ setModalShow: false })}
                    />
                </td>
            </tr>
        );
    }

    // handleChangeName(event) {
    //     this.setState({ author: { authorName: event.target.value } });
    // }

    // handleSubmit() {
    //     if (this.state.author) {
    //         AuthorActions.updateAuthor(this.state.author, () => {
    //             AuthorActions.readAuthors();
    //         });
    //     } else {
    //         alert('No update!');
    //         AuthorActions.readAuthors();
    //     }
    // }

    goCreateAuthor() {
        // this.props.history.push("/addAuthor");
        window.location = "#/addAuthor";
    }

    render() {
        console.log("AuthorLIst.js", this.props.authorList);
        return (
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authorList.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
                <button onClick={this.goCreateAuthor}>Add author</button>
            </div>
        );
    }

    // UNSAFE_componentWillMount() {
    //     AuthorStore.addChangeListener(this._onAuthorChange.bind(this));
    // }

    // UNSAFE_componentWillUnmount() {
    //     AuthorStore.removeChangeListener(this._onAuthorChange.bind(this));
    // }

    // _onAuthorChange() {
    //     this.setState({
    //         modalShow: false
    //     });
    // }
}

class MyVerticallyCenteredModal extends React.Component {
    render() {
        console.log("in modal", this.props);
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}



AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};



