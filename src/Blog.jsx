import React from 'react';
import Article from './Article';
import {Foo, Bar} from './cpmponents/FooBar';
import Hoge from './cpmponents/Hoge';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: false,
            count: 0
        }
    }

    componentDidMount() {
        //ボタンがいいねされたらいいねをカウントアップする
        document.getElementById('counter').addEventListener('click', this.countUp)
    }

    componentDidUpdate() {
        if (this.state.count >= 10) {
            this.setState({count: 0})
        }
    }

    componentWillUnmount() {
        document.getElementById().removeEventListener('click', this.countUp)
    }

    // 公開状態を反転させる関数
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    countUp = () => {
        this.setState({count: this.state.count + 1 })
    }

    render() {
        const authorName = "Torahack";
        return (
            <>
                <Article
                    title={"Reactの使い方"}
                    isPublished={this.state.isPublished}
                    toggle={() => this.togglePublished()}
                    count={this.state.count}
                    />
                    <Foo />
                    <Bar />
                    <Hoge />
            </>
        )
    }
}

export default Blog;