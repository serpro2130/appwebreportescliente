import React from "react";

export const Carousel = () => {
  return (
    <main id="main">
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../public/assets/logo.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>Visión</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
