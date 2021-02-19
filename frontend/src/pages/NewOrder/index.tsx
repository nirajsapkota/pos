import React, { FC } from "react"

import NewOrderDineIn from "./NewOrderDineIn"
import NewOrderTakeaway from "./NewOrderTakeaway"
import NewOrderDelivery from "./NewOrderDelivery"

import { ReactComponent as DineInIcon } from "_icons/dine-in-color.svg"
import { ReactComponent as TakeawayIcon } from "_icons/takeaway-color.svg"
import { ReactComponent as DeliveryIcon } from "_icons/delivery-color.svg"

const NewOrder: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <div className="grid grid-cols-3 gap-4">
                <a href="/neworder/dinein" className="w-48 h-48 rounded-2xl bg-custom-background cursor-pointer">
                    <div className="flex flex-col w-full h-full hover:shadow-2xl duration-300">
                        <div className="flex flex-col items-center justify-center h-full">
                            <DineInIcon width={64} height={64} className="mb-2" />
                            <h1 className="text-white font-bold">Dine In</h1>
                        </div>
                    </div>
                </a>

                <a href="/neworder/takeaway" className="w-48 h-48 rounded-2xl bg-custom-background cursor-pointer">
                    <div className="flex flex-col w-full h-full hover:shadow-2xl duration-300">
                        <div className="flex flex-col items-center justify-center h-full">
                            <TakeawayIcon width={64} height={64} className="mb-2" />
                            <h1 className="text-white font-bold">Takeaway</h1>
                        </div>
                    </div>
                </a>

                <a href="/neworder/delivery" className="w-48 h-48 rounded-2xl bg-custom-background cursor-pointer">
                    <div className="flex flex-col w-full h-full hover:shadow-2xl duration-300">
                        <div className="flex flex-col items-center justify-center h-full">
                            <DeliveryIcon width={64} height={64} className="mb-2" />
                            <h1 className="text-white font-bold">Delivery</h1>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default NewOrder
export { NewOrderDineIn, NewOrderTakeaway, NewOrderDelivery }