import Link from 'next/link'
import styles from '../Styles/_Navbar.module.scss'


export default function Navbar() {
    return (
      <nav  className={styles.navbar}>
        <h1>FreeTTRPGMaps</h1>
        <span className={styles.linkwrapper}>
          <Link href="/">Home</Link>
          <Link href="/map">See all maps</Link>
          <Link href="/Contact">Contact us</Link>
        </span>
      </nav>
    );
  }
  