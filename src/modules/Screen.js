import React from 'react';

const Screen = ({formula}) => {
    return(
        <div className="pa2 fl w-100">
            <input type="text" 
            placeholder="Enter Formula"
            value={formula}
            className="dib pa3 ma2 bg-light-gray ba2 fl w-100"/>
        </div>
    );
}
export default Screen;