import React, { FC } from "react";

import {
  BrowserRouter as BRouter,
  Switch,
  Route
} from "react-router-dom";

import {
  Home,
  NewOrder,
  NewOrderDineIn,
  NewOrderTakeaway,
  NewOrderDelivery,
  DineIns,
  Takeaways,
  Deliveries,
  Sales,
  Employees,
  MenuMaker,
  OrderBuilder
} from "./pages";

import Router from "./router";

const App: FC = () => {
  return (
    <BRouter>
      <Router />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/neworder/dinein" component={NewOrderDineIn} />
        <Route path="/neworder/takeaway" component={NewOrderTakeaway} />
        <Route path="/neworder/delivery" component={NewOrderDelivery} />
        <Route path="/neworder/orderbuilder" component={OrderBuilder} />
        <Route path="/neworder" component={NewOrder} />
        <Route path="/dineins" component={DineIns} />
        <Route path="/takeaways" component={Takeaways} />
        <Route path="/deliveries" component={Deliveries} />
        <Route path="/sales" component={Sales} />
        <Route path="/employees" component={Employees} />
        <Route path="/menumaker" component={MenuMaker} />
      </Switch>
    </BRouter>
  );
}

export default App;