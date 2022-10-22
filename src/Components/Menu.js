import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

function Menu (props) {

    return (
        <div className="colorOptions">
            <Color color="red" addPost={props.addPost}></Color>
            <Color color="pink" addPost={props.addPost}></Color>
            <Color color="blue" addPost={props.addPost}></Color>
            <Color color="green" addPost={props.addPost}></Color>
        </div>
    );
}

export default Menu;