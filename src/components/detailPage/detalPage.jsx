import React, { Component } from 'react';
import Header from './../Header';
import Accordeon from './../accordeon';
import TecnicalSpecification from './../detailPage/tecnicalSpecification';
import GeneralSpecification from './../detailPage/generalSpecification';
import SliderFade from './../slider';
import OrderSpecification from './orderSpecification';
import Comments from './comments';
import UserMenu from './../userMenu';
import { connect } from 'react-redux';
import {
    resetDetailsPageReducer,
    getDetailsDatas,
    fetchComments
} from '../../actions/detailsPageActions';
import { animateScroll as scroll } from 'react-scroll';
import Loader from '../loader';
import { toggleLoaderDetailspage } from '../../actions/globalAction';
import { SubmitButton } from '../signup';
import { toggleSignin } from './../../actions/globalAction';

class DetailPage extends Component {
    slider = React.createRef();
    specification = React.createRef();
    async componentDidMount() {
        const { dispatch } = this.props;
        // reset store
        dispatch(resetDetailsPageReducer());
        // send request &&  save in store
        await Promise.all([dispatch(getDetailsDatas(14)), dispatch(fetchComments(14))]);
        dispatch(toggleLoaderDetailspage(false));
        console.log(this.props.state.detalPage.data);
        // increace prodcut view
        // await dispatch(increaseView(14));
        window.addEventListener('scroll', this.scrollSlider);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollSlider);
    }
    goAddComment = () => {
        const token = localStorage.getItem('token');
        if(token) {
            this.props.history.push({
                pathname: '/addComment'
            });
            scroll.scrollToTop();
        }else {
            this.props.dispatch(toggleSignin());
        }    
    };

    scrollSlider = () => {
        let specificationPosition = this.specification.current.getBoundingClientRect();
        let sliderPosition = this.slider.current.getBoundingClientRect();
        let headerPosition = document.querySelector('header').getBoundingClientRect();
        let slider = this.slider.current;
        let specification = this.specification.current;
        // console.log(specificationPosition.bottom , sliderPosition.bottom, specificationPosition.bottom < sliderPosition.bottom)
        if( window.scrollY > 20) {
            slider.style.position = "fixed";
            slider.style.width = "calc(40% - 2.1rem)";
            specification.style.marginRight = "calc(40% + 1rem)";
        }else if(specificationPosition.bottom < sliderPosition.bottom) {
            alert()
        }else {
            slider.style.position = "relative";
            specification.style.marginRight = "1.5rem";
        }
    };
    render() {
        const { data } = this.props.state.detalPage;
        return (
            <div className="detailsPage">
                <Header />
                <UserMenu
                    isLogedin={this.props.state.account.profile.isLogedIn}
                />
                <Loader toggle={this.props.state.global.toggleLoaderDetails} />
                <div className="detailsPage__top">
                    <div className="detailsPage__slider" ref={this.slider}>
                        <div className="detailsPage__slider--container">
                            <SliderFade />
                        </div>
                    </div>
                    <div
                        className="detailsPage__specification"
                        ref={this.specification}
                    >
                        <Accordeon
                            id="generalSpecification"
                            title={'مشخصات کلی'}
                        >
                            <GeneralSpecification
                                productType={data.productType}
                                productId={data.id}
                                views={data.views}
                                price={data.price}
                                offer={data.offer}
                                title={data.title}
                                starAverage={data.starAverage}
                                starCount={data.starCount}
                            />
                        </Accordeon>
                        <Accordeon
                            id="tecnicalSpecification"
                            title="مشخصات فنی"
                        >
                            <TecnicalSpecification details={data.details} />
                        </Accordeon>
                        <Accordeon id="orderingSteps" title="مراحل سفارش">
                            <OrderSpecification />
                        </Accordeon>
                    </div>
                </div>
                <div className="detailsPage__comments">
                    <SubmitButton
                        text="افزودن نظر"
                        onClick={e => this.goAddComment(e)}
                        className="btn--blue"
                        type="button"
                    />
                    <Accordeon id="comments" title="نظرات">
                        <Comments id={data.id} />
                    </Accordeon>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}
export default connect(state => ({ state }))(DetailPage);
