import React from "react"
import { Route } from "react-router-dom"
import { TicketList } from "./serviceTickets/TicketList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./customers/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}