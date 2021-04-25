import axios from 'axios';
import React, { useState } from 'react';

const NewPost = React.memo(props => {

    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('Mike');

    const postDataHandler = () => {
        if (!enteredTitle) {
            alert('Title is required!');
            return;
        }

        if (!enteredBody) {
            alert('Body is required!');
            return;
        }

        const newPost = { title: enteredTitle, body: enteredBody, author: enteredAuthor };

        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(res => {
            console.log(props.location);
            props.history.push({
                pathname: '/posts',
                state: {...res.data, author: enteredAuthor}
            });
        })
        .catch(err => alert(`Server error occured: ${err}`));
    };

    return (
        <div>
        <h3>Add New Post</h3>
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={(event) => setEnteredTitle(event.target.value)}
        />

        <br />
        <label>Body</label>
        <textarea
          rows="4"
          value={enteredBody}
          onChange={(event) => setEnteredBody(event.target.value)}
        />

        <br />
        <label>Author</label>
        <select
          value={enteredAuthor}
          onChange={(event) => setEnteredAuthor(event.target.value)}
        >
          <option value="Ahmed">Ahmed</option>
          <option value="Zeke">Zeke</option>
          <option value="Paul">Paul</option>
          <option value="Mike">Mike</option>
        </select>

        <br /><br />
        <button onClick={postDataHandler}>Add Post</button>
      </div>
    )
});

export default NewPost;