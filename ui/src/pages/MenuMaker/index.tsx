import React, { FC, useState, useEffect } from "react";
import axios from "axios";

import { CreateCatagory, RenameCatagory, DeleteCatagory, AddProductToCatagory, RemoveProductFromCatagory } from "./Requests";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";

import { ReactComponent as MenuMakerIcon } from "../../assets/icons/menu-maker.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

interface NewCatagoryProps {
  setAddNewMenuGroup: Function
};

interface NewProductButtonProps {
  setAddNewProduct: Function
};

interface NewProductFieldsProps {
  id: string,
  setAddNewProduct: Function
};

const DeleteProductMergeIDs = (menuGroupID: string, productID: string) => {
  return { menuGroupID: menuGroupID, productID: productID };
}

const AddNewCatagoryButton: FC<NewCatagoryProps> = ({ setAddNewMenuGroup }) => {
  return (
    <button
      className="catagory-add-button"
      onClick={() => setAddNewMenuGroup(true)}>
      <AddIcon width={16} height={16} fill="white" style={{ marginRight: 5 }} />
      New catagory
    </button>
  );
}

const AddNewCatagoryFields: FC<NewCatagoryProps> = ({ setAddNewMenuGroup }) => {
  return (
    <input
      className="rounded-input"
      placeholder="Name"
      autoFocus={true}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          CreateCatagory(e.currentTarget.value);
          setAddNewMenuGroup(false);
        }
      }}
      onBlur={(e) => {
        CreateCatagory(e.currentTarget.value);
        setAddNewMenuGroup(false);
      }}
    />
  );
}

const AddNewProductButton: FC<NewProductButtonProps> = ({ setAddNewProduct }) => {
  return (
    <button
      className="catagory-add-button"
      onClick={() => setAddNewProduct(true)}>
      <AddIcon width={16} height={16} fill="white" style={{ marginRight: 5 }} />
      New product
    </button>
  );
}

const AddNewProductFields: FC<NewProductFieldsProps> = ({ id, setAddNewProduct }) => {
  const [name, setName]: [string, Function] = useState("");
  const [price, setPrice]: [number, Function] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <input
        className="rounded-input"
        style={{ width: "67.5%" }}
        placeholder="Name"
        autoFocus={true}
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        className="rounded-input"
        style={{ width: "27.5%" }}
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (name !== "" && price >= 0) AddProductToCatagory(id, name, price);
            setAddNewProduct(false);
          }
        }}
        onBlur={(e) => {
          if (name !== "" && price >= 0) AddProductToCatagory(id, name, price);
          setAddNewProduct(false);
        }} />
    </div>
  );
}

const MenuGroupContextMenu: FC = () => {
  return (
    <ContextMenu id="MenuGroupContextMenu" style={{ background: "#484a4d", borderRadius: "5px", width: "200px" }}>
      <MenuItem
        onClick={(event, props: any) => DeleteCatagory(props._id)}
        className="context-menu-link">
        <DeleteIcon width={24} height={24} style={{ marginRight: 5 }} />
        <div>Delete</div>
      </MenuItem>
      <MenuItem
        onClick={(event, props: any) => console.log(props)}
        className="context-menu-link">
        <EditIcon width={24} height={24} style={{ marginRight: 5 }} />
        <div>Rename</div>
      </MenuItem>
    </ContextMenu>
  );
};

const MenuGroupProductContextMenu: FC = () => {
  return (
    <ContextMenu id="MenuGroupProductContextMenu" style={{ background: "#484a4d", borderRadius: "5px", width: "200px" }}>
      <MenuItem
        onClick={(event, props: any) => RemoveProductFromCatagory(props.menuGroupID, props.productID)}
        className="context-menu-link">
        <DeleteIcon width={24} height={24} style={{ marginRight: 5 }} />
        <div>Delete</div>
      </MenuItem>
    </ContextMenu>
  );
};

const MenuMaker: FC = () => {
  const [addNewMenuGroup, setAddNewMenuGroup] = useState(false);
  const [addNewProduct, setAddNewProduct] = useState(false);
  const [menuGroups, setMenuGroups]: any = useState([]);
  const [selectedGroup, setSelectedGroup]: any = useState({});

  useEffect(() => {

    axios({
      method: "GET",
      url: "http://localhost:4000/menu"
    })
      .then(response => {
        setMenuGroups(response.data.groups);
        setSelectedGroup(response.data.groups[0]);
      })
      .catch(error => {
        console.log(`An error occurred while fetching the menu: ${error}`);
      });

  }, []);

  return (
    <div className="content-container">
      <div className="content-wrapper">

        <div className="flex-row align-center spacer-md-bottom">
          <MenuMakerIcon width={64} height={64} style={{ marginRight: 15 }} />
          <div className="typography-bold" style={{ fontSize: 24 }}>Menu Maker</div>
        </div>

        {/* Menu Groups */}
        <div className="flex-row">
          <div className="catagories-wrapper">
            <div className="typography-bold"> Catagories </div>
            {menuGroups.map((menuGroup: any) =>
              <div key={menuGroup._id}>
                <ContextMenuTrigger id="MenuGroupContextMenu" collect={props => menuGroup}>
                  <button
                    className={selectedGroup === menuGroup ? "catagory-button catagory-button-active" : "catagory-button"}
                    onClick={() => setSelectedGroup(menuGroup)}
                    style={{ width: "100%" }}>
                    <div className="typography-normal">{menuGroup.name}</div>
                  </button>
                </ContextMenuTrigger>
              </div>)}
            <MenuGroupContextMenu />
            {addNewMenuGroup ?
              <AddNewCatagoryFields setAddNewMenuGroup={setAddNewMenuGroup} /> :
              <AddNewCatagoryButton setAddNewMenuGroup={setAddNewMenuGroup} />}
          </div>

          <div style={{ width: "5%" }}></div>

          {/* Products within Menu Group */}
          <div className="products-wrapper">
            <div className="typography-normal"> Products </div>
            {selectedGroup.products && selectedGroup.products.map((product: any) =>
              <div key={product._id}>
                <ContextMenuTrigger id="MenuGroupProductContextMenu" collect={props => DeleteProductMergeIDs(selectedGroup._id, product._id)}>
                  <button
                    className="catagory-button"
                    style={{ width: "100%" }}>
                    <div style={{ display: "flex", width: "98%", flexDirection: "row", justifyContent: "space-between" }}>
                      <div>{product.name}</div>
                      <div>${product.price.toFixed(2)}</div>
                    </div>
                  </button>
                </ContextMenuTrigger>
              </div>
            )}
            <MenuGroupProductContextMenu />
            {addNewProduct ?
              <AddNewProductFields id={selectedGroup._id} setAddNewProduct={setAddNewProduct} /> :
              <AddNewProductButton setAddNewProduct={setAddNewProduct} />}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MenuMaker;