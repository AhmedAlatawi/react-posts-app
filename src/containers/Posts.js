import React, { Component } from 'react';
import Post from '../components/Post';
import FullPost from '../components/FullPost';

import axios from 'axios';

class Posts extends Component {

    state = {
        posts: [],

    };

    componentDidMount() {
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);

                const posts = res.data.slice(0, 4).map((post) => ({ ...post, author: 'Ahmed' }));

                if (this.props.location.state) {
                    posts.unshift(this.props.location.state); // add it as the first post
                }

                this.setState({ posts });
            })
             
    }

    handlePostClicked = (id) => {
        this.props.history.push('post/' + id)
    }

    render() {
        let posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                body={post.body}
                author={post.author}
                clicked={() => this.handlePostClicked(post.id)}
            />
        })

        if (!posts.length) {
            posts = <p>Loading....</p>;
        }

        return (
            <div className="posts">
                <section>
                    <h3>Posts</h3>
                    {posts}
                    <br />
                </section>
            </div>
        )
    }
}

export default Posts;