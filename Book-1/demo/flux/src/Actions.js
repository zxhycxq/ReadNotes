import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

//两个action构造函数

export const increment =(counterCaption)=>{
    AppDispatcher.dispatch({
      type:ActionTypes.INCREMENT,
      counterCaption:counterCaption,
    });
};

export const decrement=(counterCaption)=>{
    AppDispatcher.dispatch({
      type:ActionTypes.DECREMENT,
      counterCaption:counterCaption,
    })
}
