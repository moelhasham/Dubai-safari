
import Rating from "./Rating";
import { Link } from "react-router-dom";



function TourItem({tour}) {
  return (
    <div className="tour-item">  
    <img src={tour.image} alt={tour.title} className="tour-item-img" />
    <span className="tour-item-label">ADVENTURE</span>
    <div className="tour-item-body">
       <div className="tour-item-title">{tour.title}</div>
       <div className="tour-item-duration">
          <span>{tour.duration}</span> <i className="bi bi-dot"></i>
          Pickup availabel
       </div>
       <Rating rating={tour.rating} rev={tour.reviews} />
       <div className="tour-item-price">
          <strong>From ${tour.priceFrom}</strong> per person
       </div>
       <Link to={`/tour/${tour.id}`} className="tour-item-link">
          See more
       </Link>
    </div>
 </div>
  )
}

export default TourItem