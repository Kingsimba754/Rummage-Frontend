import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
  const loaded = () => {
    return props.rummage.map(Item => (
      <div key={Item._id}>
        <Link to={`/Rummage/${Item._id}`}>
          <h1>{Item.name}</h1>
          <div>{Item.image}</div>
        </Link>
        <div>{Item.price}</div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Rummaging through our Item</h1>;
  };

  {
    props.rummage ? loaded() : loading();
  }
};

export default Landing;
