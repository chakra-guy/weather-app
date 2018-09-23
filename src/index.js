import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';

const AppWrapper = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(<AppWrapper/>, document.getElementById('root'));
registerServiceWorker();
