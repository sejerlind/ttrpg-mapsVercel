import Image from 'next/image'

const MapCard = ({ map }) => {
    return (
        <div className="smoothie-card">
        <p>{map.title}</p>
        <p>{map.metho}</p>
        <Image
            src={map.image}
            width={566}
            height={425}
            alt="map"
            loading = 'lazy'
        />
            <div className="rating">{map.rating}</div>
        </div>   
    )
}

export default MapCard