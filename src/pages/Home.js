// Home page completed
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <div id="hero" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">

            <img
              src="/images/Amoura.jpeg"
              className="d-block w-100"
              alt="Fashion"
            />

            <div className="carousel-caption">

              <h1>Bold & Elegant</h1>
              <p>Discover your signature style</p>
              <Link to="/product" className="btn btn-pink">
                Shop Now!
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800"
              className="d-block w-100"
              alt="Fashion"
            />

            <div className="carousel-caption">

              <h1>Chic & Modern</h1>

              <Link to="/product" className="btn btn-pink">
                Explore
              </Link>

            </div>

          </div>

        </div>

      </div>

      <section className="category-section">

        <h2>Shop By Category</h2>

        <div className="category-row">

          <Link
            to="/product#tops"
            className="cat"
            style={{ color: "palevioletred" }}
          >
            Tops
          </Link>

          <Link
            to="/product#bottoms"
            className="cat"
            style={{ color: "palevioletred" }}
          >
            Bottoms
          </Link>

          <Link
            to="/product#dresses"
            className="cat"
            style={{ color: "palevioletred" }}
          >
            Dresses
          </Link>

          

          <Link
            to="/product#shoes"
            className="cat"
            style={{ color: "palevioletred" }}
          >
            Shoes
          </Link>

        </div>
      </section>
      <section className="pink-section">

        <Link to="/quiz" className="pink-title">
          Take Style Quiz!!!
        </Link>

      </section>
      <section className="products">
        <h2>New Arrival</h2>
        <div className="product-container">

          <div className="product-card">
            <img
              src="/images/White drapy sheer dress.jpeg"
              width="200"
              alt="White Dress"
            />
            <h5>White Dress</h5>

          </div>

          <div className="product-card">

            <img
              src="/images/3 piece off white track suit.jpeg"
              width="200"
              alt="Beige Set"
            />

            <h5>Beige Set</h5>

          </div>

          <div className="product-card">

            <img
              src="/images/Baby pink high heels.jpeg"
              width="300"
              alt="Pink Heels"
            />

            <h5>Baby Pink Heels</h5>

          </div>

        </div>

      </section>

      <section className="create-account">

        <div className="container text-center">

          <h2>Join the LuxeStyle Experience</h2>

          <p>
            Unlock exclusive collections, save your measurements,
            and get personalized styling.
          </p>

          <Link
            to="/account"
            className="btn btn-pink btn-lg"
          >
            Create Your Account Now
          </Link>

        </div>

      </section>

      <section className="reviews">

        <h2>What Our Customers Say</h2>

        <div className="review-container">

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Absolutely stunning quality.
              I feel so confident wearing Amoura."
            </p>

            <h6>- Sarah M.</h6>

          </div>

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "The fit is perfect thanks to the
              measurement feature. Love it!"
            </p>

            <h6>- Lina K.</h6>

          </div>

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Elegant, modern, and high quality.
              My favorite fashion brand."
            </p>

            <h6>- Maya A.</h6>

          </div>

        </div>

      </section>

      <section className="about-shop">

        <div className="about-content">

          <h2>About LuxeStyle</h2>

          <p>
            Amoura is more than fashion — it's confidence,
            elegance, and identity. We design pieces that empower
            women to feel bold, stylish, and unforgettable.
          </p>

        </div>

        <div className="about-image">

          <img
            src="/images/Offwhite button up dress.jpeg"
            alt="Fashion"
          />

        </div>

      </section>

      <footer>
        <p>© 2026 Amoura</p>
      </footer>

    </>
  );
}

export default Home;