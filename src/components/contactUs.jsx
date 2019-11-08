import React, { Component } from "react";
import { connect } from "react-redux";
// image
import contactUsImage from "./../common/images/contactUs.jpg";
import mailIcon from "./../common/images/mail.svg";
import userIcon from "./../common/images/avatar2.svg";
import phoneIcon from "./../common/images/phone-call.svg";
import axios from "axios";
import config from "./../config.json";
import { TextInput } from "./signup";
import { toast } from "react-toastify";
class ContactUs extends Component {
  handleMessage = async e => {
    e.preventDefault();
    const message = e.target.message;
    const email = message.parentNode.previousSibling.childNodes[0];
    const phone = message.parentNode.previousSibling.previousSibling.childNodes[0];
    const name = message.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
    try {
      const response = await axios.post(config.api_send_contact, {
        title: "",
        content: message,
        phone: phone,
        name: name,
        email: email
      });
      toast.success("پیام شما با موفقیت فرستاده شد", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("ایمیل وارد شده معتبر نمیباشد", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      } else if (error.response && error.response.status === 400) {
        toast.error("لطفا ورودی های خود ر جک کنید", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      } else {
        toast.error("خطایی رخ داده است", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      }
    }
  };
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
          <form className="contactUs__form" onSubmit={e => this.handleMessage(e)}>
            <h4>ارسال پیام</h4>
            <TextInput
              icon={userIcon}
              placeholder={"نام و نام خانوادگی خود را وارد نمایید..."}
              id={"inputsId"}
              labelText={"نام و نام خانوادگی"}
              onchange={() => console.log()}
              type={"text"}
              className={""}
            />
            <TextInput
              icon={phoneIcon}
              placeholder={"شماره تماس خود را وارد نمایید..."}
              id={"inpuId"}
              labelText={"شماره تماس"}
              onchange={() => console.log()}
              type={"phone"}
              className={""}
            />
            <TextInput
              icon={mailIcon}
              placeholder={"ایمیل خود را وارد نمایید..."}
              id={"input3Id"}
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
            <button type="submit" className="btn btn--green">
              ثبت پیام
            </button>
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
