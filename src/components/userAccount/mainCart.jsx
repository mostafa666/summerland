import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tableBody, tabelHeader } from './../../staticData/account';
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

        await this.props.dispatch(removeCarts(token,nickname,productId,id));
    }
    render() {
        console.log(this.props.state.detalPage.carts)
        return (
            <div className="mainCart__container">
                <h2>تمامی سفارش ها</h2>
                <div className="mainCart">
                    <Loader toggle={this.props.state.account.cartLoader} />
                    <table className="mainCart__table">
                        <Tableheader values={tabelHeader()} />
                        <tbody>
                            {
                                this.props.state.detalPage.carts.map(cart => (
                                    <TableBody key={cart.id} values={cart} removeCart={this.removeCart} />
                                ))
                            }
                        </tbody>
                    </table>
                    <button className="btn buyButton">تکمیل سبد خرید</button>
                    <button className="btn updateButton">بروز رسانی سبد خرید</button>
                    <button className="btn offButton">اعمال کد تخفیف</button>
                    <span className="btn totalButton">{`جمع کل مبلغ پرداختی 135000 تومان`}</span>
                    <div className="error">
                        {/* <p></p>     show error     */}
                    </div>
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
                >X</button>
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
