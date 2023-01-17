import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Landing from '../pages/Landing';
import Show from '../pages/Show';

function Main(props){
  const [rummage, setRummage] = useState(null);
  const URL = "http://localhost:4000/Rummage/";

  const getRummage = async () =>{
    const response = await fetch(URL);
    const data = await response.json();
    setRummage(data);
  }

  const createRummage = async (thing) => {
    await fetch (URL, {
      method: 'POST',
      headers:{
        "Content-type": "Application/json"
      },
      body: JSON.stringify(thing)
    });
    getRummage();
  };
  const updateRummage = async (id,updatedThing) =>{
    await fetch(URL + id,{
      method:'PUT',
      headers:{
        'Content-type': 'Application/json'
      },
      body:JSON.stringify(updatedThing)
    });
    getRummage();
  };

const deleteRummage = async (id)=>{
  await fetch (URL+ id, {
    method:'DELETE'
  });
  getRummage();
};

useEffect(()=>{
  getRummage();
},[]);


  return (
    <main>
      <Routes>
        <Route path = '/' element={
        <Landing
        rummage={rummage}
        createRummage ={createRummage}/>}/>
        
        <Route path = '/Rummage/:id' element = {
        <Show
          rummage= {rummage}
          deleteRummage ={deleteRummage}
          updateRummage = {updateRummage}
        />}/>

      </Routes>
    </main>
  )
}

export default Main