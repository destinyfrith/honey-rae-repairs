import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    // const [specialites, setSpecial] = useState("")
    const history = useHistory()

    // useState is a built in hook 
    // function below gets employee information and set the state 
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployee(employeeArray)
                })
        },
        []
    )

    // useEffect(() => {
    //     const JustSpecialties = employees.map(emp => emp.specialty)
    //     setSpecial(JustSpecialties.join(","))
    // }, [employees])

    // below is the html layout display for employees list
    // includes button that reroutes to employee/create 
    return (
        <>
            <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}