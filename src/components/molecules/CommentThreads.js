
import React from 'react';
import { useSelector } from "react-redux";
import CommentItem from '../atoms/CommentItem';

const CommentThreads = () => {
    const CommentList = useSelector(state => state.CommentThreadsReducer);
    const renderedComments = CommentList.items===undefined?[]:CommentList.items.map((comment) => {
        return <CommentItem key={comment.id} comment={comment}/>
    });

    return <div className='ui relaxed divided list'>{renderedComments}</div>;
};
export default CommentThreads;