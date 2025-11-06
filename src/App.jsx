import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'
const App = () => {
  return (
    <div className="parent">
      <Card user="Aditya" img="https://plus.unsplash.com/premium_photo-1762316822776-d67780b2a844?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632" />
      <Card user="Ankit" img="https://images.unsplash.com/photo-1762247420733-af349e90ade5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632" />
      <Card user="Aarush" img="https://images.unsplash.com/photo-1760405456862-e6a1b1e1f8ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1528" />
    </div>
     
      
  )
}

export default App
