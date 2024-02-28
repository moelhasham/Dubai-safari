import React from 'react'

function BookNow({pricefrom}) {
  return (
    <div className="book-now">
    <div className="book-now-header">Save Up to 35%</div>
    <div className="book-now-body">
      <div className="book-now-booked"> Booked 42 times </div>
      <div className="book-now-price-wrapper">
        <div className="book-now-price">
          <b>${pricefrom}</b>
          <p>per person</p>
        </div>
        <button className="book-now-btn"> Book now</button>
      </div>
      <p className="book-now-more-info">
        <i className="bi bi-calendar-check"></i>
        <span>gjnhgjhjgmhn</span>
        ghtghyyjhythntyhnynynn
      </p>
    </div>
 </div>
  )
}

export default BookNow