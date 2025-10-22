import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"


export default function Header() {
  
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-item-start'>
        <Link className='navbar-brand text-light' to="/">SMAP (Your management assistant)</Link>

        <div>
          <Button text="Login" class="btn-outline-info" url="/login"/>
          &nbsp;
          <Button text="Register" class="btn-info" url="/register"/>
        </div>

      </nav>
    </>
  )
}