import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, assignEmployee] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter (/d+)

    // fetch selected employee and set state when request comes back from API
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    assignEmployee(data)
                })
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specialty is {employee.specialty}</div>
            </section>
        </>
    )
}

//The optional chaining ‘?.’ is an error-proof way to access nested object properties