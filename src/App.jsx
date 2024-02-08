import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import HouseListing from '../src/components/HouseListing/HouseListing'
import SearchBar from './components/SearchBar/SearchBar'
function App() {

  return (
    <>
      <Header/>
      <SearchBar/>
      <HouseListing/>
    </>
  )
}

export default App
