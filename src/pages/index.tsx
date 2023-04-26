import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import styles from '../styles/Home.module.css';
import buddyIcon from '../../public/buddy-icon.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mu Ye - Software Engineer</title>
      </Head>
      <style jsx global>
        {`
          body {
            color: var(--foreground-color);
            background: var(--background-color);
          }

          a {
            background-clip: text;
            background: var(--sunset-gradient);
            color: var(--sunset-median);
            text-decoration: none;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          a:hover, a:focus {
            text-decoration: underline 3px var(--sunset-median);
          }
        `}
      </style>
      <section className="hero">
        <div className={styles.heroContent}>
          <div className={styles.photoEffect}>
            <Image src={buddyIcon} className={styles.blurry} alt="The author of this webpage" />
            <Image src={buddyIcon} className={styles.regular} alt="The author of this webpage" />
          </div>
          <h1 className={styles.title}>Hi, I&apos;m Mu.</h1>
        </div>
      </section>
      <section className="intro">
        <div className={styles.content}>
          <p className={styles.bio}>
            I&apos;m a software engineer who likes to think about how things look, feel, and work.
            Typically my projects involve creating intuitive and delightful user experiences
            on the web. I studied at the <Link href="https://uwaterloo.ca">University of Waterloo</Link> in
            Canada, now I live in&nbsp;California.
          </p>
          <ol className={styles.social}>
            <li>
              <a className={styles.socialLink} target="_blank" href="https://github.com/winniethemu">
                <FaGithub />
              </a>
            </li>
            <li>
              <a className={styles.socialLink} target="_blank" href="https://www.linkedin.com/in/mu-ye-70866b139/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a className={styles.socialLink} target="_blank" href="https://twitter.com/winnie_the_mu">
                <FaTwitter />
              </a>
            </li>
          </ol>
        </div>
      </section>
      <section className="projects">
        <div className={styles.content}>
          <ol>
            <li>
              <Link href="/datepicker">Solar Datepicker</Link>
            </li>
            <li>
              <Link href="/sunset">CSS Sunset</Link>
            </li>
            <li>
              <Link href="/tiff">Tiff</Link>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  }
}