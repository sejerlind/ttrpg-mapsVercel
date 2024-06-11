import AllMaps from "../components/allMaps";
import SelectedMaps from "../components/selectedMaps";
import Search from "../components/searchMaps";
import { Suspense } from "react"


export default function Tickets({searchParams}) {

  const limt = searchParams?.limt || '';

  return (
    <main>
      {/* //knap load more  add loader til Suspense*/}
      <Suspense>
        <AllMaps limt={limt} />
      </Suspense>
      <Search />

    </main>
  )
}