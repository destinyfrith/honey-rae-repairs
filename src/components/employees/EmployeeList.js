import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [JustSpecialties, setSpecialty] = useState("")
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

    useEffect(() => {
        const JustSpecialties = employees.map(employee => employee.specialty)
        setSpecialty(JustSpecialties.join(", "))
    }, [employees])

    //below is the html layout display for employees list
    //includes button that reroutes to employee/create 
    return (
        <>
            <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            </div>
            <br></br>
            <div>
                Specialties: {JustSpecialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}> <Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}