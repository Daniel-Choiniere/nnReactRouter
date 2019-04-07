import React, { Component } from 'react'
import axios from 'axios'

// we automatically have access to props in class based components
class Post extends Component {
    state = {
        post: null
    }

    // grabs the post_id from the props
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                });
            });
    }
    render() {

        const post = this.state.post ? (
            <div>
                <h4 className="center">{ this.state.post.title }</h4>
                <p>{ this.state.post.body }</p>
            </div>
        ) : (
            <div className="center">Loading Post</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        );
    }
}

export default Post;
