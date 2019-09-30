import React, { Component } from 'react';
import { connect } from 'react-redux';

// icons
// import keyIcon from './../../common/images/key.svg'

class FilterBox extends Component {
    render() {
        const data = [
            {
                id:"check1",
                text:"آیدی شماره ی 1",
                name:"name1"
            },{
                id:"check2",
                text:"آیدی شماره ی 2",
                name:"name1"
            },{
                id:"check3",
                text:"آیدی شماره ی 2",
                name:"name1"
            },{
                id:"check4",
                text:"آیدی شماره ی 2",
                name:"name1"
            }
        ]
        return (
            <div className="filterBox">
                <CheckBox data={data} />
            </div>
        );
    }
}


export const CheckBox = ({data,onchange}) => {
    return (
        <div>
            {data.map(data => (
                <div className="checkbox" key={data.id}>
                    <input onChange={() =>onchange()} type="checkbox" id={data.id} className="checkbox__input" name={data.name} />
                    <label htmlFor={data.id} className="checkbox__container">
                        <div className="checkbox__label">
                            <div className="effect"></div>
                        </div>
                        <span className="checkbox__text">{data.text}</span>
                    </label>
                </div>
            ))}
        </div>
    )
}



export default connect(state => ({ state }))(FilterBox);
