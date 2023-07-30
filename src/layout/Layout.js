// import Herosec from '../assignment/component/Herosec/Herosec';
import Footer from '../assignment/component/Footer/Footer';
import Header from '../assignment/component/header/Header';

const Layout = (props) => {
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}

export default Layout;