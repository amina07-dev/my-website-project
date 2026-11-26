import React from "react";
import Crumbelle_1 from "../assets/Crumbelle_1.png";
import Crumbelle_2 from "../assets/Crumbelle_2.png";
import Crumbelle_3 from "../assets/Crumbelle_3.png";
import CupCake from "../assets/CupCake.png";
import Cake_1 from "../assets/cake_1.png";
import Cake_2 from "../assets/cake_2.png";
import Cake_3 from "../assets/cake_3.png";
import '../assets/CSS/home.css';

const headingColor = {
  color: "white",
  backgroundColor: "#C8A2C8",
  fontSize: "50",
};
const Home = () => {
  return (
    <>
      <section>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Crumbelle_1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Crumbelle_2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Crumbelle_3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              iusto tenetur quidem maiores excepturi, atque, natus iure
              voluptates explicabo voluptatum repellat ex quasi, praesentium
              obcaecati! Obcaecati velit accusamus assumenda nisi. Aliquid quasi
              delectus ipsa. Provident, nam tempora mollitia numquam animi
              explicabo architecto, fugiat vel nemo sequi, quod hic maxime?
              Rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid iusto tenetur quidem maiores excepturi, atque, natus iure
              voluptates explicabo voluptatum repellat ex quasi, praesentium
              obcaecati! Obcaecati velit accusamus assumenda nisi. Aliquid quasi
              delectus ipsa. Provident, nam tempora mollitia numquam animi
              explicabo architecto, fugiat vel nemo sequi, quod hic maxime?
              Rerum?
            </div>
            <div className="col-md-6 p-4 ">
              <img src={CupCake} className="img-fluid" alt="Cupcake" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={Cake_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={Cake_2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={Cake_3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 style={{ color: "white", backgroundColor: "pink" }}>Hi</h1>

        <h1 style={headingColor}>Hi</h1>

        <h1 className="heading"> Welcome</h1>
      </section>
    </>
  );
};

export default Home;
