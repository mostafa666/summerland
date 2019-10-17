import React from 'react';

function Loader({toggle}) {

    const render = toggle ? (
        <div className="mainLoader__container">
            <div className="mainLoader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    ):null;

    return render;
}

export default Loader;
