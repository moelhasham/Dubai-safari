import "./news-letter.css"
import newsletterimage from "../image/newsletterimage.jpg"
function NewsLetter() {
  return (
    <div className="news-letter">
        <div className="news-letter-cont">
            <div className="news-letter-image-wrapper">
               <img src={newsletterimage} alt="newsletterimage" className="news-letter-imge" /> 
            </div>
            <div className="news-letter-content">
                <h2 className="news-letter-content-title">
                    Your dubai is waiting
                </h2>
                <p className="news-letter-content-desc">
                    Recive a cuated mohammgthb fghyjbthy
                </p>
                <div className="news-letter-inputs">
                    <input type="text"  className="news-letter-input" placeholder="email" />
                    <button className="news-letter-btn">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter