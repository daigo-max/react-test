import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Article />
                <Article />
            </>
        )
    }
}

export default Blog;