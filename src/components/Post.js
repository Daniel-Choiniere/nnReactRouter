import React, { Component } from 'react'

// we automatically have access to props in class based components
class Post extends Component {
    state = {
        id: null
    }
    
    componentDidMount() {
        let id = this.props.match.params.post_id
        this.setState({
            id:id
        });
    }
    render() {
        return (
            <div className="container">
                <h4>{ this.state.id }</h4>
            </div>
        );
    }
}

export default Post;