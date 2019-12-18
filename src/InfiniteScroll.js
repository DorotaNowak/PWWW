import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import comments from './comments';
let splitter = Math.ceil(comments.length/2);
let firstpart = comments.splice(0, splitter);
let secondpart = comments.splice(splitter)

const style = {
    height: 30,
    border: "1px solid green",
    margin: 10,
    padding: 30
};

class MyInfiniteScroll extends React.Component {

    state = {
        items: comments,
        hasMore: true
    };

    fetchMoreData = () => {
        console.log(firstpart);
        console.log(comments);
        if (this.state.items.length >= 100) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(comments)
            });
        }, 500);
    };

    render() {
        return (
            <div>
                <h1>Your reviews</h1>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                            {i.author}
                            {i.text}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default MyInfiniteScroll;
