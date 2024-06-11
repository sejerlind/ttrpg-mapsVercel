
import MapCard from "./mapCard";
import Supabase from "../config/supabaseClient";

export default async function AllMaps({limt}) {


    const { data: maps, error } = await Supabase
      .from('maps')
      .select('id, title, image')
      .range(0, limt)

    if (error) {
      console.error("Error fetching data:", error);
      return <p>Error loading posts.</p>;
    }
  
    if (!maps || maps.length === 0) {
      return <p>No posts found.</p>;
    }

    // if (newMaps && newMaps.length > 0) {
    //   setMaps(prevMaps => [...prevMaps, ...newMaps]); // Append new data to existing data
    // }

    console.log(limt)
  
    return (
        <div>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>
          <p>hej</p>

          {maps.map((map) => (
            <div key={map.id}>
              <MapCard key={map.id} map={map} />
            </div>
          ))}                                                         
        </div>
    );
};