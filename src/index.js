import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Componentes
import App from './App';
import { GlobalStyle } from './GlobalStyle';
//Redux
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
