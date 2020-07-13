import React, { Component } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts';

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
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(post => console.log(post))
            .catch(err => console.log(err));
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

export default PostForm;