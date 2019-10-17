import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tableBody, tabelHeader } from './../../staticData/account';

class MainCart extends Component {
    render() {
        console.log(tabelHeader);
        return (
            <div className="mainCart">
                <table className="mainCart__table">
                    <Tableheader values={tabelHeader()} />
                    <tbody>
                        <TableBody values={tableBody()} />
                    </tbody>
                </table>
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

const TableBody = ({ values }) => {
    return (
        <tr>
            <td>
                <img
                    className="goodImage"
                    src={values.img}
                    alt={values.title}
                />
            </td>{' '}
            {/* show link */}
            <td>{values.price}</td>
            <td>
                {values.isExists ? (
                    <span className="exist">موجود</span>
                ) : (
                    <span className="notExist">ناموجود</span>
                )}
            </td>
            <td className="details">
                جزییات بیشتر
                <div className="showMore">
                    <h4>{values.title}</h4>
                    <div>
                        <span>رنگ: </span>
                        <span>{values.color}</span>
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
            </td>
            <td>
                <img
                    className="closeImage"
                    src={values.closeIcon}
                    alt="close icon"
                />
            </td>
        </tr>
    );
};

export default connect(state => ({ state }))(MainCart);
