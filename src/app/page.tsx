import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import styles from '../styles/Home.module.css';
import buddyIcon from '../../public/buddy-icon.jpg';

export default function Home() {
  return (
    <div>
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
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.content}>
          <table>
            <tbody>
              <tr>
                <td className={styles.project}>
                  <Link href="/datepicker">Solar Datepicker</Link>
                </td>
                <td className={styles.project}>
                  <Link href="/sunset">CSS Sunset</Link>
                </td>
                <td className={styles.project}>
                  <Link href="https://winniethemu.github.io/tiff/">Tiff</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer className={styles.contact}>
        <ol>
          <li>
            <a className={styles.social} target="_blank" href="https://github.com/winniethemu">
              <FaGithub />
            </a>
          </li>
          <li>
            <a className={styles.social} target="_blank" href="https://www.linkedin.com/in/mu-ye-70866b139/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a className={styles.social} target="_blank" href="https://twitter.com/winnie_the_mu">
              <FaTwitter />
            </a>
          </li>
        </ol>
      </footer>
    </div>
  );
}