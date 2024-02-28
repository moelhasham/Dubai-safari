import Heroheader from "../../components/hero=header/Heroheader"
import Services from "../../components/services/Services"
import TourList from "../../tours/TourList"
import Pagination from "../../components/pagination/Pagination"
import SortInput from "../../components/sort-input/SortInput"
import Banner from "../../components/banner/Banner"
import NewsLetter from "../../components/news-letter/NewsLetter"
import { toursList } from "../../data"
import { useState } from "react"
import { paginate } from "../../utils/pagination"

function Home() {
  const [currentPage , setcurrentPage] = useState(1);
  const [sortItem , setSortItem] = useState("recomended");

 

  // Sort Tour
  const sortedTourList = 
  sortItem === "low" ? toursList.sort((a,b) => a.priceFrom - b.priceFrom)
   : sortItem === "high" ? toursList.sort((a,b) => b.priceFrom - a.priceFrom) 
   :toursList.sort((a,b) => b.rating - a.rating )

 
  const { pages , tours}
   = paginate(toursList.length, sortedTourList , currentPage )
  return (
    <div> <Heroheader />
    <Services />
    <SortInput setSortItem={setSortItem} sortItem={sortItem}  toursLength={toursList.length}/>
    <TourList toursList={tours}/>
    <Pagination 
     pages={pages}
     currentPage={currentPage}
     setCurrentPage={setcurrentPage}   
     />
     <Banner />
     <NewsLetter/></div>
  )
}

export default Home