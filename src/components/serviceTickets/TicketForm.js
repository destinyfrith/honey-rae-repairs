import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const TicketForm = () => {

    // we need to track transient state while user is interacting with form 
    // initial state is an object 
    // as user interacts, these two state variables will be updated
    const [ticket, update] = useState({
        description: "",
        emergency: false
    });

    // declare history so you can use it in this module
    const history = useHistory()

    // use UseState variable to create a new onject to post to API
    // put employeeId 1 to avoid react from deleting the object bc it needs foreign key
    const submitTicket = (event) => {
        // this prevents screen from blinking blank when you submit a ticket
        event.preventDefault()

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        // renders the list of tickets for the user to see once they submit a request
        return fetch("http://localhost:8088/serviceTickets", fetchOption)
        .then(() => {
            history.push("/tickets")
        })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        // evt = event is parameter
                        // can't directly modify state so you will use setter function from above (update)
                        // first, copy existing state
                        // change description to whatever has been typed (evt.target.value)
                        // invoke setter function with parameter of copy (which is the ticket)
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description=evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                    // can't check a checkbox's value but you can check to see if it's checked
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency=evt.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={submitTicket} className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}