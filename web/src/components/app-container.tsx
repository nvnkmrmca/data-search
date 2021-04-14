import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Home } from '../containers/home';

export default () => {
  return(
    <HashRouter>
      <Home />
    </HashRouter>
  )
};