import React from 'react';

import classes from './Header.css';

const header = ( props ) => (
  <header 
    className="header" 
    onClick={ props.changeStateHandler }>HEADER</header>
);

export default header;
