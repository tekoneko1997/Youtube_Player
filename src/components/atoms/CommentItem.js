import React from 'react';

const CommentItem = (props) => {
    const CommentSnippet = props.comment.snippet.topLevelComment.snippet;
    const image = CommentSnippet.authorProfileImageUrl?CommentSnippet.authorProfileImageUrl: "../../../public/favicon.ico";
    return (
        <div className="item" style={{"display":"flex"}}>
            <img className="ui avatar image" alt={CommentSnippet.authorDisplayName} src={image} />
            <div className="content">
                <p className="header">{CommentSnippet.authorDisplayName}</p>{/* a tagに変更するとuserのチャンネルに移動できるリンクになるが意味ないからそういこうとしてないよ */}
                <div className="description" dangerouslySetInnerHTML={{__html : CommentSnippet.textDisplay}}></div>
            </div>
        </div>
    )
}

export default CommentItem;