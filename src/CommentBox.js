import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import React, {Component} from "react";
import $ from "jquery";
import comments_file from './comments'


let url = "./comments.json";


class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: comments_file
        };
    }

    componentDidMount() {
        console.log(url);
        this.getComments();
        setInterval(this.getComments, 1000000);
    }

    getComments() {
        console.log("getComments()");
        $.getJSON(url).then(function (comments_file) {
            this.setState({comments: comments_file});
        }.bind(this));
    }


    saveComment(comment) {
        console.log("comment file" + comments_file);
        console.log(comment);
    }

    render() {
        return (
            <div className="comment-box well">
                <CommentList comments={this.state.comments}/>
                <CommentForm saveComment={this.saveComment.bind(this)}/>
            </div>
        );
    }
}

export default CommentBox;
