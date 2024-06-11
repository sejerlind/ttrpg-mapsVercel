"use client"
import Link from 'next/link'
import styles from '../Styles/_hero.module.scss';
import { MdArrowRightAlt } from "react-icons/md";


  const Rnadombtn = ({ hero, maps }) => {
    
    let randomMapIdLoad = maps[Math.floor(Math.random() * maps.length)].id;

    function randomMapIdFunc(event) {
      event.preventDefault(); 
      let randomMapId = maps[Math.floor(Math.random() * maps.length)].id;
      window.location.href = `/map/${randomMapId}`; 
    }

    return (
        <Link onClick={randomMapIdFunc} className={`${styles.hero_cta}  ${styles.hero_cta_sec}`} href="/maps/4">{hero.hero_cta_sec}<MdArrowRightAlt/></Link>
  
    )
}

export default Rnadombtn