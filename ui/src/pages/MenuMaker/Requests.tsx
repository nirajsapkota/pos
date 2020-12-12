import axios from "axios";

const CreateCatagory = (name: string): void => {

  if (name.length <= 0) return;

  axios({
    method: "POST",
    url: "http://localhost:4000/menu",
    data: {
      name
    }
  })
    .then(response => {
      console.log("CreateCatagory: server responded with " + response);
      window.location.reload();
    })
    .catch(error => {
      console.log("CreateCatagory: server responded with " + error);
    });

}

const RenameCatagory = (id: string, newName: string): void => {

  axios({
    method: "PUT",
    url: "http://localhost:4000/menu",
    data: {
      id,
      newName
    }
  })
    .then(response => {
      console.log("CreateCatagory: server responded with " + response);
      window.location.reload();
    })
    .catch(error => {
      console.log("CreateCatagory: server responded with " + error);
    });

}

const DeleteCatagory = (id: string): void => {

  axios({
    method: "DELETE",
    url: "http://localhost:4000/menu",
    data: {
      id
    }
  })
    .then(response => {
      console.log("CreateCatagory: server responded with " + response);
      window.location.reload();
    })
    .catch(error => {
      console.log("CreateCatagory: server responded with " + error);
    });

}


const AddProductToCatagory = (id: string, name: string, price: number): void => {

  axios({
    method: "POST",
    url: "http://localhost:4000/menu/add-product",
    data: {
      id,
      name,
      price
    }
  })
    .then(response => {
      console.log("CreateCatagory: server responded with " + response);
      window.location.reload();
    })
    .catch(error => {
      console.log("CreateCatagory: server responded with " + error);
    });

}

const RemoveProductFromCatagory = (menuGroupID: number, productID: number): void => {

  axios({
    method: "POST",
    url: "http://localhost:4000/menu/remove-product",
    data: {
      menuGroupID,
      productID
    }
  })
    .then(response => {
      console.log("CreateCatagory: server responded with " + response);
      window.location.reload();
    })
    .catch(error => {
      console.log("CreateCatagory: server responded with " + error);
    });

}

export {
  CreateCatagory,
  RenameCatagory,
  DeleteCatagory,
  AddProductToCatagory,
  RemoveProductFromCatagory
}