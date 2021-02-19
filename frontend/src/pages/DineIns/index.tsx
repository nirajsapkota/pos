import React, { FC } from "react"

import { ReactComponent as EatingTogether } from "_images/eating-together.svg"

const DineIns: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-3/4">
            <EatingTogether className="h-1/2 w-1/2 mb-10" />
            <p className="text-white font-bold mb-2">There haven't been any dine in orders yet today,</p>
            <a href="/neworder/dinein" className="bg-purple-500 py-4 px-8 rounded-md text-white font-bold hover:shadow-2xl duration-300">start a dine in order</a>
        </div>
    )
}

export default DineIns