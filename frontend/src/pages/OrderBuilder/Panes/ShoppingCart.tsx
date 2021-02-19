import React, { FC } from "react"

import { ReactComponent as CaretDownIcon } from "_icons/caret-down.svg"
import { ReactComponent as DeleteIcon } from "_icons/delete.svg"
import { ReactComponent as DineInIcon } from "_icons/dine-in-color.svg"
import { ReactComponent as TakeawayIcon } from "_icons/takeaway-color.svg"
import { ReactComponent as DeliveryIcon } from "_icons/delivery-color.svg"

import {
    HeaderProps,
    ShoppingCartProps
} from "../../../typings"

const Header: FC<HeaderProps> = ({ type }) => {
    switch (type) {
        case "dine-in": return <DineInHeader />
        case "takeaway": return <TakeawayHeader />
        case "delivery": return <DeliveryHeader />
        default: return null
    }
}

const DineInHeader = () => {
    return (
        <div className="flex items-center">
            <DineInIcon width={32} height={32} className="mr-2" />
            <p className="text-white">Dine In</p>
        </div>
    )
}

const TakeawayHeader = () => {
    return (
        <div className="flex items-center">
            <TakeawayIcon width={32} height={32} className="mr-2" />
            <p className="text-white">Takeaway</p>
        </div>
    )
}

const DeliveryHeader = () => {
    return (
        <div className="flex items-center">
            <DeliveryIcon width={32} height={32} className="mr-2" />
            <p className="text-white">Delivery</p>
        </div>
    )
}

const ShoppingCart: FC<ShoppingCartProps> = ({ cart, setCart }) => {

    const incrementQuantity = (key: any) => {
        const value = cart[key]
        value.quantity += 1
        setCart((existing: any) => ({ ...existing, [key]: value }))
    }

    const decrementQuantity = (key: any) => {
        const value = cart[key]
        value.quantity -= 1

        if (value.quantity === 0)
            removeFromCart(key)
        else
            setCart((existing: any) => ({ ...existing, [key]: value }))
    }

    const removeFromCart = (key: any) => {
        const copy = { ...cart }
        delete copy[key]
        setCart(copy)
    }

    return (
        <div className="w-2/6 h-full bg-custom-background">

            <Header type="takeaway" />

            <table className="w-full text-white table-fixed">
                <tr className="h-24">
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
                {Object.entries(cart).map(([key, item]: any, index: number) => {
                    let classes = "h-16"
                    if (index % 2 === 0) classes += " bg-custom-accent"
                    console.log(index)

                    return (
                        <tr className={classes}>
                            <td className="text-center">{item.name}</td>
                            <td className="flex justify-center items-center h-16">
                                <CaretDownIcon width={24} height={24} fill="green" className="cursor-pointer" style={{ transform: "scaleY(-1)" }} onClick={() => incrementQuantity(key)} />
                                <p className="mx-2">{item.quantity}</p>
                                <CaretDownIcon width={24} height={24} fill="red" className="cursor-pointer" onClick={() => decrementQuantity(key)} />
                            </td>
                            <td className="text-center">${(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</td>
                            <td className="flex justify-center">
                                <DeleteIcon width={24} height={24} className="cursor-pointer" onClick={() => removeFromCart(key)} />
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ShoppingCart