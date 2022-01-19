import React from "react";
import { IoLogoAmplify } from "react-icons/io5";
import { FaPrayingHands } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaPray } from "react-icons/fa";
import "./service.css";
import pee from "../../pic/p3.png";
import testimony from "../../pic/testimony.jpg";
import prayer from "../../pic/prayer.jpg";
import kd from "../../pic/kd.jpg";

const Services = () => {
  return (
    <section id="service" className="service">
      <h1>
        <em>About Us</em>
      </h1>

      <div className="row">
        <div className="image">
          <img src={pee} alt="" />
        </div>
        <div className="content">
          <h3>Pastor Ndukwe Ndukwe</h3>
          <p>
            Pastor Ndukwe Ndukwe is the founder of the New Covenant Family
            Ministries and the Senior Pastor of Kingdom Diplomats,
            International. He is also the Convener : BLACK AND BLESSED ANNUAL
            CONFERENCE, and a Senior Facilitator in the Institute of National
            Transformation.
            <br />
            Pastor Ndukwe Ndukwe is a minister of the Gospel, and an icon of
            transformational leadership. His passion for Personal Transformation
            and National Transformation has produced various initiatives and
            ministries causing a stir among youth, governments, corporate
            institutions, the media and other stakeholders both in Africa and
            globally. He is a Management and Government Consultant who speaks
            nationally and internationally in organizations, government houses,
            embassies and churches. He is a widely read author and a social
            reformer. Pastor Ndukwe is married, with two kids.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="content">
          <h3>
            <FaPrayingHands /> Our Core Values
          </h3>
          <ul>
            <li>
              Explore the values that embody the vision of Kingdom Diplomats.
              Our values reflect our mission to transform the total man so we
              can impact our communities.
            </li>
            <li>
              Leadership Institute We strongly believe in leadership and
              transformation. We are committed to raising and developing sons
              and daughters in Christ, who will transform society at large,
              through various spheres of life.
            </li>
            <li>
              Our Beliefs Discover how we view God, Jesus, the Bible, man, and
              many significant aspects of our faith. Our beliefs are shaped by
              biblical truths and our decisions as a church are guided by
              Scripture.
            </li>
            <li>
              Ministries designed to meet the specific needs and desires of our
              members and the body of Christ at large, while fulfilling its
              mission to raise leaders that transform society.
            </li>
          </ul>
        </div>
        <div className="image">
          <img src={kd} alt="" />
        </div>
      </div>

      <div className="row">
        <div className="image">
          <img src={testimony} alt="" />
        </div>
        <div className="content right">
          <h3>
            <FaPhotoVideo /> Have a Testimony ?
          </h3>
          <p>Tell us what the Lord have done for you.</p>
          <br />
          <input type="text" className="field" placeholder="Full Name" />
          <input
            type="text"
            className="field"
            placeholder="Whats Your address"
          />
          <input type="email" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Contact number" />
          <textarea
            className="field area"
            placeholder="Type in your testimony"
          />
          <button className="btn">Send Testimony</button>
        </div>
      </div>

      <div className="row">
        <div className="content right">
          <h3>
            <FaPray /> Have a Prayer Request ?
          </h3>
          <p>Let us pray with you.</p>
          <br />
          <input type="text" className="field" placeholder="Full Name" />
          <input
            type="text"
            className="field"
            placeholder="Whats Your address"
          />
          <input type="email" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Contact number" />
          <textarea
            className="field area"
            placeholder="Type in your prayer request"
          />
          <button className="btn">Send Request</button>
        </div>
        <div className="image">
          <img src={prayer} />
        </div>
      </div>
    </section>
  );
};

export default Services;
