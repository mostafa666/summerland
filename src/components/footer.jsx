import React from 'react';
// icons
import original from './../common/images/original.svg'
import off from './../common/images/off.svg'
import freeDelivery from './../common/images/freeDelivery.svg'
import express from './../common/images/express.svg'
import instagram from './../common/images/instagram.svg'
import telegram from './../common/images/telegram.svg'


import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
function Footer(props) {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__services">
                    <div className="footer__services--item">
                        <img src={original} alt="ضمانت اصل بودن کالا"/>
                        <span>ضمانت اصل بودن کالا</span>
                    </div>
                    <div className="footer__services--item">
                        <img src={off} alt="ضمانت اصل بودن کالا"/>
                        <span>ضمانت اصل بودن کالا</span>
                    </div>
                    <div className="footer__services--item">
                        <img src={freeDelivery} alt="ضمانت اصل بودن کالا"/>
                        <span>ارسال رایگان</span>
                    </div>
                    <div className="footer__services--item">
                        <img src={express} alt="ضمانت اصل بودن کالا"/>
                        <span>امکان ارسال اکسپرس</span>
                    </div>
                </div>
                <div className="footer__body">
                    <div className="footer__body--item">
                        <h3>آدرس و اطلاعات تماس</h3>
                        <ul>
                            <li>آدرس دفتر :
                                چهار راه استانبول _پاساژ فردوسی پلاک ۲۳۰ 
                                تلفن :<a tel="۳۳۹۵۶۸۱۹">۳۳۹۵۶۸۱۹</a>
                            </li>
                            <li>آدرس شعبات :
                                شعبه ۱ : ایزدشهر _گلسار ۸ _پلاک ۱۵۲تلفن:<a tel="۰۱۱۴۴۵۳۵۸۰۶">۰۱۱۴۴۵۳۵۸۰۶</a>
                            </li>
                            <li>
                                شعبه ۲ : آمل _نبش آفتاب ۲۸
                                تلفن : <a tel="۰۱۱۴۴۲۹۳۸۹۰">۰۱۱۴۴۲۹۳۸۹۰</a>
                            </li>
                            <li>
                                شعبه ۳ : محمود آباد مجتمع سیمرغ 
                            </li>
                        </ul>
                    </div>
                    <div className="footer__body--item">
                        <h3>سامرلند</h3>
                        <ul>
                            <li><Link to="/aboutus">درباره ما</Link></li>
                            <li><Link to="/contactus">تماس با ما ما</Link></li>
                        </ul>
                        <div className="footer__socialmedia">
                            <h3>شبکه های اجتماعی</h3>
                            <ul>
                                <li><a href="/telegram.me"><img src={telegram} alt="آدرس تلگرام ما"/></a></li>
                                <li><a href="/instagram.me"><img src={instagram} alt="آدرس اینتاگرام ما"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyWrite">
                    <p>© 2019 تمامی حقوق متعلق به خرید اینترنتی | فروشگاه آنلاین سامرلند می‌باشد.</p>
                </div>
            </div>
        </footer>
    )
}

export default connect(state => ({state}))(Footer);
