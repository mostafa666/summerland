import React, { Component } from "react";
import Header from "./../Header";
import Accordeon from "./../accordeon";
import TecnicalSpecification from "./../detailPage/tecnicalSpecification";
import GeneralSpecification from "./../detailPage/generalSpecification";
import SliderFade from "./../slider";
import OrderSpecification from "./orderSpecification";
import Comments from "./comments";
import { connect } from "react-redux";
import { resetDetailsPageReducer, getDetailsDatas, fetchComments, increaseView } from "../../actions/detailsPageActions";
import { animateScroll as scroll } from "react-scroll";
import Loader from "../loader";
import { toggleLoaderDetailspage } from "../../actions/globalAction";
import { SubmitButton } from "../signup";
import { toggleSignin } from "./../../actions/globalAction";

class DetailPage extends Component {
  slider = React.createRef();
  specification = React.createRef();
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatch, history } = this.props;
    if (+id) {
      // reset store
      dispatch(resetDetailsPageReducer());
      // send request &&  save in store
      // increace prodcut view
      dispatch(toggleLoaderDetailspage(true));
      await Promise.all([dispatch(getDetailsDatas(id)), dispatch(fetchComments(id)), dispatch(increaseView(id))]);
      dispatch(toggleLoaderDetailspage(false));
    } else {
      history.push("/notFounding");
    }
  }

  goAddComment = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.history.push({
        pathname: `/addComment/${this.props.match.params.id}`
      });
      scroll.scrollToTop();
    } else {
      this.props.dispatch(toggleSignin());
    }
  };

  render() {
    const { data } = this.props.state.detalPage;
    console.log(data);
    if (!data) return null;
    return (
      <div className="detailsPage">
        {/* <Loader toggle={this.props.state.global.toggleLoaderDetails} /> */}
        <div className="detailsPage__top">
          <div className="detailsPage__slider" ref={this.slider}>
            <div className="detailsPage__slider--container">
              <SliderFade images={data.image} />
            </div>
          </div>
          <div className="detailsPage__specification" ref={this.specification}>
            <Accordeon id="generalSpecification" title={"مشخصات کلی"}>
              <GeneralSpecification
                productType={data.productType}
                productId={data.id}
                views={data.views}
                price={data.price}
                offer={data.offer}
                title={data.title}
                starAverage={data.starAverage}
                starCount={data.starCount}
                serial={data.serial}
              />
            </Accordeon>
            <Accordeon id="tecnicalSpecification" title="مشخصات فنی">
              <TecnicalSpecification details={data.details} />
            </Accordeon>
            <Accordeon id="orderingSteps" title="مراحل سفارش">
              <OrderSpecification id={data.id} />
            </Accordeon>
          </div>
        </div>
        <div className="detailsPage__comments">
          <SubmitButton text="افزودن نظر" onClick={e => this.goAddComment(e)} className="btn--blue" type="button" />
          <Accordeon id="comments" title="نظرات">
            <Comments id={data.id} />
          </Accordeon>
        </div>
      </div>
    );
  }
}
export default connect(state => ({ state }))(DetailPage);
