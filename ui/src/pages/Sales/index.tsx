import React, { FC } from "react";

import { ReactComponent as SalesIcon } from "../../assets/icons/sales-dashboard.svg";

const Sales: FC = () => {
  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="employee-wrapper flex-row align-center spacer-md-bottom">
          <SalesIcon width={64} height={64} style={{ marginRight: 15 }} />
          <div className="typography-bold" style={{ fontSize: 24 }}>Sales Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default Sales;