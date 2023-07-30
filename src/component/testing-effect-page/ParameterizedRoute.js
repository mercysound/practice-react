import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';

const ParameterizedRoute = () => {
  //we will destructure the name coming from parent component path after :
  // const [fordetainObject, setfordetainObject] = useState([])
  let {name} = useParams()
  // const obj = {names:"allao ", School:"saint mount", class:"jss1"}
  // setfordetainObject(obj)
  // let myNewName = {name}
  // const [names, setnames] = useState([])
  
  // setnames({myNewName})
  // console.log(names);
  return (
    <Layout>
      {name}
    </Layout>
  )
}

export default ParameterizedRoute;