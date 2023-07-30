import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout';
import CountriesList from "../component/CountriesList";
import Weatherapp from '../component/Weatherapp';
const Testinguseefeect = () => {
  const [count, setcount] = useState("use efeect has not done with setstate")
  
  useEffect(() => {
    setTimeout(() => {
      setcount("Use effect has now change the state 5 seconds after mounting of this page")
    }, 5000);
  }, []);
  
  return (
    <Layout>
      <h1>{count}</h1>
      <Weatherapp/>
      <CountriesList/>
    </Layout>
  )
}

export default Testinguseefeect;