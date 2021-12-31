import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'


const AddPost = ({ contacts, addContact }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const checkContactEmailExists = contacts.filter(contact => {
            contact.email == email ? contact : null

        })
        const checkContactPhoneExists = contacts.filter(contact => {
            contact.phone === phone ? contact : null
        });
        if (!email || !name || !phone) {
            return toast.warning("Please fill in all fields!!");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("This email already exists!!");
          }
          if (checkContactPhoneExists.length > 0) {
            return toast.error("This phone number already exists!!");
          }
    }

}