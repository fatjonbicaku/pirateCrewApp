import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

function Dashborad() {
  return (
    <>
    <Nav route='/pirate/new' link='Add Pirate' />
    <div>Welcome to Pirate Crew</div>
    <Link to={'/pirates'}>Crew List</Link>
    
    </>
    
  )
}

export default Dashborad