import "./Testimonial.css";

const Testimonial = () => {
  const tData = [
    {
      id: "test-1",
      src: "./icons/basket.svg",
      title: "Farm to Home",
      des: "Directly Delivered From Farmer To Your Door Steps, No Middle Man Involved. Harvested @Right Time. 100% Carbide free and 100%Natural Ripen.",
    },
    {
      id: "test-2",
      src: "./icons/post-van.svg",
      title: "Standard Delivery",
      des: "Delivery Within Bengaluru By Indian post within 3-5 Days. Free shipping on orders above ₹299.",
    },
    {
      id: "test-3",
      src: "./icons/mask.svg",
      title: "Health & Safety Rules",
      des: "100% Chemical Free,100%Natural Ripen, We Strictly Follow Covid-19 Rules and Regulations.",
    },
  ];

  return (
    <section className="why-sec">
      <h2>Why FreshMangoes ?</h2>
      <div className="testi-cont">
        {tData.map((ele) => {
          return (
            <div className="testimonial" id={ele.id} key={ele.id}>
              <img  src={ele.src} alt="icons"></img>
              <h4>{ele.title}</h4>
              <p>{ele.des}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
