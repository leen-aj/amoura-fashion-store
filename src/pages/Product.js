import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//products added
function Product() {

  const [message, setMessage] = useState("");

  const location = useLocation();

  useEffect(() => {

    if (location.hash) {

      const section =
        document.querySelector(location.hash);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth"
        });

      }

    }

  }, [location]);

  const products = [

    {
      category: "Tops",

      items: [

        {
          id: 1,
          name: "White drapy shirt",
          price: 60,
          image: "/images/white drapy shirt.jpeg"
        },

        {
          id: 2,
          name: "Stripped shirt",
          price: 45,
          image: "/images/stripped shirt.jpeg"
        },

        {
          id: 3,
          name: "Shirt with gold details",
          price: 75,
          image: "/images/shirt with gold details.jpeg"
        }

      ]
    },

    {
      category: "Bottoms",

      items: [

        {
          id: 4,
          name: "Beige classic straight leg pants",
          price: 60,
          image: "/images/Beige classic straight leg pants.jpeg"
        },

        {
          id: 5,
          name: "Oversized White jeans",
          price: 75,
          image: "/images/Oversized white jeans.jpeg"
        }

      ]
    },

    {
      category: "Dresses",

      items: [

        {
          id: 6,
          name: "White drapy sheer dress",
          price: 150,
          image: "/images/White drapy sheer dress.jpeg"
        },

        {
          id: 7,
          name: "Black elegant dress",
          price: 80,
          image: "/images/Black elegant dress with white details.jpeg"
        }

      ]
    },

    {
      category: "Shoes",

      items: [

        {
          id: 8,
          name: "Baby pink high heels",
          price: 115,
          image: "/images/Baby pink high heels.jpeg"
        },

        {
          id: 9,
          name: "Samba shoes",
          price: 60,
          image: "/images/Samba shoes.jpeg"
        }

      ]
    }

  ];

  const addToCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct =
      existingCart.find((item) => item.id === product.id);

    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      existingCart.push({
        ...product,
        quantity: 1
      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    setMessage(product.name + " added to cart 🛒");
  };

  const addToWishlist = (product) => {

    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists =
      existingWishlist.find((item) => item.id === product.id);

    if (!alreadyExists) {

      existingWishlist.push(product);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(existingWishlist)
      );

      setMessage(product.name + " added to wishlist 💖");

    } else {

      setMessage("Item already in wishlist 💖");

    }

  };

  return (

    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        paddingBottom: "50px"
      }}
    >

      <h1
        className="text-center py-5"
        style={{
          color: "#ffb6d9"
        }}
      >
        All Products
      </h1>

      {message && (

        <div className="container mb-4">

          <div className="alert alert-success text-center">

            {message}

          </div>

        </div>

      )}

      {products.map((section) => (

        <div
          className="container mb-5"
          id={section.category.toLowerCase()}
          key={section.category}
        >

          <h2
            className="mb-4"
            style={{
              color: "#ffb6d9"
            }}
          >
            {section.category}
          </h2>

          <div className="row">

            {section.items.map((product) => (

              <div
                className="col-md-4 mb-4"
                key={product.id}
              >

                <div
                  className="card bg-dark text-light p-3 h-100"
                  style={{
                    border: "1px solid #ffb6d9",
                    borderRadius: "15px"
                  }}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded"
                    style={{
                      height: "350px",
                      objectFit: "cover"
                    }}
                  />

                  <h5 className="mt-3">
                    {product.name}
                  </h5>

                  <p>
                    ${product.price}
                  </p>

                  <div className="d-flex gap-2 mt-auto">

                    <button
                      className="btn w-50"
                      style={{
                        backgroundColor: "#ffb6d9",
                        color: "black",
                        fontWeight: "bold"
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="btn btn-outline-light w-50"
                      onClick={() => addToWishlist(product)}
                    >
                      Wishlist
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default Product;