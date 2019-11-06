import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import notFound from './../../common/images/404_element.png'
const NotFounding = () => {
  return (
    <div className="notFounding">
      <img src={notFound} alt="خطای 404"/>
      <p>صفحه‌ای که دنبال آن بودید پیدا نشد!</p>
      <Link to="/" className="btn btn--blue">
        صفحه ی اصلی
      </Link>
    </div>
  );
};

export default connect(state => ({ state }))(NotFounding);
