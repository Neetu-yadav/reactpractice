import logo from './logo.svg';
// import './App.css';
import {Login} from './Components/Login';
// import{DataBinding} from './Components/DataBinding';
// import { Flipkart } from './Components/Flipkart';
// import { Nasa } from './Components/nasa-new/nasa';
// import { Fakestore } from './Components/fakestore';
// import {Shopping} from './Components/Cart';
import { Cart2 } from './Components/Cart2'; 
import { StyleBinding } from './Components/stylebinding';
import { ClassBinding } from './Components/ClassBinding/classCss.jsx';
import {EventBinding2} from './Components/EventBinding.jsx';
import { KeyEvents } from './Components/keyEvents.jsx';
import { TimeEvent } from './Components/TimeEvent.jsx';
import { ButtonDemo } from './Components/buttonEvent.jsx';
import { EventBinding } from './Components/EventBinding.jsx';
import { FormEvent} from './Components/FormEvent.jsx';
import { PropsDemo } from './Components/props/PropsDemo.jsx';
import { ConditionalRender, RenderDemo } from './Components/conditionalrender.jsx';
import { RenderDemo2 } from './Components/gridrender/renderdemo2.jsx';
import { HooksDemo } from './Components/Hooks/useEffect.jsx';
import { ContextDemo } from './Components/Hooks/useContext.jsx';
// import { Captcha } from './Components/Hooks/captchahook.jsx';
import { ChangeCase } from './Components/Hooks/captchahook.jsx';
// import { ApiData } from './Components/Hooks/ApiFetch.jsx';
import { ReducerDemo } from './Components/Hooks/UseReducer.jsx';
import{ReferenceDemo} from'./Components/Hooks/useRef.jsx';
import {ABC} from './Components/Routing/routing.jsx';
export default function App(){
  return(
    <>
     {/* <Login/> */}
{/*<DataBinding/> */}
     {/* <Nasa/> */}
     {/* {<Fakestore/>} */}
     {/* <Shopping/> */}
    <Cart2/>
    {/* <StyleBinding/> */}
    {/* <ClassBinding/> */}
    {/* <EventBinding2/> */}
    {/* <KeyEvents/> */}
    {/* <ButtonDemo/> */}
    {/* <TimeEvent/> */}
    {/* <EventBinding/> */}
    {/* <FormEvent/> */}
    {/* <PropsDemo/> */}
    {/* <RenderDemo/> */}
    {/* <RenderDemo2/> */}

    {/* <HooksDemo/> */}
    {/* <ContextDemo/> */}
    {/* <Captcha/> */}

    {/* <ChangeCase/> */}
    {/* <ApiData/> */}
    {/* <ReducerDemo/> */}
    {/* <ReferenceDemo/> */}
    <ABC/>

     </>
  )
  
}
