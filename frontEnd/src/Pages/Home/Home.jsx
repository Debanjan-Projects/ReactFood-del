import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import Contact from '../../Components/Contact/Contact'

const Home = () => {


  const [category, setCategory] = useState("All");
  return (
    <div>
    <Header/>
    <ExploreMenu category ={category}  setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    <Contact/>
    </div>
  )
}

export default Home