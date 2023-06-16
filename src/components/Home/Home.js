import "./Home.css";
import Card from "./Card";
import Testimonial from "./Testimonial";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

// fetch('http://localhost:5000/products')
// .then(response => response.json())
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

const Home = () => {
  const [products, setProducts] = useState([]);

  const productsFetch = useCallback(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    productsFetch();
  }, []);

  const scrollLeft = () => {
    let slider = document.querySelector(".Super-deals-sec");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const scrollRight = () => {
    let slider = document.querySelector(".Super-deals-sec");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="home-sec">
      <section className="weekly-deals">
        <h2>Weekly Deals</h2>
        <p>
          Buy Mangoes Directly From Farmer And Delivered Fresh Through
          Indian Post To Your Door Steps, Support Farmer!
        </p>
        <div className="weekly-slider">
          <button onClick={scrollLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
          <div className="Super-deals-sec">
            {products &&
              products.map((ele) => {
                return (
                  <Card
                    className="larger-cards"
                    key={ele._id}
                    product={ele}
                  />
                );
              })}
          </div>
          <button onClick={scrollRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
        </div>
      </section>

      <section className="deals-sec">
        <h2>Grab and Go</h2>
        <p>Direct From Farmer No Middle Man Involved</p>
        <div className="deals-sec-cards">
          {products &&
            products.map((ele) => {
              return (
                <Card
                  className="smaller-cards"
                  key={ele._id}
                  product={ele}
                />
              );
            })}
        </div>
      </section>

      <Testimonial />
    </div>
  );
};

export default Home;
