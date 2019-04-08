import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        console.log(this.props);
        
        // using destructuring to get the posts property from the state
        const { posts } = this.props;
        const postList = posts.length ? (
            // cycle through the posts and
            posts.map(post => {
                // return a snippet of JSX for each post
                return (
                    <div className="post card" key= { post.id }>
                        <img src={ Pokeball } alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={ '/' + post.id }> 
                                <span className="card-title red-text">{ post.title }</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                    );
            })
            ) : (
                <div className="center">No Posts Yet!</div>
                );
        
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                { postList }
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    };
};

// connect the Home componenet to the Redux store
// when we connect to Redux, it knows what data we want to grab from Redux and the property we want to create in our prop object (i.e posts)
export default connect(mapStatetoProps)(Home);