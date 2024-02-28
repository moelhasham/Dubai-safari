import "./hero-header.css";

function Heroheader() {
  return (
    <div className="hero-header">
        <div className="serch-box">
            <div className="input-wrapper">
                <i className="bi bi-search"></i>
                <input type="search" placeholder="what loking" className="search-box-input" />  
            </div>
            <button className="search-box-btn">search</button>
        </div>
        <div className="hero-header-title">
            <h3>Dubai</h3>
            <h1>Desert</h1>
        </div>
    </div>
  );
}

export default Heroheader