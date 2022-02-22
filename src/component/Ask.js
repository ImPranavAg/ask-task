import React from 'react';
import '../component/Ask.css';
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Widget from './Widget';

function Ask() {
    return (
        <div>
            <div className = "ask">
                <Navbar />
                <div className = "ask__content">
                    <Sidebar />
                    <Feed />
                    <Widget />
                </div>
            </div>
        </div>
    )
}

export default Ask;
