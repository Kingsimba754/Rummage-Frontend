import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import NewForm from './NewForm';
import Card from './Card';
import Show from '../pages/Show';

function Main(props){
  const [rummage, setRummage] = useState(null);
  const URL = "http://localhost:4000/Rummage/";

  // Get data from JSON API created in backend on localhost:4000
  const getRummage = async () =>{
    const response = await fetch(URL);
    const data = await response.json();
    setRummage(data);
  }

  // CREATE
  const createRummage = async (item) => {
    // make post request to create items
    await fetch (URL, {
      method: 'POST',
      headers:{
        "Content-type": "Application/json"
      },
      body: JSON.stringify(item)
    });
    // update list of items
    getRummage();
  };

  // UPDATE
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

  // DELETE
  const deleteRummage = async (id)=>{
    await fetch (URL+ id, {
      method:'DELETE'
    });
    getRummage();
  };

  // Makes initial call for item list
  useEffect(()=>{getRummage()},[]);

  return (
    <main>
      <Routes>
        <Route path = '/' element = {
          <Landing/>} />
          <Route path = '/rummage/new' element = {
            <NewForm/>} />
      </Routes>
      <Card/>
    </main>
  )
}

export default Main