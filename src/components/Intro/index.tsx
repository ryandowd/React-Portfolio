import React from "react";

import "./Intro.scss";

const intro = () => {
  const introList = [
    "3+ years React, 2+ years MERN (MongoDB/Express/React/Node), 1+ years GraphQL",
    "3+ years unit testing Jest/Enzyme (1+ React-Testing-Library), 2+ years end-to-end and integration testing with Selenium/Mocha/Chai",
    "5+ years Drupal (6,7,8) site-building and theming (Twig, PHP, Module updates, Drupal Hooks API)",
    "10+ years responsive web development (CSS3, HTML5, browser & device support)",
    "Lots of Wordpress & Shopify site-building and theming",
    "All the usual suspects: Agile, JIRA, AWS, Jenkins, Webpack, Gulp, Git, Docker, Yarn, NPM, SASS/SCSS, Bootstrap, BEM, SMACCS, Photoshop, Zeplin",
    "Experience with Google Ads, Web vitals, SEO, GTM, A/B Testing",
  ];

  return (
    <div className="Intro">
      <h3 className="Intro__heading font--bold">
        I'm a front-end web developer with over ten years experience building
        websites, widgets and web applications. I love developing intuitive
        interfaces.
      </h3>
      <ul className="Intro__list">
        {introList.map((itemText, index) => {
          return (
            <li key={index} className="Intro__list-item">
              {itemText}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default intro;
