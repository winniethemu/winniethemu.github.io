import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import buddyIcon from '../images/buddy_icon.jpg';

const IndexPage = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="content">
          <div className="photo-effect">
            <img src={buddyIcon} className="blurry" />
            <img src={buddyIcon} alt="The author of this webpage, Mu Ye" className="regular" />
          </div>
          <h1>Hi, I'm Mu.</h1>
        </div>
      </section>
      <section className="intro">
        <div className="content">
          <p className="bio">
            I'm a software engineer who likes to think about how things look, feel, and work.
            Typically my projects involve creating intuitive and delightful user experiences
            on the web. I studied at the <a target="_blank" href="https://uwaterloo.ca">University of Waterloo</a> in
            Canada, now I live in&nbsp;California.
          </p>
          <ol className="social">
            <li>
              <a target="_blank" href="https://github.com/winniethemu">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/mu-ye-70866b139/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/winnie_the_mu">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
          </ol>
        </div>
      </section>
      <section className="projects">
        <div className="content">
          <ol>
            <li><Link to="/datepicker">Solar Datepicker</Link></li>
          </ol>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IndexPage;
