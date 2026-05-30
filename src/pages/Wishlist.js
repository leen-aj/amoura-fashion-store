import { useEffect, useState } from "react";
import "../styles/wishlist.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Wishlist() {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setItems(savedWishlist);

  }, []);

  const removeItem = (index) => {

    const updatedItems =
      items.filter((item, i) => i !== index);

    setItems(updatedItems);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedItems)
    );
  };

  const addToCart = (product) => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct =
      savedCart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingProduct) {

      updatedCart = savedCart.map((item) => {

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

        ...savedCart,

        {
          ...product,
          quantity: 1
        }

      ];

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert(product.name + " added to cart 🛒");
  };

  return (

    <div className="wishlist-page">

      <div className="container py-5">

        <h1 className="wishlist-title">
          My Wishlist
        </h1>

        {items.length === 0 ? (

          <div className="empty-wishlist">

            <h3>
              Wishlist is empty 💖
            </h3>

          </div>

        ) : (

          <div className="wishlist-container">

            {items.map((item, index) => (

              <div
                className="wishlist-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h4>
                  {item.name}
                </h4>

                <p>
                  ${item.price}
                </p>

                <div className="wishlist-buttons">

                  <button
                    className="cart-btn"
                    onClick={() =>
                      addToCart(item)
                    }
                  >
                    Add to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(index)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Wishlist;