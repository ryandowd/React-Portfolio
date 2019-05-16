import React from 'react';

import './Intro.scss';

const intro = ( props ) => (
    <div className="Intro">
      <h1 className="font--bold">Ryan Dowd</h1>
      <h4 className="font--bold">I'm a front-end web developer with over eight years experience in building websites, widgets and javascript webapps.</h4>
      <h3 className="font--bold">The bulk of my time has been developing skills in:</h3>
      <ul>
        <li>Drupal site-building, development and theming</li>
        <li>Javascript applications and features (JSMVC, vanilla JS, jQuery)</li>
        <li>Responsive web development (CSS3, HTML5, browser & device support etc)</li>
        <li>UI and UX development</li>
      </ul>
      <h3 className="font--bold">I've also had lots of experience with:</h3>
      <ul>
        <li>Wordpress site-building, development and theming</li>
        <li>Shopify site-building, development and theming</li>
      </ul>
      <h3 className="font--bold">Things I'm improving on now:</h3>
      <ul>
        <li>React 16+</li>
        <li>ES6</li>
        <li>CSS methodologies</li>
      </ul>
    </div>
);

export default intro;
