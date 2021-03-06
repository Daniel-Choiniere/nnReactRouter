import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component {
    state = {
        posts: [ ]
    }
    // needs to be a class based component, functional components can not use life cycle hooks
    // a good place to go out and get external data is in a life cycle hook
    // use this lifecycle hook to go out and grab data once the component has been mounted to the DOM
    componentDidMount() {
        // this function is asynchronous, so it returns a promise (action that will fire once the 'get' has completed)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // need to grab the data we retrieved and save it to our template
            // console.log(res);
            this.setState({
                posts: res.data.slice(0, 10)
            });
        });
    }
    render() {
        // using destructuring to get the posts property from the state
        const { posts } = this.state;
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

export default Home;