import { Avatar } from '@material-ui/core';
import React from 'react';
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import "./Post.css";


function Post() {
    return (
        <div className = "post">
            <div className = "post__info">
            <Avatar />
            <h4>PranavAgrawal</h4>
            <small>(Education)</small>
            </div>
            <div className = "post__body">
                <div className = "post__question">
                    <p>What is the best front-end javascript framework: Angular.js, or React.js?</p>
                    <button className = "post__btnAnswer">
                        Answer
                    </button>
                </div>
                <div className = "post__answer">
                    <p>Although Angular and React have full-blown nuanced and clear-cut mutual advantages,
                       there are crucial contrasts in terms of their scalability, efficiency, and effectiveness as frameworks.
                       Angular’s ability to manipulate DOM is iconic in the web development industry, 
                       while React’s use of Virtual DOM steals the show with memory efficiency.
                    </p>
                </div>
                <img src = "https://trio.dev/static/e18d4c03964655cfdce3c039b9410042/7a8f2b656bb2556671f213266ce9edc4.jpg" alt = "" />
            </div>
            <div className = "post__footer">
                <div className = "post__footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>

                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />

                <div className = "post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;
