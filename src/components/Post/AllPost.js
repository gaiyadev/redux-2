import React, { Component } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts';

class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(reponse => reponse.json())
            .then(data =>
                this.setState({
                    posts: data
                }));
    }

    render() {
        const allPost = this.state.posts.map(post => {
            return (
                <div key={post.id}>
                    <h2> {post.title} </h2>
                    <p> {post.body} </p>

                </div>
            );
        });
        return (
            <div>
                <h1>POST</h1>
                {allPost}
            </div>
        );
    }
}

export default AllPost;