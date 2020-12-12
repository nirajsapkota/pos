import React, { FC } from "react";

import { ReactComponent as NothingToShowYet } from "../../assets/images/nothing-to-show-yet.svg";

const Home: FC = () => {
  return (
    <div className="no-orders-yet">
      <NothingToShowYet width="50%" height="50%"/>
      <p className="typography-bold"> There haven't been any orders yet today, </p>
      <a href="/neworder">
        <button className="btn typography-normal">start first order</button>
      </a>
    </div>
  );
}

export default Home;