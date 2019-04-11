import React from 'react';

import './Header.scss';
import Logo from './Logo/Logo';

const header = ( props ) => (
    <header className="Header">
      <div className="Header__inner-container container">
          <Logo/>
      </div>
    </header>
);

export default header;
