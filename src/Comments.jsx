import { useEffect, useState } from 'react'
import './Users.css'
import Comment from './Comment';

export default function Comments () {

    const [comments, setComments] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    return (
        <div className='box'>
            <h5>Comments: {comments.length} </h5>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    )
}