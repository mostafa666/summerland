import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmitButton } from '../signup';
import {
    decreseCount,
    addCount,
    selectedSize,
    selectedColor,
    addErrorInCart
} from '../../actions/detailsPageActions';


import { addCart } from './../../actions/detailsPageActions';
import convertNumbersPersian from '../../staticData/utilities/convertNumbersPersian';

class OrderSpecification extends Component {
    componentDidMount() {
        // this.props.dispatch(selectedSize() // set first size in cart
    }
    count = React.createRef();
    color = React.createRef();
    text = React.createRef();

    handlePlus = numbers => {
        this.props.dispatch(addCount(numbers));
    };
    handleMines = numbers => {
        this.props.dispatch(decreseCount(numbers));
    };
    chooseSize = e => {
        const index = e.nativeEvent.target.selectedIndex;
        const selectedvalue = e.nativeEvent.target[index].text;
        this.props.dispatch(selectedSize(selectedvalue));
    };
    handleColor = e => {
        const color = e.target.dataset.color;
        this.props.dispatch(selectedColor(color));
        
        e.target.parentNode.parentNode.childNodes.forEach((element,index) => {
            if(index !== 0){
                if(element.childNodes[0].classList.contains('colorActive')) {
                    element.childNodes[0].classList.remove('colorActive')
                }
            }
            
        });
        e.target.previousSibling.classList.add('colorActive')
        // console.log(e.target.previousSibling)
    };
    handleAddCart = async e => {
        e.preventDefault();
        let newSize;
        let isColor = false;
        const {id, dispatch} = this.props;
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        const defaultsize = e.target.setSize.childNodes[0].value;
        const {color} = this.props.state.detalPage.cart;
        
        if(!color) {
            dispatch(addErrorInCart(true,'لطفا سایز مورد نطر را انتخاب کنید'));
            return;
        }
        if(color) {
            dispatch(addErrorInCart(false,'لطفا سایز مورد نطر را انتخاب کنید'));
        }

        const {size,count} = this.props.state.detalPage.cart;
        
        
        if(!size) {
            dispatch(selectedSize(defaultsize));
            newSize = defaultsize;
        }else {
            newSize = size;
        }

        if(!color.includes('/')) isColor = true;
        // add in cart
        // send to backend
        console.log(this.props.state.detalPage.cart,newSize)
        await dispatch(addCart(token,nickname,id,count,newSize,color,isColor));
    };
    animationButton = e => {
        let circleElement = document.querySelector('.btn--clickMode');
        if (circleElement) {
            circleElement.parentElement.removeChild(circleElement);
        }
        const pos = e.target.getBoundingClientRect();
        let x = e.clientX - pos.left;
        let y = e.clientY - pos.top;
        let div = document.createElement('div');
        div.classList.add('btn--clickMode');
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        e.target.append(div);
    };
    render() {
        const { toggleShow, text } = this.props.state.detalPage.errorInAddCart;
        const errorMessage = {
            display: toggleShow? 'flex': "none"
        }
        const { count } = this.props.state.detalPage.cart;
        const { productSizes, productColors } = this.props.state.detalPage.data;
        return (
            <div className="specification">
                <div className="specification__orders">
                    <form onSubmit={e => this.handleAddCart(e)}>
                        <div className="specification__orders--top">
                            <div className="size">
                                <span>سایز: </span>
                                <select
                                    name="setSize"
                                    onChange={e => this.chooseSize(e)}
                                >
                                    {
                                        Array.isArray(productSizes)?
                                        productSizes.map(size => (
                                            <option key={size.id}>{size.size}</option>
                                        )):null
                                    }
                                </select>
                            </div>
                            <div className="color">
                                <span>رنگ: </span>
                                {
                                    Array.isArray(productColors)? 
                                    productColors.map(color => {
                                        if (color.color) {
                                            return (
                                                <ShowColors
                                                    chooseColor={() =>
                                                        this.handleColor
                                                    }
                                                    color={color.color}
                                                    name="colors"
                                                    id={color.id}
                                                    key={color.id}
                                                />
                                            );
                                        } else {
                                            return (
                                                <ShowColorsByImage
                                                    source={color.pattern}
                                                    name="colors"
                                                    id={color.id}
                                                    key={color.id}
                                                    chooseColor={() =>
                                                        this.handleColor
                                                    }
                                                />
                                            );
                                        }
                                    }):null
                                }
                            </div>
                        </div>
                        <div className="specification__orders--middle">
                            <SetNumbers
                                numbers={count}
                                handlePlus={this.handlePlus}
                                handleMines={this.handleMines}
                            />
                        </div>
                        <div className="specification__orders--bottom">
                            <SubmitButton
                                text="افزودن به سبد خرید"
                                onClick={e => this.animationButton(e)}
                                className="btn--green"
                                type="submit"
                            />
                            <p style={errorMessage}>{text}</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const SetNumbers = ({ numbers, handlePlus, handleMines }) => (
    <React.Fragment>
        <span className="title">تعداد: </span>
        <button type="button" className="plus" onClick={() => handlePlus(numbers)}>
            +
        </button>
        <span className="numbers">{convertNumbersPersian(numbers)}</span>
        <button type="button" className="mines" onClick={() => handleMines(numbers)}>
            -
        </button>
    </React.Fragment>
);

const ShowColors = ({ color, name, id, chooseColor }) => {
    const input = React.createRef();
    return (
        <div className="showColors">
            <label htmlFor={id} style={{ backgroundColor: color }}></label>
            <input
                data-color={color}
                ref={input}
                onChange={chooseColor(input)}
                type="radio"
                id={id}
                name={name}
            />
        </div>
    );
};
const ShowColorsByImage = ({ source, name, id, chooseColor }) => (
    <div className="showColors">
        <label
            htmlFor={id}
            style={{ backgroundImage: `url(${source})` }}
        ></label>
        <input
            data-color={source}
            onChange={chooseColor()} 
            type="radio" 
            id={id} 
            name={name} 
            />
    </div>
);

export default connect(state => ({ state }))(OrderSpecification);
