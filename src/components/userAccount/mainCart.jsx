import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tabelHeader } from './../../staticData/account';
import { fetchCarts, removeCarts } from './../../actions/detailsPageActions';
import Loader from './../loader'
import { cartLoader, updateCarts } from '../../actions/accountPageAction';
import convertNumbersPersian from '../../staticData/utilities/convertNumbersPersian';
import { offInputToggle } from '../../actions/globalAction';
// icon


class MainCart extends Component {
    async componentDidMount() {
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        this.props.dispatch(cartLoader(true));
        await this.props.dispatch(fetchCarts(token,nickname));
        this.props.dispatch(cartLoader(false));
        console.log(this.props.state.detalPage.cats)
    }
    removeCart = async (e,id,productId) => {
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        this.props.dispatch(cartLoader(true));
        await this.props.dispatch(removeCarts(token,nickname,productId,id));
        this.props.dispatch(cartLoader(false));
    }
    buyOrder = () => {

    }
    updateOrder = (discount) => {
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        this.props.dispatch(updateCarts(discount,nickname,token))
    }
    offOrder = () => {
        this.props.dispatch(offInputToggle())
    }
    render() {
        const offInput = <input type="text" id="offInput" placeholder="کد تخفیف" />
        const {carts} = this.props.state.detalPage;
        const totalPrice = (carts && carts.length > 0) ? carts[carts.length-1].cartPrice: '';
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
                                <button onClick={() => this.buyOrder()} className="btn buyButton">تکمیل سبد خرید</button>
                                <button onClick={() => this.updateOrder('discount')} className="btn updateButton">بروز رسانی سبد خرید</button>
                                <button onClick={() => this.offOrder()} className="btn offButton">اعمال کد تخفیف</button>
                                { this.props.state.global.offInputToggle? offInput: null }
                                <span className="btn totalButton">{`جمع کل مبلغ پرداختی ${convertNumbersPersian(totalPrice)} تومان`}</span>
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
            <td>{convertNumbersPersian(values.price)} تومان</td>
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
                            <span>{convertNumbersPersian(values.size)}</span>
                        </div>
                        <div>
                            <span>تعداد: </span>
                            <span>{convertNumbersPersian(values.count)}</span>
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
