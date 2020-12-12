import React, { FC } from "react";

import { ReactComponent as ChevronBackIcon } from "../../assets/icons/chevron-back.svg";
import { ReactComponent as TakeawayIcon } from "../../assets/icons/takeaway-color.svg";

const NewOrderTakeaway: FC = () => {
  return (
    <div className="container">
      <div className="new-order-details">
        <a href="/neworder" className="back">
          <ChevronBackIcon width="24" height="24" className="chevron" />
          <p className="typography-light">Back</p>
        </a>
        <div className="new-order-details-header">
          <TakeawayIcon width="48" height="48" style={{ marginRight: 20 }} />
          <p className="typography-bold">New Takeaway</p>
        </div>
        <div className="form">
          <div className="form-group">
            <label className="typography-normal">Customer ID</label>
            <input className="new-order-input" placeholder="e.g. 0412345678" style={{ width: 420 }} />
          </div>
          <div className="form-group">
            <label className="typography-normal">Name</label>
            <input className="new-order-input" placeholder="e.g. John Citizen" style={{ width: 420 }} />
          </div>
          <div className="form-group">
            <label className="typography-normal">Takeaway Notes</label>
            <textarea className="new-order-big-input" placeholder="e.g. He'll be here in 15 minutes!" style={{ height: 100 }} />
          </div>
        </div>
        <a href="/neworder/orderbuilder">
          <button className="btn typography-normal">continue</button>
        </a>
      </div>
    </div>
  );
}

export default NewOrderTakeaway;