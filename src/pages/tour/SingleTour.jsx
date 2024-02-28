
import "./single-tour.css"
import { useParams } from 'react-router-dom'
import { toursList } from '../../data'
import Rating from '../../tours/Rating'
import BookNow from "./BookNow"

function SingleTour() {
  const {id} = useParams()
  
   const result =toursList.find(t =>  t.id === +id)

  

  return (
    <section className='tour'>
      <div className="tour-step">
        united arab emirates <i className="bi bi-chevron-right"></i>
         Dubai <i className="bi bi-chevron-right"></i> Safari
      </div>
      <div className="tour-category">
         ADVENTURE
      </div>
      <h1 className="tour-title">Dubai:{result.title}</h1>
      <div className="tour-info">
        <Rating rating={result.rating} rev={result.reviews} />
        <div className="tour-provider">
           Activity provider : <span> Mohammed Elhasam</span>
        </div>
      </div>
      <div className="tour-img-wrapper">
         <img src={result.image} alt={result.title} className="tour-img" />
         <BookNow pricefrom={result.priceFrom} />
      </div>

      <p className="tour-desc">
      A tour description is a way to inform
       
      </p>
      <div className="tour-more-info">
        <h2 className="tour-info-title">About this  actie</h2>
        <div className="tour-info-item">
           <div className="tour-info-item-title">
           <i className="bi bi-calendar3"></i>
          Free cancellation
           </div>
           <p className="tour-info-item-desc">
           Now that you know why tour descriptions areimportant
           let’s see how you can write them
           </p>
        </div>
        <div className="tour-info-item">
           <div className="tour-info-item-title">
           <i className="bi bi-calendar3"></i>
          Free cancellation
           </div>
           <p className="tour-info-item-desc">
           Now that you know why tour descriptions areimportant
           let’s see how you can write them
           </p>
        </div>
        <div className="tour-info-item">
           <div className="tour-info-item-title">
           <i className="bi bi-calendar3"></i>
          Free cancellation
           </div>
           <p className="tour-info-item-desc">
           Now that you know why tour descriptions areimportant
           let’s see how you can write them
           </p>
        </div>
      </div>
  
      
    </section>
  )
}

export default SingleTour