import React from 'react';

import './Intro.scss';

const intro = ( props ) => (
    <div className="Intro">
      <h1>I'm a Drupal themer and front-end web developer</h1>
      <div>
        <div>
          <h3>What I'm am</h3>
          <p>I'm a front-end web developer, focusing on </p>
          <ul>
            <li>CSS</li>
            <li>Responsive web development</li>
            <li>Drupal site-building and theming</li>
            <li>JS</li>
          </ul>
        </div>
        <div>
          <h3>What I'm am not (yet)</h3>
          <p>Things I'm not good at, some i'm looking to improve</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
);

export default intro;
