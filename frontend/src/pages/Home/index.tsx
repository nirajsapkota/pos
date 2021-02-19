import React, { FC } from "react"

import { ReactComponent as NothingToShowYet } from "_images/nothing-to-show-yet.svg"

const Home: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-3/4">
            <NothingToShowYet className="h-1/2 w-1/2 mb-10" />
            <p className="text-white font-bold mb-2">There haven't been any orders yet today,</p>
            <a href="/neworder" className="bg-purple-500 py-4 px-8 rounded-md text-white font-bold hover:shadow-2xl duration-300">start an order</a>
        </div>
    )
}

export default Home