import { useState } from 'react'

import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import "./assets/css/style.css"

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}