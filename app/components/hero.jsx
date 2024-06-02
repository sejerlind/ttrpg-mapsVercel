import { MdArrowRightAlt } from "react-icons/md";
import Supabase from "../config/supabaseClient";
import styles from '../Styles/_hero.module.scss';
import Link from "next/link";
import Rnadombtn from "./rnadombtn";

export default async function Hero() {
  // Fetch maps data
  const { data: maps, error: mapError } = await Supabase
    .from('maps')
    .select('id');

  if (mapError) {
    console.error("mapError fetching data:", mapError);
    return <p>Error loading map data.</p>;
  }

  if (!maps || maps.length === 0) {
    return <p>No maps data found.</p>;
  }

  // Log the id of all maps

  function randomMapIdFunc() {
    let randomMapId = maps[Math.floor(Math.random() * maps.length)].id;

  }

  // Fetch hero data
  const { data: hero, error } = await Supabase
    .from('hero')
    .select('id, hero_text, hero_heading, image, show_tiles, hero_cta_prim, hero_cta_sec, hero_cta_prim_link')
    .single();

  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error loading hero data.</p>;
  }

  if (!hero) {
    return <p>No hero data found.</p>;
  }

 

  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.hero_text_wrapper}>
          <h1>{hero.hero_heading}</h1>
          <p>{hero.hero_text}</p>
          {hero.hero_cta_prim && 
              <div className={styles.hero_cta_wrapper}>
                <Link className={`${styles.hero_cta}`} href={hero.hero_cta_prim_link}>{hero.hero_cta_prim}<MdArrowRightAlt/></Link>
                <Rnadombtn maps={maps} hero={hero}/>
              </div>
          }
        </div>

        {hero.image && 
          <span 
            style={{ 
              height: '1000px', 
              backgroundImage: `url(${hero.image})`, 
              backgroundSize: 'cover', 
              backgroundAttachment: 'fixed', 
              backgroundRepeat: 'no-repeat',
              minHeight: '500px', 
              maxHeight: '800px', 
              display: 'block', 
              backgroundPosition: 'center' 
            }}
          ></span>
        }
        {hero.show_tiles && <div className="tiles">Tiles are displayed</div>}
      </div>
      <div className={styles.test}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>
    </>
  );
}
