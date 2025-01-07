import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home text-center pb-5 imagge">
        <div className="container">
          <div className="image p-5">
            {" "}
            <img
              src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
              alt=""
              className="w-25"
            />
          </div>
          <div className="item-p">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-light">
              start Framework
            </h2>
            <div className="d-flex align-items-center justify-content-center ">
              <div className="edit1 me-3"></div>
              <i className="fa-solid fa-star text-light"></i>
              <div className="edit1 ms-3"></div>

            </div>
            <div className="text-light p-3">Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
