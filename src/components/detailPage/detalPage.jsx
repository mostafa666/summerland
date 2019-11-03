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
    fetchComments,
    increaseView
} from '../../actions/detailsPageActions';
import { animateScroll as scroll } from 'react-scroll';
import Loader from '../loader';
import Footer from './../footer';
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
        // increace prodcut view
        dispatch(toggleLoaderDetailspage(true));
        await Promise.all([dispatch(getDetailsDatas(26)), dispatch(fetchComments(26)),dispatch(increaseView(26))]);
        dispatch(toggleLoaderDetailspage(false));
        
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
    

    render() {
        const { data } = this.props.state.detalPage;
        return (
            <div className="detailsPage">
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
                                serial={data.serial}
                            />
                        </Accordeon>
                        <Accordeon
                            id="tecnicalSpecification"
                            title="مشخصات فنی"
                        >
                            <TecnicalSpecification details={data.details} />
                        </Accordeon>
                        <Accordeon id="orderingSteps" title="مراحل سفارش">
                            <OrderSpecification id={data.id} />
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
            </div>
        );
    }
}
export default connect(state => ({ state }))(DetailPage);
