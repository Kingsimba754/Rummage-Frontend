import { useState } from "react"
import { Link } from "react-router-dom"



const Landing = (props) =>{

    const loaded = () =>{
    return (
    props.rummage.map(items =>(
      <div key = {items._id}>
        <Link to = {`/Rummage/${items._id}`}>
          <h1>{items.name}</h1>
          <div>{items.image}</div>
        </Link>
      <div>{items.price}</div>
      </div>
    ))
  )};

  const loading = () => {
    return <h1>Rummaging through our items</h1>
  };

  { props.rummage ? loaded() : loading() }
  
}






export default Landing