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
      </a>
    </li>
  </ul>
  <ul>
    <li>
      <a href="/" className="secondary"><h2 className="head-title">Rummage</h2>
      </a>
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