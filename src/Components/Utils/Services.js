import React, { useState } from "react";
import { FaPrayingHands } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaPray } from "react-icons/fa";
import "./service.css";
import pee from "../../pic/p3.png";
import testimony from "../../pic/testimony.jpg";
import pstndukwewife from "../../pic/pstndukwewife.jpg";
import kd from "../../pic/kd.jpg";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>your message has been successfully sent</p>;
};

const Testimony = () => {
  return <p>your Testimony has been successfully sent</p>;
};

const Services = () => {
  const [result, setResult] = useState(false);
  setTimeout(() => {
    setResult(false);
  }, 5000);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvqask9",
        "template_y69jt8o",
        e.target,
        "user_SjwEuTOfAY5wWWnuOiNxx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

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
            Pastor Ndukwe Ndukwe is the founder of DIPLOMAT SCHOOL OF LEADERSHIP
            and the Senior Pastor of Kingdom Diplomats, International. He is
            also the Convener : BLACK AND BLESSED ANNUAL CONFERENCE, and a
            Senior Facilitator in the Institute of National Transformation.
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
           <b>God's Presence:</b> <br/>
            God's presence is a place where prayer is heard.
            David sought the Lord's presence when Israel faced a three-year famine ( 2 Sam 21:1 ).
            Paul constantly interceded for the Thessalonian church, bringing their name before the Father's presence ( 1 Thess 1:3 ).
            Furthermore, God promises to hear and forgive those who come into his presence with humble repentance ( 2 Chron 7:14 ).
            </li>
            <li>
            <b>Excellence:</b><br/>
            The pursuit of excellence is never a matter of simply choosing between what is good or bad,
            but of choosing what is best or superior because it will better enable us to accomplish what God has designed us to be and do (cf. Phil. 1:9 with Eph. 2:10).
            </li>
            <li>
             <b>Leadership:</b><br/>
             Biblical leadership is serving others from a place of selflessness and sacrifice that points to God.
             Biblical leadership is about serving others.
             Leadership is not about position, privilege, or power. John 13:2-17 (NIV)
            </li>
            <li>
              <b>knowledge:</b><br/>
              The word knowledge in the Bible denotes an understanding, a recognition, or an acknowledgment. 
              To “know” something is to perceive it or to be aware of it.
              The Bible is clear that the knowledge of God is the most valuable knowledge a human being can possess.
              But it is also clear that simply being aware of God’s existence is not sufficient; 
              the knowledge of God must encompass the deep appreciation for and relationship with Him.
            </li>
            <li>
              <b>Societal Relevance:</b><br/>
              A main characteristic of societal relevance is the quest towards 
              answering questions that society asks or to solve problems it faces.
              Jesus answered, “It is not the healthy who need a doctor, but the sick.
              I have not come to call the righteous, but sinners, to repentance.” luke 5:32
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
          <form onSubmit={sendEmail}>
            <input
              type="text"
              className="field"
              placeholder="Full Name"
              name="firstname"
            />
            <input
              type="text"
              className="field"
              placeholder="Whats Your address"
              name="lastname"
            />
            <input
              type="email"
              className="field"
              placeholder="Your Email"
              name="email"
            />
            <input
              type="text"
              className="field"
              placeholder="Contact number"
              name="phone"
            />
            <textarea
              className="field area"
              placeholder="Type in your testimony"
              name="message"
            />
            <button type="submit" className="btn">
              Send Testimony
            </button>
            <div>{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="content right">
          <h3>
            <FaPray /> Have a Prayer Request ?
          </h3>
          <p>Let us pray with you.</p>
          <br />
          <form onSubmit={sendEmail}>
            <input
              type="text"
              className="field"
              placeholder="Full Name"
              name="firstname"
            />
            <input
              type="text"
              className="field"
              placeholder="Whats Your address"
              name="lastname"
            />
            <input
              type="email"
              className="field"
              placeholder="Your Email"
              name="email"
            />
            <input
              type="text"
              className="field"
              placeholder="Contact number"
              name="phone"
            />
            <textarea
              className="field area"
              placeholder="Type in your testimony"
              name="message"
            />
            <button type="submit" className="btn">
              Send Request
            </button>
            <div>{result ? <Testimony /> : null}</div>
          </form>
        </div>
        <div className="image">
          <img src={pstndukwewife} alt="#"/>
        </div>
      </div>
    </section>
  );
};

export default Services;
