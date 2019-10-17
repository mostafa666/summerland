import React, { useRef } from 'react';
import { toggleSignin } from '../actions/detailsPageActions';
import { connect } from 'react-redux';

function Accordeon(props) {
    const content = useRef(null);
    // const [setActive,setactivestate] = useState("");
    // const [setHeight, setActiveHeight] = useState("0px")

    function toggleAccourdeon() {
        props.dispatch(toggleSignin(content,props.id))
    }
    const {setActiveAccordeon, setHeightAccordeon} = props.state.detalPage[props.id];
    
    return (
        <div className="accordeon__section">
            <div className="accordeon">
                <button className={`accordeon__button ${setActiveAccordeon}`} onClick={toggleAccourdeon} >
                    <span className="accordeon__plus"></span>
                </button>
                <p className="accordeon__title">{props.title}</p>
            </div>
            <div className="accordeon__content" ref={content} style={{maxHeight:setHeightAccordeon}} >
                <div className="accordeon__text">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({state}))(Accordeon);
