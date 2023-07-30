import Layout from '../layout/Layout';
import Changefuture from '../assignment/component/ChangeYourFuture/Changefuture';
import Escape from '../assignment/component/Escapecom/Escape';
// import Footer from './component/Footer/Footer';
import FreetoStartSec from '../assignment/component/FreeToStart/FreetoStartSec';
import Herosec from '../assignment/component/Herosec/Herosec';
import Lesstresssec from '../assignment/component/LessStressSec/Lesstresssec';
import Needhelp from '../assignment/component/NeedHelp/Needhelp';
import Eatingwo from '../assignment/component/TestimonySec/Eatingwo';
import Testimonycaro  from '../assignment/component/TestimonySec/Testimonycaro';
import Unmarchfea from '../assignment/component/UnmatchFeature/Unmarchfea';
import Waytosee from '../assignment/component/Waytosee/Waytosee';
// import Header from './component/header/Header';

const Teachable = () => {
  return (
      <>
        {/* <Header/> */}
        <Herosec/>
        <Escape/>
        <Waytosee/>
        <FreetoStartSec/>
        <Lesstresssec/>
        <Unmarchfea/>
        <Needhelp/>
        <Testimonycaro/>
        <Eatingwo/>
        <Changefuture/>
        {/* <Footer/> */}
      </>
  )
}

export default Teachable;