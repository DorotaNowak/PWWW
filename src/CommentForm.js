import React, {Component} from "react";

class CommentForm extends Component {
    handleSubmit(e) {
        e.preventDefault();

        var authorInput = "Dorota";
        var commentTextInput = "Very good";

        var comment = {
            author: authorInput,
            text: commentTextInput
        };

        this.props.saveComment(comment);

        authorInput = '';
        commentTextInput = '';
    }

    render() {
        return (
            <form className="clearfix" onSubmit={this.handleSubmit}>
                <input className="form-control" ref="author" type="text" placeholder="Your name"/>
                <br/>
                <textarea className="form-control" ref="text" rows="3" placeholder="Your comment"></textarea>
                <br/>
                <button className="btn btn-primary pull-right">Send</button>
            </form>
        );
    }
}

export default CommentForm;