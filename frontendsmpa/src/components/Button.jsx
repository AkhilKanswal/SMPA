import React from 'react'
import { Link } from 'react-router-dom'


export default function Button(props) {
  
  return (
    <>
       <Link className={`btn ${props.class}`} to={props.url}>{props.text}</Link>
    </>
  )
}