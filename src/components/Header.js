import React from 'react';


const Header = (props) => {
  return (
    <nav>
      
  <ul className="nav-el">
    <li>

      <a href="/">
        <div className="logo-spin">
          <img alt="logo" className="logo-spin" src="https://dev.lehi.work/img/logo-r.png"/>
        </div>
      <a href="/" className="secondary">
        <img src="https://dev.lehi.work/img/rumg-logo.png" alt="LOGO"/>
      </a>
    </li>
  </ul>
  <ul>
    <li>
    <h2 className="head-title"><a href="/">Rummage
      </a></h2>
    </li>
  </ul>
  <ul className="nav-el">
    <li>
      <a href="/new" className="primary">
       <button className="contrast">Post</button>
      </a>
    </li>
  </ul>
</nav>
  )
}
export default Header