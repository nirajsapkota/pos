import React, { FC, useEffect, useState } from "react"

import {
    MenuGroups,
    GroupProducts,
    ShoppingCart
} from "./Panes"

import { 
    GetMenuGroups
} from "../MenuMaker/Requests"

const OrderBuilder: FC = () => {
    const [menuGroups, setMenuGroups]: any = useState([])
    const [selectedGroup, setSelectedGroup]: any = useState(null)
    const [cart, setCart]: any = useState({})

    useEffect(() => {
        const Fetch = async () => {
            const response = await GetMenuGroups()
            setMenuGroups(response.data.groups)

            if (response.data.groups.length > 0)
                setSelectedGroup(response.data.groups[0])
        }

        Fetch()
    }, [])

    return (
        <div className="flex w-full h-full">
            <MenuGroups
                menu={menuGroups}
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
            />

            <GroupProducts
                selectedGroup={selectedGroup}
                cart={cart}
                setCart={setCart}
            />

            <ShoppingCart
                cart={cart}
                setCart={setCart}
            />
        </div>
    )
}

export default OrderBuilder