import React from "react"
import { Route } from "react-router-dom"
import { TicketList } from "./serviceTickets/TicketList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Ticket } from "./serviceTickets/Ticket"
import { Employee } from "./employees/Employee"

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
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
        </>
    )
}
// line 30 - make a route for individual ticket hyperlinks
// capture whatever primary key is when url changes
// when it is that exact path, render ticket component 

// change tickets to exact path because you don't want tickets and create ticket to show on dom when you do tickets/create
