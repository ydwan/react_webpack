import React from 'react';
import style from './Publish.css';

class Publisher extends React.Component {
    constructor(...args) {
        super(...args);
        // 定义 state
        this.state = {
            content: ''
        }
    }

    /**
    * 获取焦点
    **/
    handleFocus() {
        // 改变边框颜色
        this.refs.textElDiv.style.borderColor = '#fa7d3c';
        // 切换右上角内容
        this.refs.hot.style.display = 'none';
        this.refs.tips.style.display = 'block';
    }

    /**
    * 失去焦点
    **/
    handleBlur() {
        // 改变边框颜色
        this.refs.textElDiv.style.borderColor = '#cccccc';
        // 切换右上角内容
        this.refs.hot.style.display = 'block';
        this.refs.tips.style.display = 'none';
    }

    /**
    * 输入框内容发生变化
    **/
    handleChange(e) {
        // 改变状态值
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return (
            <div className={style.publisher}>
                <div className={style.title}>
                    <div ref="hot">
                        <a href="#">网友曝光两女孩蹲着等地铁,称没教养,你怎么看(投票)</a>
                    </div>
                    <div className={style.tips} ref="tips">
                        <span>{this.state.content.length > 140 ? '已超出' : '还可以输入'}</span><strong>{this.state.content.length > 140 ? this.state.content.length - 140 : 140 - this.state.content.length}</strong>字
                    </div>
                </div>
                <div className={style.textElDiv} ref="textElDiv">
                    <textarea onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea>
                </div>
                <div className={style.btnWrap}>
                    <a className={style.publishBtn + ((this.state.content.length > 0 && this.state.content.length <= 140) ? '' : ' ' + style.disabled)} href="javascript:void(0)">发布</a>
                </div>
            </div>
        );
    }
}

export default Publisher;