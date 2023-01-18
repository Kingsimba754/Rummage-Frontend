import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import NewForm from './NewForm';
import Card from './Card';
import Show from '../pages/Show';

function Main(props){
  const [rummage, setRummage] = useState(null);
  const URL = "http://localhost:4000/Rummage/";

  const getRummage = async () =>{
    const response = await fetch(URL);
    const data = await response.json();
    setRummage(data);
  }

  const createRummage = async (Item) => {
    await fetch (URL, {
      method: 'POST',
      headers:{
        "Content-type": "Application/json"
      },
      body: JSON.stringify(Item)
    });
    getRummage();
  };
  const updateRummage = async (id,updatedItem) =>{
    await fetch(URL + id,{
      method:'PUT',
      headers:{
        'Content-type': 'Application/json'
      },
      body:JSON.stringify(updatedItem)
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
        <Route path = '/rummage' element = {
          <Landing
          rummage={rummage}/>}
           />
          <Route path = '/rummage/new' element = {
            <NewForm
            createRummage={createRummage}/>} />
          <Route path = '/rummage/:id' element = {
            <Show
            rummage={rummage}
            updateRummage={updateRummage}
            deleteRummage={deleteRummage}/>} />
      </Routes>
     <Card/>
    </main>
  )
}

export default Main