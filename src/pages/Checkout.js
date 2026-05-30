import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//jkkjhghjp
function Checkout() {
    const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      fullName === "" ||
      address === "" ||
      card === ""
    ) {

      alert("Please fill all fields");

    } else {

      localStorage.removeItem("cart");

      navigate("/thanks");
    }
  };

  return (

    <div
      style={{
        backgroundColor: "#ffb6d9",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "black",
          borderBottom: "2px solid #ffb6d9"
        }}
      >

        <div className="container-fluid px-4">

          <a
            className="navbar-brand fw-bold"
            href="/"
            style={{
              color: "#ffb6d9"
            }}
          >
            <i className="fas fa-crown me-2"></i>
            Amoura
          </a>

        </div>

      </nav>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "85vh"
        }}
      >

        <div
          className="bg-white p-4 rounded shadow"
          style={{
            width: "100%",
            maxWidth: "400px"
          }}
        >

          <h1
            className="text-center mb-4"
            style={{
              fontSize: "32px"
            }}
          >
            Checkout
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              className="form-control mb-3"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{
                padding: "10px",
                borderRadius: "8px"
              }}
            />

            <input
              type="text"
              placeholder="Address"
              className="form-control mb-3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={{
                padding: "10px",
                borderRadius: "8px"
              }}
            />

            <input
              type="text"
              placeholder="Card Number"
              className="form-control mb-4"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              required
              style={{
                padding: "10px",
                borderRadius: "8px"
              }}
            />

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                borderRadius: "8px",
                fontWeight: "bold"
              }}
            >
              Pay Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Checkout;