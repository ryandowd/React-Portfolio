import React from 'react';

import './Header.scss';
import Logo from './Logo/Logo';
import Intro from '../Intro/Intro';

const header = ( props ) => (
    <header className="Header">
      <div className="Header__inner-container container">
          {/*<Logo/>*/}
          <Intro/>
      </div>
    </header>
);

export default header;
