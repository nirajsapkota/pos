import React, { FC } from "react";

import { ReactComponent as TakeawayPickup } from "../../assets/images/takeaway-pickup.svg";

const Takeaways: FC = () => {
  return (
    <div className="no-orders-yet">
      <TakeawayPickup width="50%" height="50%"/>
      <p className="typography-bold"> There haven't been any takeaway orders yet today, </p>
      <a href="/neworder"> 
        <button className="btn typography-normal">start an order</button>
      </a>
    </div>
  );
}

export default Takeaways;