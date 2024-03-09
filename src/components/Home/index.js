import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-bg-container">
      <div className="card-container">
        <div className="image-logo">
          <img
            alt="clothes that get you noticed"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            className="image-size"
          />
        </div>

        <div className="container">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <p className="home-paragraph">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="button-style" type="button">
            Shop Now
          </button>
        </div>
        <img
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          className="img-size"
        />
      </div>
    </div>
  </>
)

export default Home
