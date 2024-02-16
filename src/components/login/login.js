import React from 'react';
import './login.css'

export default function login() {
  return(
    <div className="login-wrapper">
        <form>
            <label for="username">Username</label>
          <br/>
            <input id="username" type="text"/>
          <br/>
            <label for="password">Password</label>
          <br/>
            <input id="password" type="password"/>
        </form>
    </div>
  )
}
