import axios from 'axios';
import React, { useEffect, useState } from 'react';

const fullPost = React.memo(props => {
    const [title, seTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        console.log('test...', props)

        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then(res => {
                console.log(res.data);

                const { title, body } = res.data;

                seTitle(title);
                setBody(body)
            })
            .catch(err => alert(`Server error occured: ${err}`));
    });


    const deletePostHandler = () => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then((res) => {
                console.log(res);
                props.history.push('/posts');
            })
            .catch(err => alert(`Server error occured: ${err}`));
    };

    return (
        <div className="FullPost">
            <h1>{title}</h1>
            <p>{body}</p>
            <div>
                <button onClick={deletePostHandler}>Delete</button>
            </div>
        </div>
    );
})


export default fullPost;