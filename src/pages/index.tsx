import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import buddyIcon from '../images/buddy_icon.jpg';

const Wrapper = styled.div`
  --main-bg-color: hsl(274deg 16% 8%);
  --main-text-color: hsl(0deg 0% 100%);
  --sunset-gradient-start: hsl(45deg, 100%, 63%);
  --sunset-gradient-median: hsl(24.61, 100%, 65.1%);
  --sunset-gradient-end: hsl(360deg, 100%, 65%);
  --sunset-gradient: linear-gradient(
    to bottom right,
    hsl(44.83, 100%, 65.1%) 0%,
    hsl(44.16, 100%, 65.1%) 8.2%,
    hsl(42.81, 100%, 65.1%) 16%,
    hsl(40.11, 100%, 65.1%) 23.4%,
    hsl(37.08, 100%, 65.1%) 30.4%,
    hsl(33.37, 100%, 65.1%) 37.3%,
    hsl(28.99, 100%, 65.1%) 43.8%,
    hsl(24.61, 100%, 65.1%) 50.2%,
    hsl(20.22, 100%, 65.1%) 56.5%,
    hsl(15.84, 100%, 65.1%) 62.6%,
    hsl(11.46, 100%, 65.1%) 68.7%,
    hsl(7.75, 100%, 65.1%) 74.8%,
    hsl(4.72, 100%, 65.1%) 81%,
    hsl(2.02, 100%, 65.1%) 87.2%,
    hsl(0.67, 100%, 65.1%) 93.5%,
    hsl(0, 100%, 65.1%) 100%
  );

  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-family: 'InterVariable', 'Inter', -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

const Content = styled.div`
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const HeroContent = styled(Content)`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  position: relative;
`;

const Title = styled.h1`
  bottom: 40px;
  font-size: 72px;
  font-weight: 800;
  margin-left: -150px;
  position: absolute;
  text-shadow: rgb(21 17 24 / 50%) 0px 0px 30px, rgb(21 17 24 / 50%) 0px 5px 15px, rgb(21 17 24 / 50%) 0px 1px 2px;
`;

const GradientLink = styled.a`
  background-clip: text;
  background: var(--sunset-gradient);
  color: var(--sunset-gradient-median);
  text-decoration: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover, &:focus {
    text-decoration: underline 3px var(--sunset-gradient-median);
  }
`;

const PhotoEffect = styled.div`
  position: relative;
  margin-left: 300px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  img.regular {
    filter: drop-shadow(0px 0px 25px hsl(0deg 0% 0% / 0.3));
  }

  img.blurry {
    position: absolute;
    filter: blur(150px);
    transform: scale(1.1) rotate(15deg);
  }
`;

const Bio = styled.p`
  margin-bottom: 40px;
`;

const Social = styled.ol`
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 0;
`;

const SocialLink = styled.a`
  color: var(--main-text-color);
`;

const IndexPage: React.FC = () => {
  return (
    <Wrapper>
      <Helmet title="Mu Ye - Software Engineer" />
      <section className="hero">
        <HeroContent>
          <PhotoEffect>
            <img src={buddyIcon} className="blurry" />
            <img src={buddyIcon} alt="The author of this webpage, Mu Ye" className="regular" />
          </PhotoEffect>
          <Title>Hi, I'm Mu.</Title>
        </HeroContent>
      </section>
      <section className="intro">
        <Content>
          <Bio>
            I'm a software engineer who likes to think about how things look, feel, and work.
            Typically my projects involve creating intuitive and delightful user experiences
            on the web. I studied at the <GradientLink target="_blank" href="https://uwaterloo.ca">University of Waterloo</GradientLink> in
            Canada, now I live in&nbsp;California.
          </Bio>
          <Social>
            <li>
              <SocialLink target="_blank" href="https://github.com/winniethemu">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </SocialLink>
            </li>
            <li>
              <SocialLink target="_blank" href="https://www.linkedin.com/in/mu-ye-70866b139/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </SocialLink>
            </li>
            <li>
              <SocialLink target="_blank" href="https://twitter.com/winnie_the_mu">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </SocialLink>
            </li>
          </Social>
        </Content>
      </section>
      <section className="projects">
        <Content>
          <ol>
            <li>
              <Link to="/datepicker" style={{ textDecoration: 'none' }}>
                <GradientLink>Solar Datepicker</GradientLink>
              </Link>
            </li>
            <li>
              <Link to="/sunset" style={{ textDecoration: 'none' }}>
                <GradientLink>CSS Sunset</GradientLink>
              </Link>
            </li>
          </ol>
        </Content>
      </section>
    </Wrapper>
  );
};

export default IndexPage;