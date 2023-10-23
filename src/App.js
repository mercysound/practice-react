import React from 'react'
// import Header from './component/header';
// import Mybutton from './button/Mybutton';
import Parentui from './pages/Teachable';
// import Header from './component/Header'
import Usestatesecond from './component/Usestatesecond';
import Todoapp from './component/Todoapp';
// import Testeffect from './component/testing-effect-page/Testeffect';
// import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home';
import Error404 from './pages/Error404';
import Testinguseefeect from './pages/Testinguseefeect';
import Redirectcomp from './component/Redirectcomp';
import ParameterizedRoute from './component/testing-effect-page/ParameterizedRoute';
import MoreDetail from './component/MoreDetail';
import Products from './component/Products';
import Formikform from './component/Formikform';
import {useSelector} from "react-redux"
// use selector allow me to access any piece of state from global store
// import Testeffect from './testing-effect-page/component/Testeffect';

// import ConnectToBackend from './connectToBackend'
// import ChatApp from './ChatApp'

const App = () => {
  let count = useSelector(state=>state)
  console.log(count)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/home"} element={<Navigate to="/"/>}/>
      <Route path={"/teachable"} element={<Parentui/>}/>
      <Route path={"/todoapp"} element={<Todoapp/>}/>
      <Route path={"/usestate"} element={<Usestatesecond/>}/>
      <Route path={"/countries"} element={<Testinguseefeect/>}/>
      <Route path={"/redirect"} element={<Redirectcomp/>}/>
      <Route path={"/countries/:name"} element={<ParameterizedRoute/>}/>
     {/* //nested route: we want a route to be in another route. putting * after Route path name like this "product/*", react understand that there would be nexted route in this product route. By that would be access for another route inside this component*/}
      <Route path="/product/*" element={<Products/>}/>
      {/* children route */}
      <Route path="/product/fish" element={<MoreDetail/>}/>
      <Route path="/formik" element={<Formikform/>}/>

      <Route path={"*"} element={<Error404/>}/>

    </Routes>
    </BrowserRouter>
    {/* <Testeffect/> */}
    {/* <Usestate/> */}
    {/* <Todoapp/> */}
    {/* <Usestatesecond/> */}
      {/* {<Parentui/>} */}
{/* <ConnectToBackend/>  */}
{/* <ChatApp/> */}
{/* <Mybutton gBtnNm={"yellow"} color={"btn btn-warning"} sayAny={sayHello}/> */}
{/* <Header/> */}
{/* {<Fetch/>} */}
    </>
  )
}

export default App;