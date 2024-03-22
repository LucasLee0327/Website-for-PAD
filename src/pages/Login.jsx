import React, { Component } from "react";
import { useState } from 'react'

function Login() {
    const {people_count,setCount} = useState(0)
    
    return (
        <>
            <h2>Login</h2>
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

export default Login

// <button type="submit">登入</button>