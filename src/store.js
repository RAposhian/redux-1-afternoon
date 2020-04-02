import {createStore} from 'redux';

initialState = {

}

function reducer (state = initialState, action) {
   const {type, payload} = action;
   switch(type) {
      default:
         return state;
   }
}

export default createStore(reducer);