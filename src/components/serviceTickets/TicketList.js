import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

// expand employee and customer so you can access foreign keys
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticketData) => {
                    updateTickets(ticketData)
                })
        },
        []
    )

    // create ticket button will change the browser URL in order to show the ticket form for users to submit
    return (
        <>
<div>
    <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
</div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p> {ticket.description} Submitted by {ticket.customer.name} {""}
                                and worked on by {ticket.employee.name}</p>
                        </div>
                    }
                )
            }
        </>
    )
}