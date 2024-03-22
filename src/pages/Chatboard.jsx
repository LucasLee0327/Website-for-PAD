import React, { Component } from "react";
import { useState } from 'react'

function Chatboard() {
    const [textInput, setTextInput] = useState({ name: '', message: '' })
    const [comments, setComments] = useState(
    /** @type {{name: string, message: string}[]} */([])
    )

    /** @type {React.ChangeEventHandler<HTMLInputElement>} */
    const handleTextInputChange = ({ target: { name, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        setTextInput(prev => ({
        ...prev,
        [name]: value,
        }))
    }
    /** @type {React.FormEventHandler<HTMLFormElement>} */
    const handleFormSubmit = (event) => {
        setComments(prev => [...prev, textInput])
        setTextInput({ name: '', message: '' })
        event.preventDefault();
    }

    // next page content
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input name="name" value={textInput.name} onChange={handleTextInputChange} />
                <input name="message" value={textInput.message} onChange={handleTextInputChange} />
                <input type="submit" value="留言" />
            </form>
            <div>
                {comments.map((comment, index) =>
                <div key={index}>
                    <p>
                        {comment.name}
                        <br/>
                        {comment.message}
                    </p>         
                </div>
                )}
            </div>
        </div>
    );

}

export default Chatboard

