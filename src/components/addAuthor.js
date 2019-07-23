import React from 'react';
import AuthorActions from '../actions/authorActions';
import { Form, Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class addAuthor extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            author: {
                authorName: ''
            }
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (this.state.author.authorName) {
            AuthorActions.createAuthor(this.state.author, ()=>{
                this.props.history.push('/authors');
            });            
        } else {
            alert('Something is wrong!');
            this.props.history.push('/');
        }

        event.preventDefault();
        event.stopPropagation();
    }

    handleChangeName(event) {
        this.setState({ author: { authorName: event.target.value } });
    }

    render() {
        console.log("addAuthor - rendering");
        return (

            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formAuthorName">
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter author name" value={this.state.author.authorName} onChange={this.handleChangeName} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(addAuthor);