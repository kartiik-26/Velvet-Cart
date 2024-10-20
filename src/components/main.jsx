import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/background.jpg"
            alt="Card"
            style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
            <h5 className="card-title fw-lighter" style={{ fontSize: "5rem" }}>This Season's Picks</h5>

              <p className="card-text fs-5 d-none d-sm-block ">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
