import styles from '../Styles/_selectedMaps.module.scss';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";


const SelectedMaps = ({ map }) => {
    return (
        <Link href={`/map/${map.id}`} passHref className={styles.selected_maps_card}>
            <div
                className={styles.selected_maps_span}
                style={{ 
                    backgroundImage: `url(${map.selected_image})`, 
            }}
            >
                   {map.selected_banner && 
                <span className={styles.selected_banner}>
                    <p>
                    {map.selected_banner_text}
                    </p>
                </span>
            }
            <div className={styles.selected_banner_info}>
            <h4>{map.title}</h4>
            <MdArrowRightAlt/>
            </div>
            </div>
         

        
        </Link>   
    )
}

export default SelectedMaps