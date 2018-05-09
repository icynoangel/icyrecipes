import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default {
  store,
  Provider
};
