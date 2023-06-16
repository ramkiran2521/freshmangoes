import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-cont">
        <div>
          <h4>STORE</h4>
          <ul>
            <li>
              <a href="#">Shop All</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Store Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>ADDRESS</h4>
          <a href="#">Kolar,Karnataka,India</a>
        </div>
        <div>
          <h4>OPENING HOURS</h4>
          <ul>
            <li>Mon - Fri: 6am - 10pm</li>
            <li>Saturday: 12am - 12pm</li>
            <li>Sunday: 12am - 12pm</li>
          </ul>
        </div>
        <div>
          <h4>GET IT FRESH</h4>
          <div className="subscribe-sec">
            <form action="/">
              <label htmlFor="subscribe">Email*</label>
              <input
                id="subscribe"
                type="email"
                required
              ></input>
              <button type="submit">SUBSCRIBE NOW</button>
            </form>
          </div>
        </div>
      </div>
      <div className="fter-cp-sec">
        <ul>
          <li>
            <a href="#">insta</a>
          </li>
          <li>
            <a href="#">fb</a>
          </li>
          <li>
            <a href="#">youtube</a>
          </li>
        </ul>
        <div>
          <p>© 2023 FreshMangoes</p>
          <p>Developed by <a href="https://ramkiran-portfolio.netlify.app" target="_blank">Kiran</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
