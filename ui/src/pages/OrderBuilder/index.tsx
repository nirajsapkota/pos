import React, { FC, useState, useEffect } from "react";
import axios from "axios";

const OrderBuilder: FC = () => {
  
  const [menuGroups, setMenuGroups] = useState([]);

  useEffect(() => {
    
    axios({
      method: "GET",
      url: "http://localhost:4000/menu"
    })
    .then(response => {
      setMenuGroups(response.data.groups);
    })
    .catch(error => {
      console.log(`An error occurred while fetching the menu: ${error}`);
    });

  }, []);

  return (
    <div>
      <div className="menu-groups-container">
        {menuGroups.map((menuGroup: any) =>
          <button className="menu-group-item">{menuGroup.name}</button>
        )}
      </div>
      <div className="menu-group-products-container">
      </div>
      <div className="cart">
      </div>
    </div>
  );

}

export default OrderBuilder;