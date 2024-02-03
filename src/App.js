import "./App.css";
import { Slide } from "react-slideshow-image";

function App() {
  return (
    <div className="App">
      <Header />
      <Pic />
      <Category />
      <Category1 />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="/image/mcdo.png" className="logo" />
      <img src="/image/menu.png" className="menu" />
    </div>
  );
}

function Pic() {
  return (
    <div>
      <img src="./image/pic1.jpg" className="pic" alt="./image/pic1.jpg" />
    </div>
  );
}

function Category() {
  return (
    <div className="category">
      <Category1
        img="./image/cat1.jpeg"
        txt="McDelivery"
        className="category-item"
      />
      <Category1 img="./image/cat2.jpeg" txt="NXTGEN" className="rounded-img" />
      <Category1 img="./image/cat3.jpg" txt="Careers" className="rounded-img" />
      <Category1
        img="./image/cat4.jpg"
        txt="Family Activities"
        className="category-item"
      />
      <Category1
        img="./image/cat5.jpeg"
        txt="Download the McDelivery PH App"
        className="category-item"
      />
      <Category1
        img="./image/cat6.jpeg"
        txt="Charity"
        className="category-item"
      />
    </div>
  );
}

function Category1(props) {
  return (
    <div className="category-item">
      <img src={props.img} alt="" className="category-img" />
      <p className="image-text">{props.txt}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <img
          src="./image/mcdo1.png"
          alt="./image/mcdo1.png"
          className="footerlogo"
        />
        <div className="app-logos">
          <div className="app-logo-container">
            <img
              src="./image/google.png"
              alt="./image/google.png"
              className="app-logo"
            />
          </div>
          <div className="app-logo-container">
            <img
              src="./image/applestore.png"
              alt="./image/applestore.png"
              className="app-logo"
            />
          </div>
        </div>
      </div>
      <div className="center-section">
        <div className="column">
          <p>Privacy policy</p>
          <p>Our Food</p>
          <p>Terms and Conditions</p>
          <p>Opportunities</p>
        </div>
        <div className="column">
          <p>About Us</p>
          <p>Careers</p>
          <p>Menu</p>
          <p>Family Activities</p>
        </div>
      </div>
      <div className="right-section">
        <p>Follow us on our social media</p>
        <div className="social-media-logos">
          <img
            src="./image/fb.png"
            alt="./image/fb.png"
            className="social-logo"
          />
          <img
            src="./image/twtr.jpg"
            alt="./image/twtr.jpg"
            className="social-logo"
          />
          <img
            src="./image/ig.png"
            alt="./image/ig.png"
            className="social-logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default App;

<p>Family Activities</p>;
