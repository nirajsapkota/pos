import React, { FC, useEffect, useState } from "react"
import Modal from "react-modal"

import Placeholder from "./niraj.jpg"
import UploadIcon from "_icons/upload.png"
import { EditorProps } from "../../typings"

import {
    CreateEmployee,
    DeleteEmployee,
    UpdateEmployee
} from "./Requests"


Modal.setAppElement("#root")

const Editor: FC<EditorProps> = ({ showEditor, setShowEditor, employee, triggered, setTriggered }) => {
    const [name, setName] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [contact, setContact] = useState<string>("")

    useEffect(() => {
        if (employee === null) {
            setName("")
            setPosition("")
            setEmail("")
            setContact("")
        } else {
            setName(employee.name)
            setPosition(employee.position)
            setEmail(employee.email)
            setContact(employee.contact)
        }
    }, [employee])

    const ExecuteCancelOrDelete = async () => {
        if (employee !== null) {
            await DeleteEmployee(employee._id)
            setTriggered(triggered + 1)
        }

        setShowEditor(false)
    }

    const ExecuteCreateOrUpdate = async () => {
        if (name === ("" || null) || position === ("" || null) || email === ("" || null) || contact === ("" || null))
            return

        if (employee === null)
            await CreateEmployee(name, position, email, contact)
        else
            await UpdateEmployee(employee._id, name, position, email, contact)

        setTriggered(triggered + 1)
        setShowEditor(false)
    }

    return (
        <Modal
            isOpen={showEditor}
            onRequestClose={() => setShowEditor(false)}
            className="employee-modal"
            overlayClassName="employee-modal-overlay">

            <div className="grid grid-cols-2 h-full">

                <div className="flex flex-col items-center justify-center">
                    <img src={Placeholder} width={256} height={256} style={{ borderRadius: "50%" }} className="mb-8" alt="" />
                    <button className="flex flex-row items-center bg-custom-accent rounded-md text-white font-bold py-2 px-4 focus:outline-none">
                        <img src={UploadIcon} width={24} height={24} className="mr-4" alt="" />
                        <p>UPLOAD IMAGE</p>
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center bg-custom-accent">
                    <div className="w-2/3">
                        <p className="text-white">Full name</p>
                        <input
                            className="w-full border-2 font-medium focus:outline-none rounded-md py-2 mb-4 px-4"
                            placeholder="Full name"
                            onChange={(e) => setName(e.target.value)}
                            value={name} />

                        <p className="text-white">Position</p>
                        <input
                            className="w-full border-2 font-medium focus:outline-none rounded-md py-2 mb-4 px-4"
                            placeholder="Position"
                            onChange={(e) => setPosition(e.target.value)}
                            value={position} />


                        <p className="text-white">Email</p>
                        <input
                            className="w-full border-2 font-medium focus:outline-none rounded-md py-2 mb-4 px-4"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />

                        <p className="text-white">Contact number</p>
                        <input
                            className="w-full border-2 font-medium focus:outline-none rounded-md py-2 mb-4 px-4"
                            placeholder="Contact number"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact} />

                        <div className="flex justify-end">
                            <button
                                className="bg-red-400 rounded-md text-white font-bold py-2 px-4 mr-2 focus:outline-none"
                                onClick={() => ExecuteCancelOrDelete()}>{employee === null ? "CANCEL" : "DELETE"}</button>
                            <button
                                className="bg-custom-contrast rounded-md text-white font-bold py-2 px-4 focus:outline-none"
                                onClick={() => ExecuteCreateOrUpdate()}>{employee === null ? "CREATE" : "SAVE"}</button>
                        </div>
                    </div>
                </div>
            </div>


        </Modal>
    )
}

export default Editor