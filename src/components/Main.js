import {useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index'

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path = '/' element = {
          <Index/>} />
      </Routes>
    </main>
  )
}

export default Main