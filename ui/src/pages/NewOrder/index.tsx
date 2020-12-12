import React, { FC } from "react";

import NewOrderDineIn from "./NewOrderDineIn";
import NewOrderTakeaway from "./NewOrderTakeaway";
import NewOrderDelivery from "./NewOrderDelivery";

import { ReactComponent as DineInIcon } from "../../assets/icons/dine-in-color.svg";
import { ReactComponent as TakeawayIcon } from "../../assets/icons/takeaway-color.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/icons/delivery-color.svg";

const NewOrder: FC = () => {
  return (
    <div className="container">
      <div className="select-order">
        <div className="new-order-section-title typography-bold"> Select the order type... </div>
        <div className="new-order-btn-group">
          <a href="/neworder/dinein">
          <button className="new-order-icon-btn">
            <div className="new-order-icon-btn-contents">
              <DineInIcon width="64" height="64" />
              <p className="typography-normal">Dine In</p>
            </div>
          </button>
          </a>
          <a href="/neworder/takeaway">
          <button className="new-order-icon-btn">
            <div className="new-order-icon-btn-contents">
              <TakeawayIcon width="64" height="64" />
              <p className="typography-normal">Takeaway</p>
            </div>
          </button>
          </a>
          <a href="/neworder/delivery">
          <button className="new-order-icon-btn">
            <div className="new-order-icon-btn-contents">
              <DeliveryIcon width="64" height="64" />
              <p className="typography-normal">Delivery</p>
            </div>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
export { NewOrderDineIn, NewOrderTakeaway, NewOrderDelivery };