import React from 'react';
import "../component/Feed.css";
import AskBox from './AskBox';
import Post from './Post';

function Feed() {
    return (
        <div className = "feed">
            <AskBox />
            <Post />
        </div>
    )
}

export default Feed
