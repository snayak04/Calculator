var Parser = require('expr-eval').Parser;

var value = '';

export const ButtonHandler = (e) => {
    var val = e.target.value;
     return  value+=val;
}

export const evaluate = (expression) => {

}