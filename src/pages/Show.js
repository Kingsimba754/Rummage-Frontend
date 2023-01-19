import {usestate,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

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
                <h2>{item.name}</h2>
                <h2>{item.image && <img src={item.image} alt = {item.name}/>}</h2>
                <h3>{item.description}</h3>
                <h4>${item.price}</h4>
                {/* <form onSubmit = {handleSubmit}>

                </form> */}
                <button onClick = {handleDelete}>Delete this Item</button>
                <button onClick = {goHome}>Home Page</button>
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