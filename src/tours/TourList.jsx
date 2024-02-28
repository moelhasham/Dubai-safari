import "./tour.css"

import TourItem from "./TourItem"

function TourList({toursList}) {

    
  return (
    <div className="tour-list">
       {toursList.map(tour =>
        <TourItem tour={tour} key={tour.id}/>
       )}
    </div>
  )
}

export default TourList