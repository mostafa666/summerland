import React, { Component } from 'react';
import userIcon from './../../common/images/user.svg';

 class Comment extends Component {
          
    render() {
        const {nickname, time, comment} =this.props;
        return (
            <div className="comments__comment">
                <div className="comments__comment--image">
                    <img src={userIcon} alt="عکس کاربر" />
                </div>
                <blockquote>
                    <div className="comments__comment--body">
                        <h5>{nickname}</h5>
                        <time>{time}</time>
                    </div>
                    <p>{comment}</p>
                </blockquote>
            </div>
        )
    }
}
export default Comment