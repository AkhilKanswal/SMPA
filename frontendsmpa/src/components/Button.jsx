import React from 'react'

export default function Button(props) {
  
  return (
    <>
       <a className={`btn ${props.class}`} href="">{props.text}</a>
    </>
  )
}