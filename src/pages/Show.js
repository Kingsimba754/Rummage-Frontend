import {usestate,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

import React from 'react'

function Show(props) {
    const{id} = useParams();
    const navigate = useNavigate();

    const handleDelete = () =>{
        props.deleteRummage(id);
        navigate('/');
    };

    const item = props.items ? props.items.find(item => item._id === id) : null;
    
    const loaded = () =>{
        return (
            <div className="item">
                <h2>{item.name}</h2>
                <h2>{item.image && <img src={item.image} alt = {item.name}/>}</h2>
                <h3>{item.description}</h3>
                {/* <form onSubmit = {handleSubmit}>

                </form> */}
                <button onClick = {handleDelete}>Delete this Item</button>
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