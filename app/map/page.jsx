import OrderBtn from "../components/orderBtn";
import AllMaps from "../components/allMaps";

export default function Tickets({searchParams}) {

  const currentOrder = searchParams?.order || "created_at";


  return (
    <main>
     < OrderBtn />
      <AllMaps currentOrder={currentOrder}/>
    </main>
  )
}