import Dubailogo from "../image/logo.png";


function Logo() {
  return (
    <div className="logo">
    <img src={Dubailogo} alt="dubai-aicon" className="logo-img" />
    <div className="logo-text">
        <b>Dubai</b>
        <b>Desert</b>
        <b>Safari</b>
    </div>
  </div>
  )
}

export default Logo