import React from 'react';
 
const Footer = () => {
    return (
        <>
          <footer>
        <div className="footer text-center">
          <div className="container text-center">
            <div className="sec1 m-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="item1 wid col-sm-12 col-md-4 pt-sm-4">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
                <div className="item2 wid col-sm-12 col-md-4 pt-sm-4">
                  <h3>AROUND THE WEB</h3>
                  <div className="d-flex  justify-content-center align-items-center">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-invision"></i>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
                <div className="item3 wid col-sm-12 col-md-4 pt-sm-4">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    {" "}
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec2 text-center p-3 d-flex justify-content-center align-items-center">
          <p className="text-light">Copyright © Your Website 2021</p>
        </div>
      </footer>
        </>
    );
}
 
 
export default Footer;