import React from "react";
import { IoLogoAmplify } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import "./service.css";

const Services = () => {
  return (
    <section id="service" className="service">
      <h1>
        <em>About Us</em>
      </h1>

      <div className="row">
        <div className="image">
          <img
            src={
              "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/p180x540/269926990_1085758022221130_2380124211254573887_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeH6J0IQ-Gs6EgIkNrpfp5evC8SspcObxssLxKylw5vGyyyHKDKmYL7YpMATv6kp4-EQ5z4vfUV6QwUPLRrXGKPs&_nc_ohc=FOv1rE3fGYEAX-6rPgq&tn=z4X85VlMOF8Sa0tf&_nc_ht=scontent.flos3-2.fna&oh=00_AT_gOeKArNZatIXKwjjz75fDtZjJi3htPbVUaphqmSismA&oe=61E4B5D8"
            }
            alt=""
          />
        </div>
        <div className="content">
          <h3>Pastor Ndukwe Ndukwe</h3>
          <p>
            Pastor Ndukwe Ndukwe is the founder of the New Covenant Family
            Ministries and the Senior Pastor of Dominion City, International. He
            is also the President of the Dominion Leadership Institute, and a
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
            reformer. Pastor Ndukwe is married, with four kids.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="content">
          <h3>
            <MdDesignServices /> Our Core Values
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
          <img
            src={
              "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/100324018_776678452737171_8569011091881852928_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFbd3iB-pK22d44TDzwBDBr44WIQaep1irjhYhBp6nWKpq1LqY0HubShCg7Tzk1TkOl9JO5_YnZypAQ7zEOCA0H&_nc_ohc=mujY2REbMNIAX-SN5-H&_nc_ht=scontent-los2-1.xx&oh=00_AT9mt5JFGf7sxnYkKjOwHaNrcDsqC3Cp7uPRf-eqeSs8Eg&oe=62074A79"
            }
            alt=""
          />
        </div>
      </div>

      <div className="row">
        <div className="image">
          <img
            src={
              "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/269118730_1148877088850637_7791031224236847751_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFVcewcqRfS1TTCqOHhvqF1aqch9S37YVhqpyH1LfthWM46GNPl42EcJmIrNAdSPZvaC7_OlQo-lFUmWc7Puhy4&_nc_ohc=YhkMNKD86JIAX_6oCvI&_nc_ht=scontent.flos3-2.fna&oh=00_AT9g5X0WhESSzHPDEL7LQ1JI7uIbcOKh_Cqz8NLuaAjnTg&oe=61E609BC"
            }
            alt=""
          />
        </div>
        <div className="content right">
          <h3>
            <FaPhotoVideo /> TESTIMONIES
          </h3>
          <p>
            A picture is worth a thousand words.......and a video is worth a
            million pictures.....
          </p>
          <br />
          <input type="text" className="field" placeholder="Your Name" />
          <input type="email" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Your Phone" />
          <textarea className="field area" placeholder="Message" />
          <button className="btn">Send</button>
        </div>
      </div>

      <div className="row">
        <div className="content">
          <h3>
            <MdOutlineAppSettingsAlt /> Animated Explainer Videos
          </h3>
          <p>
            “Animation can explain whatever the mind of man can conceive. This
            facility makes it the most versatile and explicit means of
            communication yet devised for quick mass appreciation.”
            <br />
            <br />
            We offer you in whatever language you choose with effiency of
            delivery
          </p>
          <a href="#">
            <button className="button">Let's Chat</button>
          </a>
        </div>
        <div className="image">
          <video autoPlay loop>
            <source src="https://f.hubspotusercontent20.net/hubfs/165225/wevideo-website-theme/videos/thumb/homepage/Home_Page_3.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Services;
