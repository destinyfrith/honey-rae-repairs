import React from "react"
import { Route } from "react-router-dom"
import { TicketList } from "./serviceTickets/TicketList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"

// this is controlling what you see when you click each indiviudal link on the nav bar
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employee/create">
                <EmployeeForm />
            </Route>
            <Route path="/ticket/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}

// change tickets to exact path because you don't want tickets and create ticket to show on dom when you do tickets/create
