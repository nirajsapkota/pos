import React, { FC, useState } from "react"

import { ReactComponent as AddIcon } from "_icons/add.svg"
import { ReactComponent as DeleteIcon } from "_icons/delete.svg"
import { ReactComponent as EditIcon } from "_icons/edit.svg"

import {
    ContextMenu,
    MenuItem,
    ContextMenuTrigger
} from "react-contextmenu"

import {
    AddProductToMenuGroup,
    EditProductInMenuGroup,
    RemoveProductFromMenuGroup
} from "./Requests"

import {
    ProductItemProps,
    ProductContextMenuProps,
    ProductItemEditingProps,
    NewProductButtonProps,
    NewProductFieldsProps
} from "../../typings"

const ProductItem: FC<ProductItemProps> = ({ selectedGroup, product }) => {
    const ids = { groupID: selectedGroup._id, productID: product._id }

    return (
        <ContextMenuTrigger key={product._id} id="ProductContextMenu" collect={props => ids}>
            <button
                className="text-white duration-300 my-2 py-4 px-8 rounded-xl focus:outline-none flex items-center hover:shadow-2xl w-full hover:bg-custom-background">
                <div className="flex justify-between w-full">
                    <div>{product.name}</div>
                    <div>${parseFloat(product.price).toFixed(2)}</div>
                </div>
            </button>
        </ContextMenuTrigger>
    )
}

const ProductItemEditing: FC<ProductItemEditingProps> = ({ group, product, setEditing }) => {
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)

    return (

        <div className="flex justify-between">
            <input
                className="w-2/3 rounded-xl outline-none h-12 py-4 px-8"
                placeholder="Product Name"
                autoFocus={true}
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
                className="w-1/4 rounded-xl outline-none h-12 py-4 px-8"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        if (name !== "" && price >= 0) EditProductInMenuGroup(group._id, product._id, name, price)
                        setEditing(false)
                    }
                }}
                onBlur={(e) => {
                    if (name !== "" && price >= 0) EditProductInMenuGroup(group._id, product._id, name, price)
                    setEditing(false)
                }} />
        </div>

    )
}

const ProductContextMenu: FC<ProductContextMenuProps> = ({ setEditing }) => {
    return (
        <ContextMenu
            id="ProductContextMenu"
            className="bg-custom-background rounded-md">
            <MenuItem
                onClick={(event, props: any) => RemoveProductFromMenuGroup(props.groupID, props.productID)}
                className="flex focus:outline-none py-3 pl-4 pr-12 cursor-pointer hover:bg-custom-contrast rounded-t-md">
                <DeleteIcon width={24} height={24} className="mr-5" />
                <div className="text-white">Delete</div>
            </MenuItem>
            <MenuItem
                onClick={(event, props: any) => setEditing(props.productID)}
                className="flex focus:outline-none py-3 pl-4 pr-12 cursor-pointer hover:bg-custom-contrast rounded-b-md">
                <EditIcon width={24} height={24} className="mr-5" />
                <div className="text-white">Rename</div>
            </MenuItem>
        </ContextMenu>
    )
}

const AddNewProductButton: FC<NewProductButtonProps> = ({ setAddNewProduct }) => {
    return (
        <button
            className="text-white hover:bg-custom-background duration-300 my-2 py-4 px-8 rounded-xl focus:outline-none flex items-center hover:shadow-2xl w-full"
            onClick={() => setAddNewProduct(true)}>
            <AddIcon width={16} height={16} fill="white" className="mr-4" />
    Add a New Product
        </button>
    )
}

const AddNewProductFields: FC<NewProductFieldsProps> = ({ id, setAddNewProduct }) => {
    const [name, setName]: [string, Function] = useState("")
    const [price, setPrice]: [number, Function] = useState(0)

    return (
        <div className="flex justify-between">
            <input
                className="w-2/3 rounded-xl outline-none h-12 py-4 px-8"
                placeholder="Product Name"
                autoFocus={true}
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
                className="w-1/4 rounded-xl outline-none h-12 py-4 px-8"
                placeholder="Price"
                onChange={(e) => setPrice(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        if (name !== "" && price >= 0) AddProductToMenuGroup(id, name, price)
                        setAddNewProduct(false)
                    }
                }}
                onBlur={(e) => {
                    if (name !== "" && price >= 0) AddProductToMenuGroup(id, name, price)
                    setAddNewProduct(false)
                }} />
        </div>
    )
}

export {
    ProductItem,
    ProductItemEditing,
    ProductContextMenu,
    AddNewProductButton,
    AddNewProductFields
}