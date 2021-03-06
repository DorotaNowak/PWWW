import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import comments from './comments';
import Comment from "./Comment";
import "./css/scroll.css"


let splitter = 10;
let firstpart = comments.splice(0, splitter);


class MyInfiniteScroll extends React.Component {

    state = {
        items: firstpart,
        hasMore: true
    };

    fetchMoreData = () => {
        firstpart = comments.splice(0,splitter);
        if (this.state.items.length >= 100) {
            this.setState({hasMore: false});
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(firstpart)
            });
        }, 2000);
    };

    render() {
        return (
            <div className="comment-box">
                <h1>Your reviews</h1>
                <hr/>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: "center"}}>
                            <b>That's everything!</b>
                        </p>
                    }
                >
                    {this.state.items.map((comm) => (
                        <div>
                            <Comment comment={comm}>{comm.text}</Comment>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default MyInfiniteScroll;
