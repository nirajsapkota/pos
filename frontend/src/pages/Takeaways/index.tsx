import React, { FC } from "react"

import { ReactComponent as TakeawayPickup } from "_images/takeaway-pickup.svg"

const Takeaways: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-3/4">
            <TakeawayPickup className="h-1/2 w-1/2 mb-10" />
            <p className="text-white font-bold mb-2">There haven't been any takeaway orders yet today,</p>
            <a href="/neworder/takeaway" className="bg-purple-500 py-4 px-8 rounded-md text-white font-bold hover:shadow-2xl duration-300">start a takeaway order</a>
        </div>
    )
}

export default Takeaways;