import React, { FC } from "react"

import { ReactComponent as DeliveryOnTheWay } from "_images/delivery-on-the-way.svg"

const Deliveries: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-3/4">
            <DeliveryOnTheWay className="h-1/2 w-1/2 mb-10" />
            <p className="text-white font-bold mb-2">There haven't been any delivery orders yet today,</p>
            <a href="/neworder/delivery" className="bg-purple-500 py-4 px-8 rounded-md text-white font-bold hover:shadow-2xl duration-300">start a delivery order</a>
        </div>
    )
}

export default Deliveries