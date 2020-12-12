import React, { FC } from "react";

import { ReactComponent as ChevronBackIcon } from "../../assets/icons/chevron-back.svg";
import { ReactComponent as DineInIcon } from "../../assets/icons/dine-in-color.svg";

const NewOrderDineIn: FC = () => {
  return (
    <div className="container">
      <div className="new-order-details">
        <a href="/neworder" className="back">
          <ChevronBackIcon width="24" height="24" className="chevron" />
          <p className="typography-light">Back</p>
        </a>
        <div className="new-order-details-header">
          <DineInIcon width="48" height="48" style={{ marginRight: 20 }} />
          <p className="typography-bold">New Dine In</p>
        </div>
        <div className="form">
          <div className="form-group">
            <label className="typography-normal">Table Number</label>
            <select className="new-order-input" placeholder="e.g. Table 12 " required>
              <option> Table 1 </option>
              <option> Table 2 </option>
              <option> Table 3 </option>
              <option> Table ... </option>
              <option> Table n </option>
            </select>
          </div>
          <div className="form-group">
            <label className="typography-normal">Name</label>
            <input className="new-order-input" placeholder="e.g. John Citizen" />
          </div>
          <div className="form-group">
            <label className="typography-normal">Number of Guests</label>
            <input className="new-order-input" placeholder="e.g. 4" />
          </div>
          <div className="form-group">
            <label className="typography-normal">Table Notes</label>
            <textarea className="new-order-big-input" placeholder="e.g. Caution, their son has a nut allergy!" style={{ height: 100 }} />
          </div>
        </div>
        <a href="/neworder/orderbuilder">
          <button className="btn typography-normal">continue</button>
        </a>
      </div>
    </div>
  );
}

export default NewOrderDineIn;