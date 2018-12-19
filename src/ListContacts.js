import React from "react";

function ListContacts (props) {
    return (
        <ol className="contact-list" >
            {
                props.contacts.map((contact) => (
                    <li>
                        { contact.name }
                    </li>
                ))
            }
        </ol>
    )
}

export default ListContacts;