import React, { useState } from "react";
import { Helmet } from "react-helmet";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

const PORTFOLIO = () => {
  const [image, setImage] = useState(null); 

  function changeImage(e) {
    const imgSrc = e.currentTarget.querySelector("img").src; 
    setImage(imgSrc); 
    const modal = document.querySelector(".d-none");
    if (modal) {
      modal.classList.remove("d-none"); 
      modal.querySelector("img").src = imgSrc; 
    }
  }

  function closeModal(e) {
    if (e.target.classList.contains("exit")) {
      const modal = document.querySelector(".exit");
      if (modal) {
        modal.classList.add("d-none");
      }
    }
  }
  

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="container pt-5">
        <div className="row pt-5">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center pt-5">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <div className="img1 p-4 col-12  col-sm-12 col-lg-4 col-md-6" onClick={changeImage}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-light"></i>
                </div>
              </div>
            </div>
            <div className="img1 p-4 col-12  col-sm-12 col-lg-4 col-md-6" onClick={changeImage}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-light"></i>
                </div>
              </div>
            </div>
            <div className="img1 p-4 col-12  col-sm-12 col-lg-4 col-md-6" onClick={changeImage}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-light"></i>
                </div>
              </div>
            </div>
            <div className="img1 p-4 col-12  col-sm-12 col-lg-4 col-md-6" onClick={changeImage}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-light"></i>
                </div>
              </div>
            </div>
            <div className="img1 p-4 col-12  col-sm-12 col-lg-4 col-md-6" onClick={changeImage}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-light"></i>
                </div>
              </div>
            </div>
            <div className="img1 p-4 col-12  col-sm-12 col-lg-4 col-md-6" onClick={changeImage}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-light"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div
          className="exit d-none position-fixed start-0 top-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
          onClick={closeModal}
        >
          <img src={image} alt="modal" className="wed" />
        </div>
      </div>
    </>
  );
};

export default PORTFOLIO;
