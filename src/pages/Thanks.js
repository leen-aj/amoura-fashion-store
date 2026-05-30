import "bootstrap/dist/css/bootstrap.min.css";

function Thanks() {

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffb6d9",
        overflow: "hidden",
        position: "relative"
      }}
    >

      <div
        style={{
          position: "absolute",
          fontSize: "300px",
          color: "black",
          animation: "beat 1s infinite"
        }}
      >
        ❤
      </div>
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          color: "white"
        }}
      >

        <h1
          style={{
            fontWeight: "bold"
          }}
        >
          THANKS FOR YOUR ORDER !
        </h1>

        <p
          style={{
            fontSize: "20px"
          }}
        >
          YOUR ORDER HAS BEEN MADE
        </p>

      </div>
      <style>
        {`
          @keyframes beat {

            0%, 100% {
              transform: scale(2);
            }

            50% {
              transform: scale(2.2);
            }

          }
        `}
      </style>

    </div>
  );
}

export default Thanks;