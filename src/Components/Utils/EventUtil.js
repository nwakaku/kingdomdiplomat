import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import today from "../../pic/coverimage.jpg";
import feb from "../../pic/coverkd.jpg";
import a from "../../pic/a.jpg";
import b from "../../pic/b.jpg";
import c from "../../pic/c.jpg";
import d from "../../pic/d.jpg";
import e from "../../pic/e.jpg";
import f from "../../pic/f.jpg";

const EventUtil = () => {
  return (
    <Carousel
      autoPlay
      showArrows={true}
      infiniteLoop={true}
      swipeable={false}
      showThumbs={false}
    >
      <section className="carol">
        <img src={feb} />
        <h3>National Leaders Retreat</h3>
      </section>

      <section className="carol">
        <img src={today} />
        <h3>This Year</h3>
      </section>

      <section className="carol">
        {" "}
        <img src={a} />
        <h3>Come And Be Blessed</h3>
      </section>
      <section className="carol">
        {" "}
        <img src={b} />
        <h3>Come And Be Blessed</h3>
      </section>
      <section className="carol">
        {" "}
        <img src={c} />
        <h3>today</h3>
      </section>
      <section className="carol">
        {" "}
        <img src={d} />
        <h3>Come And Be Blessed</h3>
      </section>
      <section className="carol">
        {" "}
        <img src={e} />
        <h3>Come And Be Blessed</h3>
      </section>
      <section className="carol">
        {" "}
        <img src={f} />
        <h3>Come And Be Blessed</h3>
      </section>
    </Carousel>
  );
};

export default EventUtil;
