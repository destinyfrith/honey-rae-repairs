import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Ticket = () => {
    const [ticket, assignTicket] = useState({})  // State variable for current ticket object
    const { ticketId } = useParams()  // Variable storing the route parameter (/d+)

    // fetch selected ticket and set state when request comes back from API
    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then((data) => {
                    assignTicket(data)
                })
        },
        [ ticketId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to {ticket.employee?.name}</div>
            </section>
        </>
    )
}

//The optional chaining ‘?.’ is an error-proof way to access nested object properties