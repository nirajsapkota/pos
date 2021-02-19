import React, { FC, useState, useEffect } from "react"

import {
    MenuGroupItem,
    MenuGroupItemEditing,
    MenuGroupContextMenu,
    AddNewMenuGroupButton,
    AddNewMenuGroupFields
} from "./MenuGroup"

import {
    ProductItem,
    ProductItemEditing,
    ProductContextMenu,
    AddNewProductButton,
    AddNewProductFields
} from "./Product"

import {
    GetMenuGroups
} from "./Requests"

const MenuMaker: FC = () => {
    const [addNewMenuGroup, setAddNewMenuGroup] = useState(false)
    const [addNewProduct, setAddNewProduct] = useState(false)
    const [menuGroups, setMenuGroups]: any = useState([])
    const [selectedGroup, setSelectedGroup]: any = useState(null)
    const [editing, setEditing] = useState(null)

    useEffect(() => {

        const FetchGroups = async () => {
            const response = await GetMenuGroups()
            setMenuGroups(response.data.groups)

            if (response.data.groups.length > 0)
                setSelectedGroup(response.data.groups[0])
        }

        FetchGroups()

    }, [])

    return (
        <div className="flex flex-col items-center h-screen">
            <div className="flex my-24">

                {/* Menu Groups */}
                <div style={{ width: "350px" }}>
                    <h1 className="font-bold text-white mb-5">Menu Groups</h1>
                    {menuGroups.map((menuGroup: any) =>
                        editing === menuGroup._id ?
                            <MenuGroupItemEditing group={menuGroup} setEditing={setEditing} /> :
                            <MenuGroupItem selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} menuGroup={menuGroup} />
                    )}

                    <MenuGroupContextMenu setEditing={setEditing} />
                    {addNewMenuGroup ?
                        <AddNewMenuGroupFields setAddNewMenuGroup={setAddNewMenuGroup} /> :
                        <AddNewMenuGroupButton setAddNewMenuGroup={setAddNewMenuGroup} />
                    }
                </div>

                {/* Products within Selected Menu Group */}
                <div style={{ width: "500px" }}>
                    <h1 className="font-bold text-white mb-5">Products</h1>
                    {selectedGroup !== null && selectedGroup.products.map((product: any) =>
                        editing === product._id ?
                            <ProductItemEditing group={selectedGroup} product={product} setEditing={setEditing} /> :
                            <ProductItem selectedGroup={selectedGroup} product={product} />
                    )}

                    <ProductContextMenu setEditing={setEditing} />
                    {selectedGroup === null ?
                        <p className="text-white duration-300 py-4 px-8 rounded-xl focus:outline-none">Create a Menu Group to get started.</p> :
                        addNewProduct ?
                            <AddNewProductFields id={selectedGroup._id} setAddNewProduct={setAddNewProduct} /> :
                            <AddNewProductButton setAddNewProduct={setAddNewProduct} />
                    }
                </div>

            </div>
        </div>
    )
}

export default MenuMaker