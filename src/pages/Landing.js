import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Landing = (props) => {

  // Loaded function
  const loaded = () => {
    
    // let units = ['', 'K', 'M', 'B']
    // let sign = Math.sign(`${item.price}`)
    // let unit = 0
    // while(Math.abs(`${item.price}`) > 1000){
    //   unit = unit + 1
    //   ${item.price} = Math.floor(Math.abs(`${item.price}`) / 100)/10
    // }

    return  props.items.map((item) => (
        <div key={item._id} className="item" style={{ backgroundImage: `url("${item.image}")`}}>
          <Link to={`/${item._id}`}>
            <h2>{item.name}</h2> 
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
    <>
    <Hero/>
    <section>
        {props.items ? loaded() : loading()}
    </section>
    </>
  )
};

export default Landing;