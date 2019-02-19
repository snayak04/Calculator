import React, {Component} from 'react';
import Screen from '../modules/Screen';
import ButtonList from '../modules/ButtonList';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            inputField:"",
            onEnter: this.onEnterButton
        };
    }
    onEnterButton = () => {
        return 0; 
    }

    render(){
        return (
            <div className="tc">
                <div className="pa3 f2 bg-light-gray">
                    <h1>The Calculator</h1>
                </div>
                <div class="cf-ns nl2 nr2">
                    <div className="fl-ns w-20-ns ph2">&nbsp;</div>
                    <div className="fl-ns w-60-ns ph2">
                        <Screen text={3} onEnter={this.state.onEnter}/>
                        <div className="">
                            <ButtonList />
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