import React from 'react';

import './Header.scss';
import Logo from './Logo/Logo';

const header = ( props ) => (
    <header className="Header">
      <div className="Header__inner-container container">
          <Logo/>
          <h1>I'm a Drupal themer and front-end web developer</h1>
      </div>
    </header>
);

export default header;
