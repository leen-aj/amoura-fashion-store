import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StyleQuiz() {

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");
  const [tips, setTips] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const products = {

    classy: [
      {
        name: "Black Elegant Set",
        price: "80.00$",
        image: "/images/Black elegant set.jpeg"
      },
      {
        name: "Baby Pink High Heels",
        price: "115.00$",
        image: "/images/Baby pink high heels.jpeg"
      }
    ],

    feminine: [
      {
        name: "Pink Long Elegant Dress",
        price: "130.00$",
        image: "/images/pink long elegant dress.jpeg"
      },
      {
        name: "Bodyrose Ballerina",
        price: "69.99$",
        image: "/images/Bodyrose ballerina.jpeg"
      }
    ],

    casual: [
      {
        name: "Oversized White Jeans",
        price: "75.00$",
        image: "/images/Oversized white jeans.jpeg"
      },
      {
        name: "White Sport Shoes",
        price: "110.00$",
        image: "/images/White sport shoes.jpeg"
      }
    ],

    trendy: [
      {
        name: "Brown Long Suit",
        price: "99.99$",
        image: "/images/Brown long suit.jpeg"
      },
      {
        name: "Samba Shoes",
        price: "60.00$",
        image: "/images/Samba shoes.jpeg"
      }
    ]
  };

  const handleChange = (question, value) => {

    setAnswers({
      ...answers,
      [question]: value
    });
  };

  const showResult = () => {

    let classy = 0;
    let feminine = 0;
    let casual = 0;
    let trendy = 0;

    Object.values(answers).forEach((answer) => {

      if (answer === "classy") {
        classy++;
      }

      else if (answer === "feminine") {
        feminine++;
      }

      else if (answer === "casual") {
        casual++;
      }

      else if (answer === "trendy") {
        trendy++;
      }

    });

    const max = Math.max(
      classy,
      feminine,
      casual,
      trendy
    );

    if (max === classy) {

      setResult("✨ Your style is: Elegant & Classy ✨");

      setTips([
        "Choose structured outfits",
        "Neutral shades fit your style",
        "Gold accessories elevate your look"
      ]);

      setRecommended(products.classy);
    }

    else if (max === feminine) {

      setResult("💖 Your style is: Soft & Feminine 💖");

      setTips([
        "Pastel colors suit you",
        "Flowy dresses are perfect",
        "Soft accessories complete your vibe"
      ]);

      setRecommended(products.feminine);
    }

    else if (max === casual) {

      setResult("✨ Your style is: Casual & Comfortable ✨");

      setTips([
        "Minimal basics fit your aesthetic",
        "Sneakers are your best friend",
        "Keep outfits simple and clean"
      ]);

      setRecommended(products.casual);
    }

    else {

      setResult("🔥 Your style is: Trendy & Unique 🔥");

      setTips([
        "Bold pieces fit your personality",
        "Experiment with statement items",
        "Mix modern pieces together"
      ]);

      setRecommended(products.trendy);
    }
  };

  const addToCart = (product) => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    savedCart.push({
      ...product,
      quantity: 1
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(savedCart)
    );

    alert(product.name + " added to cart 🛒");
  };

  return (

    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "50px"
      }}
    >

      
      <div
        className="container mt-5 p-4 rounded"
        style={{
          backgroundColor: "#111",
          maxWidth: "750px",
          boxShadow: "0 0 20px rgba(255,182,217,0.3)"
        }}
      >

        <h1
          className="text-center mb-5"
          style={{
            color: "#ffb6d9"
          }}
        >
          ✨ Style Quiz ✨
        </h1>

        <div className="mb-4">

          <h5>1. Your go-to outfit?</h5>

          <div className="form-check">
            <input
              type="radio"
              name="q1"
              className="form-check-input"
              onChange={() =>
                handleChange("q1", "casual")
              }
            />
            <label className="form-check-label">
              Jeans & top
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q1"
              className="form-check-input"
              onChange={() =>
                handleChange("q1", "classy")
              }
            />
            <label className="form-check-label">
              Blazer & heels
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q1"
              className="form-check-input"
              onChange={() =>
                handleChange("q1", "trendy")
              }
            />
            <label className="form-check-label">
              Hoodie & sneakers
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q1"
              className="form-check-input"
              onChange={() =>
                handleChange("q1", "feminine")
              }
            />
            <label className="form-check-label">
              Floral dress
            </label>
          </div>

        </div>

        <div className="mb-4">

          <h5>2. Favorite colors?</h5>

          <div className="form-check">
            <input
              type="radio"
              name="q2"
              className="form-check-input"
              onChange={() =>
                handleChange("q2", "classy")
              }
            />
            <label className="form-check-label">
              Neutrals
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q2"
              className="form-check-input"
              onChange={() =>
                handleChange("q2", "feminine")
              }
            />
            <label className="form-check-label">
              Pastels
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q2"
              className="form-check-input"
              onChange={() =>
                handleChange("q2", "trendy")
              }
            />
            <label className="form-check-label">
              Bold colors
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q2"
              className="form-check-input"
              onChange={() =>
                handleChange("q2", "casual")
              }
            />
            <label className="form-check-label">
              Denim basics
            </label>
          </div>

        </div>
        <div className="mb-4">

          <h5>3. Shoes?</h5>

          <div className="form-check">
            <input
              type="radio"
              name="q3"
              className="form-check-input"
              onChange={() =>
                handleChange("q3", "casual")
              }
            />
            <label className="form-check-label">
              Sneakers
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q3"
              className="form-check-input"
              onChange={() =>
                handleChange("q3", "classy")
              }
            />
            <label className="form-check-label">
              Heels
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q3"
              className="form-check-input"
              onChange={() =>
                handleChange("q3", "trendy")
              }
            />
            <label className="form-check-label">
              Chunky sneakers
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="q3"
              className="form-check-input"
              onChange={() =>
                handleChange("q3", "feminine")
              }
            />
            <label className="form-check-label">
              Flats
            </label>
          </div>

        </div>

        <button
          onClick={showResult}
          className="btn fw-bold w-100 mt-4"
          style={{
            backgroundColor: "#ffb6d9",
            color: "black"
          }}
        >
          Discover My Style
        </button>

        {result && (

          <div
            className="mt-5 p-4 rounded"
            style={{
              backgroundColor: "#222"
            }}
          >

            <h3
              className="text-center mb-4"
              style={{
                color: "#ffb6d9"
              }}
            >
              {result}
            </h3>

            <h5>Style Tips 💡</h5>

            <ul>

              {tips.map((tip, index) => (

                <li key={index}>
                  {tip}
                </li>

              ))}

            </ul>

            <h4
              className="mt-5 mb-4 text-center"
              style={{
                color: "#ffb6d9"
              }}
            >
              Recommended For You ✨
            </h4>

            <div className="row">

              {recommended.map((item, index) => (

                <div
                  className="col-md-6 mb-4"
                  key={index}
                >

                  <div className="card p-3 h-100 text-center">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{
                        height: "280px",
                        objectFit: "cover"
                      }}
                    />

                    <h5 className="mt-3">
                      {item.name}
                    </h5>

                    <p>
                      {item.price}
                    </p>

                    <button
                      className="btn btn-dark"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default StyleQuiz;