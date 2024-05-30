
// import OrderBtn from "./components/OrderBtn";
// import AllMaps from "./components/allMaps";
import Hero from "./components/hero";

export default async function Home({searchParams}) {

  const currentOrder = searchParams?.order || "created_at";

  return (
    <main>
      <Hero />
      {/* < OrderBtn />
      <AllMaps currentOrder={currentOrder}/> */}
    </main>
  );
}
