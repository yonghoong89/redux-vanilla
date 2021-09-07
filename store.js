const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

//actions
//actions -types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'
const addSubscriber = () =>{
  return {
    type:ADD_SUBSCRIBER
  }
}
const addViewCont = () =>{
  return {
    type:ADD_VIEWCOUNT
  }
}
//reducers
const subscriberState = {
  subscribers : 365
}
const subscriberReducer = (state=subscriberState, action) =>{
  switch(action.type){
    case ADD_SUBSCRIBER:
      return{
        ...state,
        subscribers:state.subscribers + 1
      }
      default: return state;
  }
}

const viewCountState = {
  subscribers : 100
}
const viewCountReducer = (state=viewCountState, action) =>{
  switch(action.type){
    case ADD_SUBSCRIBER:
      return{
        ...state,
        subscribers:state.subscribers + 1
      }
      default: return state;
  }
}

const rootReducer = combineReducers({
  view: viewCountReducer,
  subscriber: subscriberReducer
});


//store
//스토어 생성 후 리듀서 등록
const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addViewCont())