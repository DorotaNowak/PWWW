import React, {Component} from "react";

class CommentForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        var authorInput = document.getElementById("author");
        var commentTextInput = document.getElementById("text");


        var comment = {
            author: authorInput.value,
            text: commentTextInput.value
        };

        this.props.saveComment(comment);

        authorInput.value = '';
        commentTextInput.value = '';
    }

    render() {
        return (
            <form className="clearfix" onSubmit={this.handleSubmit.bind(this)}>
                <input className="form-control" ref="author" id="author" type="text" placeholder="Your name"/>
                <br/>
                <textarea className="form-control" ref="text" id = "text" rows="3" placeholder="Your comment"></textarea>
                <br/>
                <button className="btn btn-primary pull-right">Send</button>
            </form>
        );
    }
}

export default CommentForm;