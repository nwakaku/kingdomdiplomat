import "./offering.css";
import pic from "../../pic/cred.png";
import build from "../../pic/build.png";
import partner from "../../pic/partner.png";
import paypal from "../../pic/paypal.png";
import card from "../../pic/card.png";
import details from "../../pic/details.png";

const Offering = () => {
  return (
    <section className="offering">
      <div className="offer">
        <div className="offer-title">
          <div className="title">
            <h2>
              <span> Giving </span>
            </h2>
            <br />
            <p>Honour Pastor Ndukwe Ndukwe, pay for partnership and projects</p>
            <br />
          </div>
        </div>

        <div className="offering-box">
          <div className="box">
            <div className="ser-box">
              <div className="icon">
                <img src={pic} />
              </div>
              <h4>Honour Pastor Ndukwe</h4>
              <button>Give</button>
            </div>
          </div>
          <div className="box">
            <div className="ser-box">
              <div className="icon">
                <img src={partner} />
              </div>
              <h4>Partnership</h4>
              <button>Give</button>
            </div>
          </div>
          <div className="box">
            <div className="ser-box">
              <div className="icon">
                <img src={build} />
              </div>
              <h4>Projects</h4>
              <button>Give</button>
            </div>
          </div>

          {/* second offering */}
        </div>
      </div>
      <div className="offer">
        <div className="offer-title">
          <div className="title">
            <p>
              Pay your offerings, tithe, vows & donations using any of the
              medium below
            </p>
            <br />
          </div>
        </div>

        <div className="offering-box">
          <div className="box">
            <div className="ser-box">
              <div className="icon">
                <img src={paypal} />
              </div>
              <h4>Paypal</h4>
              <p>Give with Paypal | SECURED | USD, GBP, EUR, CAD</p>
              <button>Give</button>
            </div>
          </div>
          <div className="box">
            <div className="ser-box">
              <div className="icon">
                <img src={card} />
              </div>
              <h4>Card & Transfer</h4>
              <p>Give with Paystack | SECURED | USD, NGN</p>
              <button>Give</button>
            </div>
          </div>
          <div className="box">
            <div className="ser-box">
              <div className="icon">
                <img src={details} />
              </div>
              <h4>Bank Details</h4>
              <p>Give via Bank Transfer | SECURED | USD, NGN</p>
              <button>Give</button>
            </div>
          </div>

          {/* second offering */}
        </div>
      </div>
    </section>
  );
};

export default Offering;
