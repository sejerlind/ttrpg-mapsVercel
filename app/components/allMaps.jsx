// import Supabase from "../../config/supabaseClient";
import MapCard from "./mapCard";
import Supabase from "../config/supabaseClient";

export default async function AllMaps(currentOrder) {
  
    const { data: maps, error } = await Supabase
      .from('maps')
      .select('id, title, image')
      .order(currentOrder.currentOrder, { ascending: false });
  
    if (error) {
      console.error("Error fetching data:", error);
      return <p>Error loading posts.</p>;
    }
  
    if (!maps || maps.length === 0) {
      return <p>No posts found.</p>;
    }
  
    return (
        <div>
          {maps.map((map) => (
            <div key={map.id}>
              <MapCard key={map.id} map={map} />
            </div>
          ))}
        </div>
    );
};