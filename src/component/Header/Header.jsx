import React from 'react'
import {faBed, faCar, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="headerContainer">
        <div className="headerList">
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      </div>
        </div>

    </div>
  )
}

export default Header
