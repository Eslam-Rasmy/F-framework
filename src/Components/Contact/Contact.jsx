import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const inputChange = (e) => {
    const label = e.target.previousSibling;
    if (e.target.value) {
      label.classList.remove("_top");
    } else {
      label.classList.add("_top");
    }
  };    

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="container pt-5 contact">
        <div className="row pt-5">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center pt-5">
            contact section
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>
        <div className="row">
          <form
            action=""
            className="w-50 p-3 mx-auto mt-5"
            onSubmit={formSubmit}
          >
            <label htmlFor="userName" className="position-relative _top">
              userName:
            </label>
            <input
              type="text"
              id="userName"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative"
              onChange={inputChange}
            />
            <label htmlFor="userAge" className="position-relative _top">
              userAge:
            </label>
            <input
              type="text"
              id="userAge"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom py-3 position-relative"
              onChange={inputChange}
            />
            <label htmlFor="userEmail" className="position-relative _top">
              userEmail:
            </label>
            <input
              type="text"
              id="userEmail"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative"
              onChange={inputChange}
            />
            <label htmlFor="userPassword" className="position-relative _top">
              userPassword:
            </label>
            <input
              type="text"
              id="userPassword"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative"
              onChange={inputChange}
            />
            <button className="mt-5 mb-5">send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
