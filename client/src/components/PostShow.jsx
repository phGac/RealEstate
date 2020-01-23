import React from 'react';
import { useParams } from 'react-router-dom';

function PostShow() {
    const { id } = useParams();

    return (
    <section>
        Post show ({ id })
    </section>
)}

export default PostShow;
