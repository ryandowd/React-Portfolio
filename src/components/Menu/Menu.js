import React from 'react';

import './Menu.scss';

const menu = ( props ) => (
    <div className="Menu">
      <h1 className="Menu__title font--bold">Ryan Dowd</h1>
      <nav className="Menu__list"> 
        <a target="_blank" href="https://github.com/ryandowd">Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/ryandowddeveloper/">LinkedIn</a>
      </nav>
    </div>
);

export default menu;
