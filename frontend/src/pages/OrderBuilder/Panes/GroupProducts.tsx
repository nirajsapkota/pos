import React, { FC } from "react"

import { GroupProductsProps } from "../../../typings"

const GroupProducts: FC<GroupProductsProps> = ({ selectedGroup, cart, setCart }) => {

    const updateCart = (product: any) => {
        const key: string = product._id
        let value: any = undefined

        if (cart.hasOwnProperty(key)) {
            value = cart[key]
            value.quantity += 1
        } else {
            value = { name: product.name, price: product.price, quantity: 1 }
        }

        setCart((existing: any) => ({ ...existing, [key]: value }))
    }

    return (
        <div className="w-3/6 p-12">
            <div className="grid grid-cols-5">
                {selectedGroup !== null && selectedGroup.products.map((product: any) =>
                    <div key={product._id} className="w-56 h-56 rounded-2xl hover:shadow-2xl bg-custom-background m-2 cursor-pointer duration-300" onClick={() => updateCart(product)}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-white font-bold mb-2">{product.name}</div>
                            <div className="text-white">${parseFloat(product.price).toFixed(2)}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GroupProducts