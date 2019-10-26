import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tabelHeader } from './../../staticData/account';
import { fetchCarts, removeCarts } from './../../actions/detailsPageActions';
import Loader from './../loader'
import { cartLoader } from '../../actions/accountPageAction';
// icon


class MainCart extends Component {
    async componentDidMount() {
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        this.props.dispatch(cartLoader(true));
        await this.props.dispatch(fetchCarts(token,nickname));
        this.props.dispatch(cartLoader(false));
        console.log(this.props.state)
    }
    removeCart = async (e,id,productId) => {
        console.log(e.target);
        // e.isPropagationStopped = true;
        // 
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        this.props.dispatch(cartLoader(true));
        await this.props.dispatch(removeCarts(token,nickname,productId,id));
        this.props.dispatch(cartLoader(false));
    }
    render() {
        const {carts} = this.props.state.detalPage;
        console.log(carts);
        return (
            <div className="mainCart__container">
                <h2>تمامی سفارش ها</h2>
                <div className="mainCart">
                    <Loader toggle={this.props.state.account.cartLoader} />
                    <table className="mainCart__table">
                        <Tableheader values={tabelHeader()} />
                        <tbody>
                            {
                                carts.map((cart,index) => {
                                    console.log(carts.length-1 , index)
                                    if(carts.length-1 === index) {
                                        return null;
                                    }else {
                                        return (
                                            <TableBody key={cart.id} values={cart} removeCart={this.removeCart} />
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    {
                        carts.length === 1? <p className="notFounding">موردی یافت نشد!</p>:(
                            <div>
                                <button className="btn buyButton">تکمیل سبد خرید</button>
                                <button className="btn updateButton">بروز رسانی سبد خرید</button>
                                <button className="btn offButton">اعمال کد تخفیف</button>
                                <span className="btn totalButton">{`جمع کل مبلغ پرداختی 135000 تومان`}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

const Tableheader = ({ values }) => {
    return (
        <thead>
            <tr>
                {values.map(value => (
                    <th key={value.id}>{value.text}</th>
                ))}
            </tr>
        </thead>
    );
};

const TableBody = ({ values,removeCart }) => {
    return (
        <tr>
            <td>
                <img
                    className="goodImage"
                    src={values.image}
                    alt={values.title}
                />
            </td>{' '}
            {/* show link */}
            <td>{values.price} تومان</td>
            <td>
                {values.isExist ? (
                    <span className="exist">موجود</span>
                ) : (
                    <span className="notExist">ناموجود</span>
                )}
            </td>
            <td className="details">
                <div className="details__span">
                    جزییات بیشتر    
                    <div className="showMore">
                        <h4>{values.title}</h4>
                        <div className="color">
                            <span>رنگ: </span>
                            {
                                values.color? <ShowColors color={values.color} /> 
                                        :<ShowColorsByImage color={values.pattern} /> 
                            }
                        </div>
                        <div>
                            <span>سایز: </span>
                            <span>{values.size}</span>
                        </div>
                        <div>
                            <span>تعداد: </span>
                            <span>{values.count}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <button
                    onClick={(e) => removeCart(e,values.id,values.productId)}
                    className="closeImage"
                ></button>
            </td>
        </tr>
    );
};


const ShowColorsByImage = ({color}) => {
    const style = {
        backgroundImage: `url(${color})`
    }
    return(
        <span style={style} className="details__color"></span>
    )
}
const ShowColors = ({color}) => {
    const style = {
        backgroundColor: color
    }
    return(
        <span style={style} className="details__color"></span>
    )
}



export default connect(state => ({ state }))(MainCart);
