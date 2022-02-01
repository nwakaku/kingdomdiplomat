import React from "react";
import "./location.css";

const LocationUtils = () => {
  return (
    <div className="table-container">
      <h1 className="heading">
        KINGDOMDIPLOMATS <br />
        LOCATIONS
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>State</th>
            <th>Location</th>
            <th>Country</th>
            <th>Head Pastor</th>
            <th>Teaching</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-aria-label="No">1 </td>
            <td data-aria-label="State">Enugu</td>
            <td data-aria-label="Locations">KD Complex Ogui Road</td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst Ndukwe Ndukwe</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a
                href="https://web.facebook.com/pst.ndukwendukwe"
                className="btn"
              >
                ContactUs
              </a>
            </td>
          </tr>

          <tr>
            <td data-aria-label="No">2</td>
            <td data-aria-label="State">Abia</td>
            <td data-aria-label="Locations">KD_Aba</td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst Frank Erondu</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a href="https://web.facebook.com/erondufrank" className="btn">
                ContactUs
              </a>
            </td>
          </tr>

          <tr>
            <td data-aria-label="No">3</td>
            <td data-aria-label="State">Abia</td>
            <td data-aria-label="Locations">KD_Mouau Umuahia</td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst Sam</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a href="#" className="btn">
                ContactUs
              </a>
            </td>
          </tr>

          <tr>
            <td data-aria-label="No">4</td>
            <td data-aria-label="State">Abia</td>
            <td data-aria-label="Locations">KD_Absu Uturu </td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst KingDavid</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a href="#" className="btn">
                ContactUs
              </a>
            </td>
          </tr>

          <tr>
            <td data-aria-label="No">5</td>
            <td data-aria-label="State">Imo</td>
            <td data-aria-label="Locations">KD_Futo Iheagwa</td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst Uche</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a href="#" className="btn">
                ContactUs
              </a>
            </td>
          </tr>

          <tr>
            <td data-aria-label="No">6</td>
            <td data-aria-label="State">Imo</td>
            <td data-aria-label="Locations">KD_Imsu </td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst Peter-Wealth Okechukwu</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a href="#" className="btn">
                ContactUs
              </a>
            </td>
          </tr>

          <tr>
            <td data-aria-label="No">7</td>
            <td data-aria-label="State">Enugu</td>
            <td data-aria-label="Locations">KD_Unn Nsuka</td>
            <td data-aria-label="Country">Nig</td>
            <td data-aria-label="Head Pastor">Pst Hendrick</td>
            <td data-aria-label="Teaching">
              <span className="text_open">[ Open ]</span>
            </td>
            <td data-aria-label="Order">
              <a href="#" className="btn">
                ContactUs
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="sneaker__pages bd-grid">
        <div>
          <span className="sneaker__pag">1</span>
          <span className="sneaker__pag">2</span>
          <span className="sneaker__pag">3</span>
          <span className="sneaker__pag">4</span>
          <span className="sneaker__pag">&#8594;</span>
        </div>
      </div>
    </div>
  );
};

export default LocationUtils;
