import React from 'react';


const Header = (props) => {
  return (
    <nav>
      
  <ul className="nav-el">
    <li>
      <a href="/" className="logo-head">
        <img src="https://dev.lehi.work/img/rumg-logo.png"/>
      </a>
    </li>
  </ul>
  <ul>
    <li><h2 className="head-title">Rummage</h2></li>
  </ul>
  <ul className="nav-el">
  {/* <li>
      <a href="/firebase-auth" className="primary">
       <button className="contrast outline">Login</button>
      </a>
    </li> */}
    <li>
      <a href="/rummage/new" className="primary">
       <button className="contrast outline">Create</button>
      </a>
    </li>
  </ul>
</nav>
  )
}
export default Header