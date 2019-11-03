import React, { Component } from 'react';
import Header from '../Header';
import { TextInput } from './../signup';
import titleIcon from './../../common/images/chat.svg';
import RegisterStar from './registerStar';
import axios from 'axios';
import config from './../../config.json';
import { toast } from 'react-toastify';
import { tsArrayType } from '@babel/types';
class AddComment extends Component {
    componentDidMount() {
        // get product id
        // is there product id
        // is there token
    }
    handleTitle = () => {};
    handlesubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        const title = e.target.childNodes[0].childNodes[0].value;
        const comment = e.target.comment.value;
        try {
            await axios.post(config.api_send_comment, {
                token: token,
                nickname: nickname,
                productId: 18,
                title: title,
                content: comment
            });
            toast.success('نظرتان برای این محصول با موفقیت ثبت شد',{
                position: toast.POSITION.BOTTOM_LEFT
            })
        } catch (error) {
            if(error.response && error.response.status === 401) {
                toast.error('شما دسترسی به این صفحه را ندارید', {
                    position: toast.POSITION.BOTTOM_LEFT
                  })
            }else if(error.response && error.response.status === 400) {
                toast.error('شما دسترسی به این صفحه را ندارید', {
                    position: toast.POSITION.BOTTOM_LEFT
                  })
            }else {
                toast.error('لطفا اینترنت خود را چک کنید', {
                    position: toast.POSITION.BOTTOM_LEFT
                  })
            }
        }

        // check count of characters
    };
    render() {
        return (
            <div className="addComment">
                <div className="addComment__container">
                    <div className="addComment__top">
                        <h3 className="addComment__title">افزودن نطر</h3>
                    </div>
                    <div className="addComment__body">
                        <form onSubmit={e => this.handlesubmit(e)}>
                            <TextInput
                                placeholder={`عنوان خود را وارد کنید`}
                                id={`commentHeader`}
                                labelText={`عنوان`}
                                onchange={() => this.handleTitle}
                                type={`text`}
                                className={`addComment__header`}
                                icon={titleIcon}
                            />
                            <div className="addComment__comment--container">
                                <textarea
                                    name="comment"
                                    placeholder="نظر خود را وارد نمایید"
                                    id="commentSection"
                                    maxLength="500"
                                    className="addComment__comment"
                                ></textarea>
                                <label htmlFor="commentSection">
                                    افزودن نظر
                                </label>
                            </div>
                            <div className="addComment__star">
                                <span>به این کالا امتیاز دهید</span>
                                <RegisterStar />
                            </div>
                            <button
                                className="btn btn--green addComment__button"
                                type="submit"
                            >
                                ثبت نطر
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddComment;
