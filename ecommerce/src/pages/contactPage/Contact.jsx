import "./Contact.scss";
import whoAreWe from "../../assets/whoAreWe.jpg";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";

const Contact = () => {
  return (
    <>
      <div className="row p-4 justify-content-center">
        <div
          className=" col-12 col-md-4 rounded-start-4 d-flex flex-column align-items-center justify-content-center p-4"
          style={{ backgroundColor: "#1a1a1a" }}>
          <h5 className="text-align-start text-secondary w-100 mute">
            Size Nasıl Yardımcı Olabiliriz?
          </h5>
          <h3 className="text-align-start text-light w-100">
            Bizimle İletişime Geçin
          </h3>
          <form className="me-4">
            <div className="row">
              <div className="col-6 ps-0 form-group">
                <input className="form-control" type="text" placeholder="Ad" />
              </div>
              <div className="col-6 ps-0">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Soyad"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-12 ps-0">
                <input
                  className="w-100 form-control"
                  type="email"
                  placeholder="Mail"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-12 ps-0">
                <input
                  className="w-100 form-control"
                  type="phone"
                  placeholder="Telefon"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-12 ps-0">
                <textarea
                  class="form-control"
                  placeholder="Mesajınız"
                  id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
            </div>
          </form>
          <iframe
            className="me-3 d-none d-md-block"
            title="spenT"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ojieoZkYNuQeoxDMqYx92vKltRtqV5Q&ehbc=2E312F"
            width="433"
            height="400"></iframe>
        </div>
        <div className="col-12 col-md-4 bg-info rounded-end-4">
          <div className="row">
            <div className="col-12 rounded-4">
              <img
                className="w-100 p-4"
                style={{ borderRadius: "40px" }}
                src={whoAreWe}
                alt="who are we"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-5 pt-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                labore porro obcaecati vero impedit veniam repellendus nisi.
                Sequi culpa nulla ut quaerat. Hic odit perspiciatis illum
                doloribus, autem quam laudantium!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-5 pt-0 pe-0 ">
              <img className="w-75" src={phone} alt="" />
            </div>
            <div className="col-9 p-0 m-0 ">
              <h4>Telefon</h4>
              <h6>+90 510 547 79 24</h6>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3 p-5 pe-0">
              <img className="w-75" src={location} alt="" />
            </div>
            <div className="col-9 p-4 ps-0 m-0">
              <h4>Adres</h4>
              <h6>
                Street: 4. Levent <br /> City: Beşiktaş <br />{" "}
                State/province/area: Istanbul
                <br /> Country calling code +90 <br /> Country Turkey
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
