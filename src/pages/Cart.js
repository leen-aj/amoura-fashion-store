import { useEffect, useState } from "react";
import "../styles/cart.css"
import { Link } from "react-router-dom";
//laalal
function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);

  }, []);

  const updateCart = (updatedCart) => {

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          quantity: item.quantity + 1
        };

      }

      return item;

    });

    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) => {

      if (item.id === id && item.quantity > 1) {

        return {
          ...item,
          quantity: item.quantity - 1
        };

      }

      return item;

    });

    updateCart(updatedCart);
  };

  const removeItem = (id) => {

    const updatedCart =
      cartItems.filter((item) => item.id !== id);

    updateCart(updatedCart);
  };

  const addRecommendationToCart = (product) => {

    const existingProduct =
      cartItems.find((item) => item.id === product.id);

    let updatedCart;

    if (existingProduct) {

      updatedCart = cartItems.map((item) => {

        if (item.id === product.id) {

          return {
            ...item,
            quantity: item.quantity + 1
          };

        }

        return item;

      });

    } else {

      updatedCart = [

        ...cartItems,

        {
          ...product,
          quantity: 1
        }

      ];

    }

    updateCart(updatedCart);
  };

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );

  const recommendations = [

    {
      id: 101,
      name: "Baby pink high heels",
      price: 115,
      image: "/images/Baby pink high heels.jpeg"
    },

    {
      id: 102,
      name: "White drapy sheer dress",
      price: 150,
      image: "/images/White drapy sheer dress.jpeg"
    },

    {
      id: 103,
      name: "Black elegant set",
      price: 80,
      image: "/images/Black elegant set.jpeg"
    }

  ];

  return (

    <div className="cart-page">

      <div className="container py-5">

        <h1 className="cart-title">
          Your Cart
        </h1>

        <div className="cart-box">

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <h3>
                Your cart is empty 🛒
              </h3>

            </div>

          ) : (

            <>

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="item-details">

                    <h4>
                      {item.name}
                    </h4>

                    <p>
                      Price: ${item.price}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p>
                      Product Total:
                      ${item.price * item.quantity}
                    </p>

                  </div>

                  <div className="quantity-buttons">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

              <div className="total-section">

                <h2>
                  Cart Total: ${totalPrice}
                </h2>

                <Link
                 to="/checkout"
                  className="btn btn-dark mt-3">

                  Proceed to Checkout
                 </Link>

              </div>

            </>

          )}

        </div>

        {cartItems.length > 0 && (

          <div className="recommend-section">

            <h2>
              Recommended Outfit Ideas ✨
            </h2>

            <div className="recommend-container">

              {recommendations.map((item) => (

                <div
                  className="recommend-card"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <h5>
                    {item.name}
                  </h5>

                  <p>
                    ${item.price}
                  </p>

                  <button
                    onClick={() =>
                      addRecommendationToCart(item)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;