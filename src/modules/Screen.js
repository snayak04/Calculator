import React from 'react';

const Screen = (props) => {
    return(
        <div className="fl w-100">
            <input type="text" 
            placeholder={props.text}
            value={props.text}
            className="dib pa3 ma2 bg-light-gray ba2 fl w-100"/>
        </div>
    );
}
export default Screen;