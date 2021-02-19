import React, { FC } from "react"
import Placeholder from "./niraj.jpg"

import { EmployeeProps } from "../../typings"

const Employee: FC<EmployeeProps> = ({ name, position, onClick }) => {
    return (
        <div onClick={onClick} className="w-72 h-72 rounded-2xl bg-custom-background cursor-pointer">
            <div className="flex flex-col w-full h-full hover:shadow-2xl duration-300">
                <div className="flex items-center justify-center h-3/4">
                    <img src={Placeholder} width={128} height={128} style={{ borderRadius: "50%" }} alt="" />
                </div>
                <div className="flex flex-col justify-center h-1/4 pl-8 pb-4">
                    <h1 className="text-white font-bold">{name}</h1>
                    <p className="text-custom-contrast">{position}</p>
                </div>
            </div>
        </div>
    )
}

export default Employee