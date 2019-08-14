
import React from 'react';
import CommentItem from '../atoms/CommentItem';

const CommentThreads = (props) => {
    const renderedComments = props.commentList.items===undefined?[]:props.commentList.items.map((comment) => {
        return <CommentItem key={comment.id} comment={comment}/>
    });

    return <div className='ui relaxed divided list'>{renderedComments}</div>;
};
export default CommentThreads;