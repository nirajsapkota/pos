import React, { FC } from "react"

import { ReactComponent as ChevronBackIcon } from "_icons/chevron-back.svg"
import { ReactComponent as TakeawayIcon } from "_icons/takeaway-color.svg"

const NewOrderTakeaway: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="w-1/6">
                <div className="flex items-center font-bold">
                    <TakeawayIcon width={48} height={48} className="mr-4" />
                    <p className="text-white">New Takeaway</p>
                </div>

                <div className="my-10">
                    <div className="flex flex-col w-full mb-4">
                        <label className="text-white font-medium mb-1">Customer ID</label>
                        <input className="rounded-md focus:outline-none py-2 px-2" />
                    </div>

                    <div className="flex flex-col w-full mb-4">
                        <label className="text-white font-medium mb-1">Name</label>
                        <input className="rounded-md focus:outline-none py-2 px-2" />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-white font-medium mb-1">Notes</label>
                        <textarea className="rounded-md focus:outline-none h-24 py-2 px-2" />
                    </div>
                </div>

                <div className="flex justify-between">
                    <a href="/neworder" className="bg-custom-background rounded-md flex items-center py-3 px-4 hover:shadow-2xl duration-300">
                        <ChevronBackIcon width={32} height={32} fill="white" />
                        <p className="text-white">Back to Order Selection</p>
                    </a>
                    <a href="/neworder/orderbuilder" className="text-white font-bold bg-purple-500 rounded-md flex items-center py-3 px-4 hover:shadow-2xl duration-300">continue</a>
                </div>
            </div>
        </div>
    )
}

export default NewOrderTakeaway