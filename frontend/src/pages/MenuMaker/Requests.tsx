import axios, { AxiosPromise } from "axios";

const CreateMenuGroup = (name: string): void => {

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

const GetMenuGroups = (): AxiosPromise<any> => {

    return axios({
        url: "http://localhost:4000/menu",
        method: "GET"
    })

}

const RenameMenuGroup = (id: string, name: string): void => {

    axios({
        url: "http://localhost:4000/menu",
        method: "PUT",
        data: {
            id,
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

const DeleteMenuGroup = (id: string): void => {

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


const AddProductToMenuGroup = (id: string, name: string, price: number): void => {

    axios({
        url: "http://localhost:4000/menu/product",
        method: "POST",
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

const EditProductInMenuGroup = (menuGroupID: string, productID: string, name: string, price: number): void => {

    axios({
        url: "http://localhost:4000/menu/product",
        method: "PUT",
        data: {
            menuGroupID,
            productID,
            name,
            price
        }
    })
        .then(response => {
            console.log(response)
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })

}

const RemoveProductFromMenuGroup = (menuGroupID: number, productID: number): void => {

    axios({
        url: "http://localhost:4000/menu/product",
        method: "DELETE",
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
    CreateMenuGroup,
    GetMenuGroups,
    RenameMenuGroup,
    DeleteMenuGroup,
    AddProductToMenuGroup,
    EditProductInMenuGroup,
    RemoveProductFromMenuGroup
}