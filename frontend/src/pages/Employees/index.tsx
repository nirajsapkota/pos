import React, { FC, useEffect, useState } from "react"

import Editor from "./Editor"
import NewEmployee from "./NewEmployee"
import Employee from "./Employee"
import { GetEmployees } from "./Requests"

const Employees: FC = () => {
    const [employees, setEmployees] = useState<any>([])
    const [employee, setEmployee] = useState<any>(null)
    const [showEditor, setShowEditor] = useState<boolean>(false)
    const [triggered, setTriggered] = useState<number>(0)

    useEffect(() => {
        const Fetch = async () => {
            const employees = await GetEmployees()
            setEmployees(employees.data.employees)
        }

        Fetch()
    }, [triggered])

    return (
        <div className="flex flex-col items-center h-screen">
            <Editor
                showEditor={showEditor}
                setShowEditor={setShowEditor}
                employee={employee}
                triggered={triggered}
                setTriggered={setTriggered}
            />

            <div>
                <div className="grid grid-cols-3 gap-4 my-24">
                    <NewEmployee onClick={() => { setEmployee(null); setShowEditor(true) }} />
                    {employees.map((employee: any) =>
                        <Employee
                            key={employee._id}
                            onClick={() => { setEmployee(employee); setShowEditor(true) }}
                            name={employee.name}
                            position={employee.position} />
                    )}
                </div>
            </div>
        </div>
    )
}

// #1A2437

export default Employees