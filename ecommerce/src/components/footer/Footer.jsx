import React from "react";

//get the current year
const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div class="text-center text-lg-start bg-dark text-light">
      <section class="">
        <div class="container text-center text-md-start mt-5 border-top">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>SP&SAVE
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <ul className="list-inline">
                <li>
                  <a className="text-decoration-none text-light" href="">
                    Who are we?
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-light" href="">
                    Career
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-light" href="">
                    Contact
                  </a>
                </li>
              </ul>
              
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Campains</h6>
              <p>
                <a href="#!" className="text-decoration-none text-light">
                  Current Campains
                </a>
              </p>
              <p>
                <a href="#!" className="text-decoration-none text-light">
                  Prime
                </a>
              </p>
              <p>
                <a href="#!" className="text-decoration-none text-light">
                  Presents
                </a>
              </p>
              <p>
                <a href="#!" className="text-decoration-none text-light">
                  SP&SAVE
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Help</h6>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Online
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  How can explain?
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Help
                </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4" style={{ backgroundColor: "#0010" }}>
        © {year} Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </div>
  );
};
export default Footer;
