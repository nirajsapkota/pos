import React, { FC } from "react";

import { ReactComponent as DeliveryOnTheWay } from "../../assets/images/delivery-on-the-way.svg";

const Deliveries: FC = () => {
  return (
    <div className="no-orders-yet">
      <DeliveryOnTheWay width="50%" height="50%" />
      <p className="typography-bold"> There haven't been any delivery orders yet today, </p>
      <a href="/neworder"> 
        <button className="btn typography-normal">start an order</button>
      </a>
    </div>
  );
}

export default Deliveries;