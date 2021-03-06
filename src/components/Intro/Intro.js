import React from 'react';

import './Intro.scss';

const intro = ( props ) => (
    <div className="Intro">
      <h3 className="Intro__heading font--bold">I'm a front-end web developer with over eight years experience in building websites, widgets and JavaScript web apps.</h3>
      <ul className="Intro__list">
        <li className="Intro__list-item">Lots of experience with Drupal (6,7,8) site-building and theming (Twig, PHP, Module updates, Drupal Hooks API)</li>
        <li className="Intro__list-item">JavaScript applications and widgets (JSMVC, jQuery, React)</li>
        <li className="Intro__list-item">Responsive web development (CSS3, HTML5, browser & device support, regression testing etc)</li>
        <li className="Intro__list-item">All the usual suspects: SASS/SCSS, NPM, Git, Docker, Vagrant, Bootstrap, BEM, SMACCS, Agile, Photoshop...</li>
        <li className="Intro__list-item">Wordpress & Shopify site-building and theming</li>
      </ul>
    </div>
);

export default intro;
