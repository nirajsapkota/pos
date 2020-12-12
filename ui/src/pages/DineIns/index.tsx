import React, { FC } from "react";

import { ReactComponent as EatingTogether } from "../../assets/images/eating-together.svg";

const DineIns: FC = () => {
  return (
    <div className="no-orders-yet">
      <EatingTogether width="50%" height="50%"/>
      <p className="typography-bold"> There haven't been any dine-in orders yet today, </p>
      <a href="/neworder"> 
        <button className="btn typography-normal">start an order</button>
      </a>
    </div>
  );
}

export default DineIns;