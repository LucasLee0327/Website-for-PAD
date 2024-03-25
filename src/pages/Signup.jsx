import React, { Component } from "react";
import { useState } from 'react'

function Signup() {
    const {people_count,setCount} = useState(0)
    
    return (
        <>
            <p>Sign up</p>
            <h3>本功能待開發中</h3>
            <form method="POST" action="/">
                <label for="account_id">帳號:</label>
                <input id="account_id" type="text" name="account"/>
                <br/>
                <label for="password">密碼:</label>
                <input id="password" type="password" name="password"/>
                <br/>
            </form>
        </>
  )
}

export default Signup

// <button type="submit">註冊</button>