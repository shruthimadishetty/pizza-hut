import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
      <div className="footer_input">
        <h1>How can we help ?</h1>
        <input type="text" placeholder="Help me find something"></input>
        <button className='button_search'>Search</button>
      </div>
    </div>
    </>
  )
}

export default Footer
