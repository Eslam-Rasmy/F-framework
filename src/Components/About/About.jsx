import React from "react";
import { Helmet } from "react-helmet";


const About = () => {
  return (
    <>
    <Helmet>
        <title>About</title>
      </Helmet>
      <div className="home p-5">
        <div className="container pt-5">
          <div className="row">
            <div className="abou1 p-5">
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center text-light">
                about component
              </h2>
              <div className="d-flex align-items-center justify-content-center ">
                <div className="edit1 me-3"></div>
                <i className="fa-solid fa-star text-light"></i>
                <div className="edit1 ms-3"></div>
              </div>
            </div>
            <div className="about2 pb-5">
              <div className="container">
                <div className="row px-5">
                  <div className="col-md-6 ps-md-5">
                    <p className="text-light">
                      Freelancer is a free bootstrap theme created by Route. The
                      download includes the complete source files including
                      HTML, CSS, and JavaScript as well as optional SASS
                      stylesheets for easy customization.
                    </p>
                  </div>
                  <div className="col-md-6 pe-5">
                    <p className="text-light">
                      Freelancer is a free bootstrap theme created by Route. The
                      download includes the complete source files including
                      HTML, CSS, and JavaScript as well as optional SASS
                      stylesheets for easy customization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
