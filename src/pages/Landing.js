import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import NumericLabel from "../components/NumericLabel";


const Landing = (props) => {

  // Loaded function
  const loaded = () => {

    return  props.items.map((item) => (
        <div key={item._id} className="item" style={{ backgroundImage: `url("${item.image}")`}}>
          <Link to={`/${item._id}`}>
            <h2>{item.name}</h2> 
            <h3 className="price-disp"><NumericLabel params={{ currency: true, shortFormat: true, justification: 'C'}}>{item.price}</NumericLabel></h3>
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
    <>
    <Hero/>
    <section>
        {props.items ? loaded() : loading()}
    </section>
    </>
  )
};

export default Landing;