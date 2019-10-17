import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import img from './../../common/images/warning.svg';
import { fetchComments } from '../../actions/detailsPageActions';
 class Comments extends Component {
    render() {
        const comments = this.props.state.detalPage.commentsData;
        return (
            <div className="comments">
                {
                    Array.isArray(comments)? comments.length > 0 ? (
                        comments.map(comment=> (
                            <Comment key={comment.id} nickname={comment.nickname} time={comment.date} comment={comment.content} title={comment.title} />
                        ))
                    ):
                    (
                        <div className="wishList noResult">
                            <img src={img} alt="موردی یافت نشد" />
                            <span className="wishList__notResult">نظری ثبت نشده</span>
                        </div>
                    )
                    :null
                }
            </div>
        )
    }
}
export default connect(state=> ({state}))(Comments);