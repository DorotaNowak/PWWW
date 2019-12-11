import React, {Component} from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import $ from 'jquery';

    class CommentBox extends Component{
        constructor() {
            super();
            this.comments = [];
            this.url = 'comments.json';

        }
        componentDidMount(){
            this.getComments();
            setInterval(this.getComments, 1000);
        }
        getComments(){
            console.log(this.url);
            $.getJSON(this.url).then(function(data) {
                this.setState({ comments: data });
            }.bind(this));
        }

        saveComment(comment) {
            $.ajax({
                url: this.url,
                dataType: 'json',
                type: 'POST',
                data: comment,
                success: function(data) {
                    this.setState({comments: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.url, status, err.toString());
                }.bind(this)
            });
        }
        render(){
            return (
                <div>
                    <div>
                        <h3>Leave you comment here!</h3>
                    </div>

                <div className="comment-box well">
                    <CommentForm saveComment={this.saveComment} />
                </div>
                </div>
            );
        }
}

export default CommentBox;