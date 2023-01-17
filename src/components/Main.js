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

useEffect(()=>{
  getRummage();
},[]);


  return (
    <main>
      <Routes>
        <Route path = '/' element={<Landing/>}/>
        <Route path = '/Rummage/:id' element = {<Show/>}/>

      </Routes>
    </main>
  )
}

export default Main