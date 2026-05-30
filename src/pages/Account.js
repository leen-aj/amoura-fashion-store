import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Account() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      fullName === "" ||
      email === "" ||
      address === "" ||
      phone === ""
    ) {

      alert("Please fill all fields");

    } else {

      alert("Account information saved successfully!");
    }
  };

  return (

    <div className="account-page">

      <div className="account-container">

        <h2 className="text-center mb-4">
          My Account
        </h2>

        <div className="profile-box">

          <p>
            <strong>User Name</strong>
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Address
          </label>

          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">
            Save Changes
          </button>

        </form>

        <div className="account-info">

          <p>
            <strong>Account Info:</strong>
          </p>

          <p>
            • Orders are linked to this account
          </p>

          <p>
            • Wishlist is saved automatically
          </p>

        </div>

      </div>

    </div>
  );
}

export default Account;