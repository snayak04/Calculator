import React from 'react';

export const Btns = (props) =>{
    return(
        <div>
            <button className="bg-light-gray br3 grow shadow-5 bw2 fl w-third pa2 f1" onClick={props.click} value={props.value}>{props.value}</button>
        </div>
    );
}
export const OperatorBtns = (props) => {
        return (
        <div>
            <button className="dp bg-gray br3 grow shadow-5 bw2 fl w-100 pa2 f1" onClick={props.operator} value={props.value}>{props.value}</button>
        </div>
        );
}

export const Equals = (props) => {
    return (
        <div>
            <button className="dp bg-green br3 grow shadow-5 bw2 fl w-100 pa2 f1" onClick={props.equal}>=</button>
        </div>
        );
}
export const Cancel = (props) => {
    return (
        <div>
            <button className="dp bg-red br3 grow shadow-5 bw2 fl w-100 pa2 f1" onClick={props.calncel} value="C">C</button>
        </div>
        );
}

