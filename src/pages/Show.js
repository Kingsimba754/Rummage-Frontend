import { useParams,useNavigate } from "react-router-dom";
import NumericLabel from "../components/NumericLabel";

import React from 'react'

function Show(props) {
    const{ id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () =>{
        props.deleteRummage(id);
        navigate('/');
    };
    const goHome = ()=>{
        navigate('/')
    };

    const item = props.items ? props.items.find(item => item._id === id) : null;
    
    const loaded = () =>{
        return (
            <div className="item-show">
                <div className="item-show-grid">
                    {item.image && <img src={item.image} alt = {item.name}/>}
                </div>
                <div className="item-show-grid">
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                    {/* <span className="usd">$</span> {item.price} */}
                    <h4><NumericLabel params={{ currency: true, shortFormat: false, justification: 'C'}}>{item.price}</NumericLabel></h4>
                    <button onClick = {handleDelete}>Delete this Item</button>
                    <button onClick = {goHome}>Back to list</button>
                </div>
            </div>
        );
    };
    const loading = () =>{
        return <h2>Loading...</h2>
    }; 

    return (
        <section>
            { props.items ? loaded() : loading() }
        </section>
    );

}

export default Show