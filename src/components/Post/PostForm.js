import React, { Component } from 'react';
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/postActions";
import PropTypes from 'prop-types';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        const postData = {
            title: title,
            body: body
        }
        // call action here
        this.props.createPost(postData);
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        const { title, body } = this.state;
        return (
            <div className="FormBody">
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" onChange={this.onChangeHandler} name="title" value={title} />
                    </div>
                    <br />

                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={this.onChangeHandler} value={body} placeholder="enter post"></textarea>
                    </div><br />
                    <button type="submit" >Add Post</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);