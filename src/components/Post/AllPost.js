import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../redux/actions/postActions'; //importing my action
import PropTypes from 'prop-types';

class AllPost extends Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const allPost = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h2> {post.title} </h2>
                    <p> {post.body} </p>
                </div>
            );
        });
        return (
            <div>
                <h1>ALL POST</h1>
                {allPost}
            </div>
        );
    }
}

AllPost.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//getting state from redux and mapping to this component
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPost })(AllPost);



