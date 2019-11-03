import React, { Component } from 'react';
import { connect } from 'react-redux';
// icons
import surface from './../common/images/surface.jpg';
import logo from './../common/images/logo.jpeg';
import close from './../common/images/cancel.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { setScreenSize, toggleMobileMenu } from '../actions/globalAction';

class Menu extends Component {
    componentDidMount() {
        this.props.dispatch(setScreenSize(window.innerWidth))
        window.addEventListener('resize',this.menuStyle)
    }
    componentWillUnmount() {
        window.addEventListener('resize',this.menuStyle)
    }
    menuStyle = () => {
        this.props.dispatch(setScreenSize(window.innerWidth))
    }
    render() {
        const {toggleMobileMenu: toggle,screenSize} = this.props.state.global;
        let style;
        if (screenSize < 600) {
            style = { right: toggle? '0': '-300px' }
        }
        else {
            style = {};
        }
        return (
            <React.Fragment>           
                <nav style={style} className="menu">
                    <img src={logo} alt="سامرلند" title='سامرلند' className="logo" />
                    <img src={close} alt="آیکن بستن" className="close" onClick={() => this.props.dispatch(toggleMobileMenu())} />
                    <ul className="menu__list">
                        <li>
                            <svg
                                viewBox="0 0 487.7 487.7" >
                            <g>
                                <g>
                                    <path d="M80.2,62.7c-4.8-4.8-12.5-4.8-17.3-0.1C58,67.4,58,75.1,62.8,79.9L92,109.3c2.3,2.3,5.4,3.6,8.7,3.6l0,0
                                        c3.2,0,6.3-1.3,8.6-3.6l88.9-88.4c4.8-4.8,4.8-12.5,0.1-17.3c-4.8-4.8-12.5-4.8-17.3,0l-26.9,26.7C139.8,15.5,119.9,7,99,7
                                        C56.7,7,22.3,41.4,22.3,83.7s34.4,76.7,76.7,76.7c34.1,0,63.6-21.9,73.5-54.5c2-6.5-1.7-13.3-8.2-15.3c-6.5-1.9-13.3,1.7-15.3,8.2
                                        c-6.6,21.8-27.2,37.1-50,37.1c-28.8,0-52.2-23.4-52.2-52.2S70.2,31.5,99,31.5c14.3,0,27.9,6,37.7,16.2l-35.9,35.7L80.2,62.7z"/>
                                    <path d="M99,170.6c-42.3,0-76.7,34.4-76.7,76.7S56.7,324,99,324s76.7-34.4,76.7-76.7S141.3,170.6,99,170.6z M99,299.5
                                        c-28.8,0-52.2-23.4-52.2-52.2s23.4-52.2,52.2-52.2s52.2,23.4,52.2,52.2S127.8,299.5,99,299.5z"/>
                                    <path d="M175.7,411c0-42.3-34.4-76.7-76.7-76.7S22.3,368.7,22.3,411s34.4,76.7,76.7,76.7S175.7,453.3,175.7,411z M99,463.3
                                        c-28.8,0-52.2-23.4-52.2-52.2s23.4-52.2,52.2-52.2s52.2,23.4,52.2,52.2S127.8,463.3,99,463.3z"/>
                                    <path d="M453.1,235H214.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h238.3c6.8,0,12.3-5.5,12.3-12.3S459.9,235,453.1,235z"/>
                                    <path d="M453.1,71.5H214.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h238.3c6.8,0,12.3-5.5,12.3-12.3S459.9,71.5,453.1,71.5z"
                                        />
                                    <path d="M453.1,398.8H214.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h238.3c6.8,0,12.3-5.5,12.3-12.3
                                        C465.4,404.2,459.9,398.8,453.1,398.8z"/>
                                    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                دسته بندی کالاها
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/products/men">مردانه
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                        </Link>
                                        <ul className="second">
                                            <li><Link to="/products/men/menClothes">لباس مردانه
                                                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/men/menClothes/MenPullover">پولیور و سوشرت مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/shortleeveehirts">پیراهن آستین کوتاه</Link></li>
                                                    <li><Link to="/products/men/menClothes/Longleeveehirts">پیراهن آستین بلند</Link></li>
                                                    <li><Link to="/products/men/menClothes/trousers">شلوار مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/MensCoats">کاپشن و پالتو مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/mensPoloShirts">تی شرت و پولوشرت مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/MensUnderwear">لباس زیر مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/MensShorts">شلوارک مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/MensSportswear">لباس ورزشی مردانه</Link></li>
                                                    <li><Link to="/products/men/menClothes/MensLingerie">لباس راحتی مردانه</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/men/MensBagsAndShoes">کیف و کفش مردانه
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/men/MensBagsAndShoes/MensCollege">کالج مردانه</Link></li>
                                                    <li><Link to="/products/men/MensBagsAndShoes/sneakers">کتونی</Link></li>
                                                    <li><Link to="/products/men/MensBagsAndShoes/backpack">کوله پشتی</Link></li>
                                                    <li><Link to="/products/men/MensBagsAndShoes/sportsBag">ساک ورزشی</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/men/menAccessory">اکسسوری
                                                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/men/menAccessory/menBelt">کمربند</Link></li>
                                                    <li><Link to="/products/men/menAccessory/menSocks">جوراب</Link></li>
                                                    <li><Link to="/products/men/menAccessory/menHat">کلاه</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/men/onSaleMen">حراج
                                                <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/men/onSaleMen/mensSingle">تک ساز مردانه</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/products/women">زنانه
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                        </Link>
                                        <ul className="second">
                                            <li><Link to="/products/women/womenClothes">لباس زنانه
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/women/womenClothes/Manto">مانتو</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenPants">شلوار</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenShirt">پیراهن</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenSweatshirt">سویشرت</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenCoat">پالتو</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenJacket">کاپشن</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenRainy">بارانی</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenTShirt">تیشرت</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenTop">تاپ</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenBluestonics">بلوزتونیک</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenSkirt">دامن</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenPaperback">شومیز</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenShorts">شلوارک</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenReassembly">سرهمی</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womenGlennick">گلنیک</Link></li>
                                                    <li><Link to="/products/women/womenClothes/womensSportWear">لباس ورزشی زنانه</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/women/womenUnderWear">لباس زیر و راحتی زنانه
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/women/womenUnderWear/womenBra">سوتین</Link></li>
                                                    <li><Link to="/products/women/womenUnderWear/womenShits">شرت زنانه</Link></li>
                                                    <li><Link to="/products/women/womenUnderWear/womenSleapWear">لباس خواب</Link></li>
                                                    <li><Link to="/products/women/womenUnderWear/WomenSwimsuit">مایو زنانه</Link></li>
                                                    <li><Link to="/products/women/womenUnderWear/WomensLingerie">لباس راحتی زنانه</Link></li>
                                                    <li><Link to="/products/women/womenUnderWear/womenSetOfTopsAndSkirts">ست تاپ و دامن</Link></li>
                                                    <li><Link to="/products/women/womenUnderWear/womenSetTopsAndShorts">ست تاپ و شلوارک</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/women/bagsAndShoes">کیف و کفش زنانه
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/women/bagsAndShoes/womenShoes">کفش زنانه</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/WomenSandals">صندل زنانه</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/womenSlippers">دمپایی</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/womenbackpack">کوله پشتی</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/womenHandLuggage">ساک دستی</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/womenSportBag">ساک ورزشی</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/womensneakers">کتونی</Link></li>
                                                    <li><Link to="/products/women/bagsAndShoes/womenSportShoes">کفش ورزشی</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/women/womenAccessory">اکسسوری
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/women/womenAccessory/womenSocks">جوراب</Link></li>
                                                    <li><Link to="/products/women/womenAccessory/womenHat">کلاه</Link></li>
                                                    <li><Link to="/products/women/womenAccessory/womenBelt">کمربند</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/products/women/womenOnSale">حراج
                                            <SvgIcon className="menu__arrow--bottom" viewBox="0 0 129 129" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" /> 
                                            </Link>
                                                <ul className="third">
                                                    <li><Link to="/products/women/womenOnSale/SingleInstrument">تک ساز</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <img src={surface} alt="عکس دسته بندی کالا"/>
                            </div>
                        </li>
                        <li><Link to="/">صفحه ی اصلی</Link></li>
                        <li><Link to="/aboutus">درباره ی ما</Link></li>
                        <li><Link to="/contactus">تماس با ما</Link></li>
                    </ul>
                </nav>
                <div className="menu__container"></div>
            </React.Fragment>
        )
    }
    
}

export const SvgIcon = ({className,viewBox, d}) => (
    <svg className={className} viewBox={viewBox}> 
        <g>
            <path d={d} />
        </g>
    </svg>
)


export default connect(state => ({ state }))(Menu);
