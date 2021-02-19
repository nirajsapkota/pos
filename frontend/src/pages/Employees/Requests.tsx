import axios, { AxiosPromise } from "axios"

const CreateEmployee = (name: string, position: string, email: string, contact: string): AxiosPromise<any> => {

    return axios({
        url: "http://localhost:4000/employees",
        method: "POST",
        data: {
            "name": name,
            "position": position,
            "email": email,
            "contact": contact
        }
    })

}

const GetEmployees = (): AxiosPromise<any> => {

    return axios({
        url: "http://localhost:4000/employees",
        method: "GET"
    })

}

const UpdateEmployee = (id: string, name: string, position: string, email: string, contact: string): AxiosPromise<any> => {

    return axios({
        url: "http://localhost:4000/employees",
        method: "PUT",
        data: {
            "id": id,
            "name": name,
            "position": position,
            "email": email,
            "contact": contact
        }
    })

}

const DeleteEmployee = (id: string): AxiosPromise<any> => {

    return axios({
        url: "http://localhost:4000/employees",
        method: "DELETE",
        data: {
            "id": id
        }
    })

}

export {
    CreateEmployee,
    GetEmployees,
    UpdateEmployee,
    DeleteEmployee
}