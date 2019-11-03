import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactUs">
                <h3 className="contactUs__header">تماس با ما</h3>
                <div className="contactUs__form__container">
                    <form className="contactUs__form">
                        
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(state => ({ state }))(ContactUs);



