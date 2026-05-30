import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Measurement() {

  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [height, setHeight] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = () => {

    if (
      bust === "" ||
      waist === "" ||
      hips === "" ||
      height === ""
    ) {

      setMessage("Please enter all measurements");

    } else {

      setMessage(
        "Measurements saved successfully 💖"
      );
    }
  };

  return (

    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "40px",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >


      <div
        className="container mt-5 p-4 rounded shadow"
        style={{
          backgroundColor: "#0d0d0d",
          maxWidth: "900px"
        }}
      >

        <h1
          className="text-center mb-3"
          style={{ color: "#ffb6d9" }}
        >
          Find Your Perfect Size
        </h1>

        <p className="text-center text-secondary mb-5">
          Enter your measurements in centimeters (cm)
        </p>

        <div className="row">

          <div className="col-md-6 mb-4">

            <label className="mb-2">
              Bust
            </label>

            <input
              type="number"
              placeholder="e.g. 85"
              className="form-control"
              value={bust}
              onChange={(e) => setBust(e.target.value)}
            />

          </div>

          <div className="col-md-6 mb-4">

            <label className="mb-2">
              Waist
            </label>

            <input
              type="number"
              placeholder="e.g. 65"
              className="form-control"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />

          </div>

          <div className="col-md-6 mb-4">

            <label className="mb-2">
              Hips
            </label>

            <input
              type="number"
              placeholder="e.g. 90"
              className="form-control"
              value={hips}
              onChange={(e) => setHips(e.target.value)}
            />

          </div>

          <div className="col-md-6 mb-4">

            <label className="mb-2">
              Height
            </label>

            <input
              type="number"
              placeholder="e.g. 165"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

          </div>

        </div>

        <button
          onClick={handleSubmit}
          className="btn w-100 fw-bold"
          style={{
            backgroundColor: "#ffb6d9",
            color: "black",
            padding: "15px",
            borderRadius: "12px"
          }}
        >
          Save Your Measurements
        </button>

        {message && (

          <div className="alert alert-info mt-4">

            {message}

          </div>

        )}

        <div className="mt-5">

          <h2
            className="text-center mb-4"
            style={{ color: "#ffb6d9" }}
          >
            Size Guide
          </h2>

          <table className="table table-dark table-bordered text-center">

            <thead>

              <tr>

                <th>Size</th>
                <th>Bust (cm)</th>
                <th>Waist (cm)</th>
                <th>Hips (cm)</th>

              </tr>

            </thead>

            <tbody>

              <tr>
                <td>XS</td>
                <td>76 - 82</td>
                <td>58 - 64</td>
                <td>82 - 88</td>
              </tr>

              <tr>
                <td>S</td>
                <td>82 - 88</td>
                <td>64 - 70</td>
                <td>88 - 94</td>
              </tr>

              <tr>
                <td>M</td>
                <td>88 - 94</td>
                <td>70 - 76</td>
                <td>94 - 100</td>
              </tr>

              <tr>
                <td>L</td>
                <td>94 - 100</td>
                <td>76 - 82</td>
                <td>100 - 106</td>
              </tr>

              <tr>
                <td>XL</td>
                <td>100 - 108</td>
                <td>82 - 90</td>
                <td>106 - 114</td>
              </tr>

            </tbody>

          </table>

          <p className="text-center text-secondary mt-3">
            Compare your measurements with the table above to find your best fit !💖
          </p>

        </div>

      </div>

    </div>
  );
}

export default Measurement;