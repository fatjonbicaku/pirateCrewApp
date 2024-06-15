import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import LoginRegister from '../components/RegLoginForm'

function Dashboard() {
  return (
    <>
    <Nav route='/pirate/new' link='Add Pirate' />
    <LoginRegister />
    
    {/* <Link to={'/pirates'}>Crew List</Link> */}
    
    </>
    
  )
}

export default Dashboard