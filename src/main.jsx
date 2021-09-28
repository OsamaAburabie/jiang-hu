import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import '@/index.css';
import App from '@/App';

ReactDOM.render(
  <>
    <Helmet
      defaultTitle='Vite React Tailwind Starter'
      titleTemplate='%s | Vite React Tailwind Starter'
    >
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <App />
  </>,
  document.getElementById('root')
);
