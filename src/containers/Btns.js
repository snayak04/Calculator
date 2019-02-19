import React, {Component} from 'react';

class Btns extends Component{

    render(){
        return(
            <div className="dib bg-light-gray br3 pa3 ma2 grow shadow-5 bw2 fl w-25 f1">
                {this.props.value}
            </div>
        );
    }

}

export default Btns;