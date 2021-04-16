import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <BrowserRouter basename="/demo/star-admin-free/react/template/demo_1/preview">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();