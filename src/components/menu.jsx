import React, { Component } from 'react';
import { connect } from 'react-redux';
// icons
import surface from './../common/images/surface.jpg';
import keyIcon from './../common/images/key.svg';
import exitIcon from './../common/images/exit.svg';
import orderIcon from './../common/images/order.svg';
import heartIcon from './../common/images/heart2.svg';
import profileIcon from './../common/images/profile.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { withRouter } from 'react-router-dom';
const Menu = () => (
    <React.Fragment>           
        <nav className="menu">
            <ul className="menu__list">
                <li>زنانه
                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                
                    <ul>
                        <li>
                            <Link to="/">شلوار</Link>
                            <Link to="/">پیراهن</Link>
                            <Link to="/">لباس زیر</Link>
                            <Link to="/">جوراب</Link>
                            <Link to="/">مانتو</Link>
                            <Link to="/">مقنعه</Link>
                            <Link to="/">شال</Link>
                            <Link to="/">روسری</Link>
                        </li>
                        <img src={surface} alt="عکس دسته بندی کالا"/>
                    </ul>
                </li>
                <li>مردانه
                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                    <ul>
                        <img src={surface} alt="عکس دسته بندی کالا"/>
                    </ul>
                </li>
                <li>فروش ویژه
                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                    <ul>
                        <img src={surface} alt="عکس دسته بندی کالا"/>
                    </ul>
                </li>
                <li>برند
                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                    <ul>
                        <img src={surface} alt="عکس دسته بندی کالا"/>
                    </ul>
                </li>
                <li>درباره ی ما</li>
                <li>تماس با ما</li>
            </ul>
        </nav>
        <div className="menu__container"></div>
    </React.Fragment>
)

export const SvgIcon = ({className,viewBox, d}) => (
    <svg className={className} viewBox={viewBox}> 
        <g>
            <path d={d} />
        </g>
    </svg>
)


export default connect(state => ({ state }))(Menu);
