import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import '@/styles/Home.css';
import buddyIcon from '../../public/buddy-icon.jpg';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="heroContent">
          <div className="photoEffect">
            <Image
              src={buddyIcon}
              className="regular"
              alt="The author of this webpage"
            />
          </div>
          <h1 className="title">Hi, I&apos;m Mu.</h1>
        </div>
      </section>
      <section className="intro">
        <div className="content">
          <p className="bio">
            I&apos;m a software engineer who likes to think about how things
            look, feel, and work. Typically my projects involve creating
            intuitive and delightful user experiences on the web. I studied at
            the <Link href="https://uwaterloo.ca">University of Waterloo</Link>{' '}
            in Canada, now I live in&nbsp;California.
          </p>
        </div>
      </section>
      <footer className="contact">
        <ol>
          <li>
            <a
              className="social"
              target="_blank"
              href="https://github.com/winniethemu"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              className="social"
              target="_blank"
              href="https://www.linkedin.com/in/mu-ye-70866b139/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              className="social"
              target="_blank"
              href="https://twitter.com/winnie_the_mu"
            >
              <FaTwitter />
            </a>
          </li>
        </ol>
      </footer>
    </div>
  );
}
