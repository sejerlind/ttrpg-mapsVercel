import { notFound } from "next/navigation";
import supabase from "../../config/supabaseClient";

async function getMap(id) {
  const { data, error } = await supabase
    .from('maps')  // Replace with your actual table name
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    throw new Error('Map not found');
  }
  return data;
}

export default async function MapDetails({ params }) {
  try {
    const map = await getMap(parseInt(params.id));

    return (
      <main className="container mx-auto min-h-screen flex justify-center items-center">
        <div className="Card">
          <div className="p-4 rounded-md flex items-center flex-wrap justify-center md:flex-nowrap">
            <div className="p-10">
              <h3 className="text-xl font-semibold">{map.title}</h3>
              <h3 className="text-xl font-semibold">{}</h3>
              <div className="mt-4">
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
    return null;
  }
}
