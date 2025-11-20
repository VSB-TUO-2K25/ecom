import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Header from './Components/Header';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export const MyContext = createContext();

function App() {
  
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');

  useEffect(() =>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[])

  const getCountry = async (url) => {
    const response = await axios.get(url).then((res) =>{
    console.log(res.data.data);
    setCountryList(res.data.data)
    })
    
    
  };

  const values ={
    countryList,
    setCountryList,
    selectedCountry,
    setselectedCountry,
  }


  return (
   <>
   <MyContext.Provider value={values}>
    <Header/>
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    
   </Routes>
   </MyContext.Provider>
   </>
  )
}

export default App
 