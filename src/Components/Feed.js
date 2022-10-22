import React, { useState } from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    var [ posts, setPost ] = useState([]); // TODO: edit this variable
    
    function addPost (color) {
        setPost([...posts, color])
    };
    
    return (
        <div>
            <Menu posts={posts} addPost={addPost}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts.map((color) => ( <Block name={color}></Block> ))}
        </div>
    );
}

export default Feed;