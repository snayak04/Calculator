import React from 'react';
import {Btns, OperatorBtns, Equals, Cancel} from './Btns';

const ButtonList = (props) => {
    
    return(
        <div>
            <div className="fl w-60">
                <Btns value="7" click={props.clicked}/>
                <Btns value="8" click={props.clicked}/>
                <Btns value="9" click={props.clicked}/>
            
                <Btns value="4" click={props.clicked}/>
                <Btns value="5" click={props.clicked}/>
                <Btns value="6" click={props.clicked}/>
                <Btns value="1" click={props.clicked}/>
                <Btns value="2" click={props.clicked}/>
                <Btns value="3" click={props.clicked}/>
                <Btns value="0" click={props.clicked}/>
                <Btns value="." click={props.operator}/>
                <Btns value="&nbsp;" />
            </div>
            <div className="fl w-20">
                <OperatorBtns value="+" click={props.operator}/>
                <OperatorBtns value="-" click={props.operator}/>
                <OperatorBtns value="/" click={props.operator}/>
                <OperatorBtns value="*" click={props.operator}/>
            </div>
            <div className="fl w-20">
                <OperatorBtns value="&#8730;" click={props.operator}/>
                <OperatorBtns value="^" click={props.operator}/>
                <OperatorBtns value="%" click={props.operator}/>
                <Cancel value="C" click={props.cancel}/>
            </div>
            <div className="fl w-100">
                <Equals value="=" click={props.equal}/>
            </div>
        </div>
    );
}
export default ButtonList;