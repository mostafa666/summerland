import React, { Component } from "react";
import { connect } from "react-redux";
// image
import contactUsImage from "./../common/images/contactUs.jpg";
import mailIcon from "./../common/images/mail.svg";
import userIcon from "./../common/images/user.png";

import { TextInput } from "./signup";
class ContactUs extends Component {
  render() {
    return (
      <div className="contactUs">
        <div className="contactUs__header">
          <div className="contactUs__header--image" />
          <div className="contactUs__header--title">
            <h3>تماس با ما</h3>
          </div>
        </div>
        <div className="contactUs__contacts--container">
          <div className="contactUs__contacts">
            <h4>راه های ارتباطی</h4>
            <ContactInfo title="ایمیل" text="modssg@gmail.com" />
            <ContactInfo title="آدرس دفتر" text="چهار راه استانبول _پاساژ فردوسی پلاک ۲۳۰" />
            <ContactInfo title="آدرس شعبات" text="ایزدشهر _گلسار ۸ _پلاک ۱۵۲ / آمل _نبش آفتاب ۲۸ /  محمود آباد مجتمع سیمرغ" />
            <ContactInfo title="شماره تماس" text="۳۳۹۵۶۸۱۹ / ۰۱۱۴۴۵۳۵۸۰۶ / ۰۱۱۴۴۲۹۳۸۹۰" />
            <ContactInfo title="ساعات کاری" text="۷ صبح تا ۱۲ شب همه روزه" />
          </div>
        </div>
        <div className="contactUs__form--container">
          <form className="contactUs__form">
            <h4>ارسال پیام</h4>
            <TextInput
              icon={userIcon}
              placeholder={"نام و نام خانوادگی خود را وارد نمایید..."}
              id={"inputs[6].id"}
              labelText={"نام و نام خانوادگی"}
              onchange={() => console.log()}
              type={"text"}
              className={""}
            />
            <TextInput
              icon={mailIcon}
              placeholder={"ایمیل خود را وارد نمایید..."}
              id={"inputs[6].id"}
              labelText={"ایمیل"}
              onchange={() => console.log()}
              type={"text"}
              className={""}
            />
            <div className="contactUs__form--message--container">
              <textarea
                name="message"
                placeholder="پیام خود را وارد نمایید..."
                id="messageSection"
                maxLength="500"
                className="contactUs__form--message"
              />
              <label htmlFor="messageSection">پیام</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const ContactInfo = ({ title, text }) => (
  <div className="contactUs__contacts--body">
    <span className="contactUs__contacts--body--title">{title}</span>
    <span className="contactUs__contacts--body--description">{text}</span>
  </div>
);

export default connect(state => ({ state }))(ContactUs);
