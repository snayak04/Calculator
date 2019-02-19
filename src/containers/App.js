import React, {Component} from 'react';
import Screen from '../modules/Screen';
import ButtonList from '../modules/ButtonList';
import {ButtonHandler, evaluate} from '../math';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            inputField:"",
            onEnter: this.onEnterButton
        };
    }
    onEnterButton = () => {
        evaluate(this.state.inputField);
    }

    handleClick = (e) => {
       var val = ButtonHandler(e);
       this.setState({inputField:val});
       console.log(val);
    }
    handleOperator = (e) => {

    }
    handleEquals = (e) => {

    }
    handleCancel = (e) => {

    }
    render(){
        return (
            <div className="tc">
                <div className="pa3 f2 bg-light-gray">
                    <h1>The Calculator</h1>
                </div>
                <div className="cf-ns nl2 nr2">
                    <div className="fl-ns w-20-ns ph2">&nbsp;</div>
                    <div className="fl-ns w-60-ns ph2">
                        <Screen text={this.state.inputField} onEnter={this.state.onEnter}/>
                        <div className="">
                            <ButtonList clicked={this.handleClick} operator={this.handleOperator} equal={this.handleEquals} cancel={this.handleCancel}/>
                        </div>
                    </div>
                </div>
                {/* <div className="fl w-10"></div>
                <div className="pa2 fl w-two-thirds">
                    <Screen text={3} onEnter={this.state.onEnter}/>
                    <ButtonList />
               </div>
               <div className="fl w-10"></div> */}

            </div>
        );
    }
}

export default App;