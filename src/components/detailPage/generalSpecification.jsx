import React from 'react';
import { connect } from 'react-redux';
import Accordeon from '../accordeon';
import Stars from './stars';
import { toggleSignin } from '../../actions/globalAction';
import axios from 'axios';
import config from './../../config.json';

function GeneralSpecification({title,price, offer, starAverage,starCount,views,dispatch,productId,productType}) {
    return (
        <div className="specification">
            <div className="specification__general">
                <div className="specification__right">
                    <h3 className="specification__general--title">
                        {title}
                    </h3>
                    <div className="specification__general--price--box">
                        <span className="specification__general--newPrice">
                            {offer} <span> تومان</span>
                        </span>
                        <span className="specification__general--price">
                            {price} <span> تومان</span>
                        </span>
                    </div>
                    <Accordeon id="existGoods" title="کالاهای موجود">
                        {
                            Array.isArray(productType)? productType.map(data => (
                                <ExistGoods
                                    key={data.id}
                                    color={data.colorParent}
                                    hexColor={data.color}
                                    size={data.size}
                                    numbers={data.count}
                                    pattern={data.pattern}
                                />
                            )): null
                        }
                    </Accordeon>
                </div>
                <div className="specification__left">
                    <div className="top">
                        <span>{starCount} نفر</span>
                        <Stars voteNumber={starAverage} />
                    </div>
                    <div className="bottom">
                        <div className="views">
                            <span>{views}</span>
                            <svg 
                                viewBox="0 0 442.04 442.04" >
                                <g>
                                    <g>
                                        <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
                                            c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
                                            c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
                                            c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
                                            c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
                                            c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
                                            c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
                                    </g>
                                    <g>
                                        <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
                                            c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
                                            c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
                                            s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
                                    </g>
                                    <g>
                                        <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
                                    </g>
                                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            
                        </div>
                        <svg
                            viewBox="0 0 50 50"
                            style={{ enableBackground: 'new 0 0 50 50' }}
                            onClick={(e) => addWish(e,dispatch,productId)}
                        >
                            <path
                                
                                className="heart"
                                d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
                            c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
                            c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                            />
                            <path
                                className="line"
                                d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1
                            c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z"
                            />
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
const addWish = (e,dispatch,productId) => {
    const token = localStorage.getItem('token');
    const nickname = localStorage.getItem('nickname');
    if(!token || !nickname) {
        dispatch(toggleSignin());
    }else {
        if(!e.target.classList.contains('activeHeart')) {
            e.target.classList.add('activeHeart');
            e.target.parentNode.classList.add('activesvgHeart');
            // add wishlist
            axios.post(config.api_add_WishList, {
                "token":token,
                "nickname":nickname, 
                "productId": productId
            })
        }else { 
            // remove wishlist
            e.target.classList.remove('activeHeart');
            e.target.parentNode.classList.remove('activesvgHeart');
            axios.post(config.api_remove_WishList, {  
                "token":token, 
                "nickname":nickname,
                "productId" : productId
            })
        }
    }
    
    
}

const ExistGoods = ({ color, hexColor, size, numbers,pattern }) => {
    const style = {
        backgroundColor: hexColor? hexColor: '',
        backgroundImage: pattern? `url(${pattern})`: ''
    }
    let text, textClassName;
    if (numbers > 5) {
        text = `موجود`;
        textClassName = 'specification__existGoods--numbers1';
    } else {
        text = ` ${numbers} عدد`;
        textClassName = 'specification__existGoods--numbers2';
    }
    return (
        <div className="specification__existGoods">
            <span className="specification__existGoods--color1">
                <span style={style}></span>
            </span>
            <span className="specification__existGoods--color2">{color}</span>
            <span className="specification__existGoods--size">
                {size.toUpperCase()}
            </span>
            <span className={textClassName}>{text}</span>
        </div>
    );
};

export default connect(state => ({ state }))(GeneralSpecification);
