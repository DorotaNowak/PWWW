import React, {Component} from "react";
import Comment from "./Comment";

    class CommentList extends Component{
        comments(){
            console.log("comments in CommentLISt");
                return this.props.comments.map(function (comment) {
                    return <Comment key={comment.date} comment={comment}>{comment.text}</Comment>
                });
        }
        render(){
            return (
                <div className="comment-list">
                    {this.comments()}
                </div>
            );
        }
}
export default CommentList;