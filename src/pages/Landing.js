import { Link } from "react-router-dom";

const Landing = (props) => {

  // Loaded function
  const loaded = () => {
    return  props.items.map((item) => (
      <div key={item._id} className="item" style={{ backgroundImage: `url("${item.image}")`}}>

        <Link to={`/${item._id}`}>
          <h1>{item.name}</h1> 
          <h3>${item.price}</h3>
          </Link> 
      </div>
    ));
  };

  // Loading function
  const loading = () => {
    return <h1>Rummaging through our Items</h1>;
  };

  // Return function
  return(
    <section>
        {props.items ? loaded() : loading()}
    </section>
  )
};

export default Landing;