import React from 'react'
import Button from './Button'
export default function Header() {
  
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-item-start'>
        <a className='navbar-brand text-light' href="">SMAP (Your management assistant)</a>

        <div>
          <Button text="Login" class="btn-login-info"/>
          &nbsp;
          <Button text="Register" class="btn-info"/>
        </div>

      </nav>
    </>
  )
}