import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

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
            look, feel, and work. I studied computer science at the University
            of Waterloo in Canada. Now I live and work in&nbsp;California.
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
              <FaGithub size="28" />
            </a>
          </li>
        </ol>
      </footer>
    </div>
  );
}
