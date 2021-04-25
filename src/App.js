import './App.css';
import Posts from './containers/Posts';
import NewPost from './components/NewPost';
import { Route, Link, NavLink } from 'react-router-dom';
import React from 'react';
import FullPost from './components/FullPost';

const app = (props) => {
  console.log(props);

  return (
    <div className="App">
      <nav>
      <Link to="/"><h1>Welcome to the Post app</h1></Link>

      <article>This is a react app example demonstrating how to communicate with a fake server using Axios, 
        use react hooks e.g. useEffect and useState, as well as routing.</article>

        <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
          <li style={{margin: '10px', display: 'inline-block'}}>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li style={{margin: '10px', display: 'inline-block'}}>
            <NavLink to="/new-post">New Post</NavLink>
          </li>
        </ul>
      </nav>
      
      <Route path="/posts" component={Posts} />
      <Route path="/new-post" component={NewPost} />
      <Route path="/post/:id" exact component={FullPost} />
    </div>
  );
}

export default app;
