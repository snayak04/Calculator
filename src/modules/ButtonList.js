import React from 'react';
import Btns from '../containers/Btns';

const ButtonList = () => {
    
    return(
        <div>
        <div className="fl w-90">
            <Btns value="7" />
            <Btns value="8" />
            <Btns value="9" />
            <Btns value="4" />
            <Btns value="5" />
            <Btns value="6" />
            <Btns value="1" />
            <Btns value="2" />
            <Btns value="3" />
            <Btns value="0" />
            <Btns value="." />
            <Btns value="&nbsp;" />
            </div>
            <div className="fl w-10">
            </div>
        </div>
    );
}
export default ButtonList;