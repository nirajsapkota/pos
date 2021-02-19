import React, { FC } from "react"

import { ReactComponent as PlusIcon } from "_icons/icons8-plus.svg"
import { NewEmployeeProps } from "../../typings"

const NewEmployee: FC<NewEmployeeProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="w-72 h-72 rounded-2xl bg-custom-background cursor-pointer">
            <div className="flex flex-col items-center justify-center w-full h-full hover:shadow-2xl duration-300">
                <PlusIcon className="mb-5" />
                <h1 className="text-white font-bold">New Employee</h1>
                <p className="text-custom-contrast">Register a New Employee</p>
            </div>
        </div>
    )
}

export default NewEmployee