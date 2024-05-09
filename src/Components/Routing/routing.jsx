
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import { Login } from './components/login/login';
// import { Register } from './components/register/register';



//  export function ABC() {

//     const [now] = useState(new Date());
  
//     return (
//       <div className="App">
//          <p>Page loaded : {now.toLocaleTimeString()}</p>
//          <BrowserRouter>
//             <nav>
//               <Link className='btn btn-danger me-2' to="/">Home</Link>
//               <Link className='btn btn-danger me-2' to="kids">Kids</Link>
//               <Link className='btn btn-danger me-2' to="women">Women</Link>
//               <Link className='btn btn-danger me-2' to="men">Men</Link>
//               <Link className='btn btn-danger me-2' to="login">Login</Link>
//               <Link className='btn btn-danger' to="register">Register</Link>
//             </nav>
//             <Routes>
//                <Route path='/' element={<><h2>Home</h2><br/><p>Welcome to Home Page.</p></>} />
//                <Route path='kids' element={<><h2>Kids</h2><p>30% OFF on Kids Fashion</p></>} />
//                <Route path='men' element={<><h2>Men's Fashion</h2></>} />
//                <Route path='women' element={<><h2>Women's Fashion</h2></>} />
//                {/* <Route path='login' element={<Login />} />
//                <Route path='register' element={<Register />} /> */}
//                <Route path='*' element={<><code>Page you requested : Not Found</code></>} />
//             </Routes>
//          </BrowserRouter>
//       </div>
//     );
//   }
  
  
  

  //======================================






  export function ABC(){
    const [now] = useState(new Date());


    return(
        <div className='container-fluid'>
            <p>Page Loaded:{now.toLocaleTimeString()}</p>
            <BrowserRouter>

         <nav>
            <Link className='btn btn-danger me-2' to="/">Home</Link>
            <Link className='btn btn-danger me-2' to="kids">Kids</Link>
            <Link className='btn btn-danger me-2' to="women">Women</Link>
         </nav>


         <Routes>
            <Route path='/' element={<><h2>Home</h2></>}/>

            <Route path='kids' element={<><h2>Kids</h2><p>kids wear</p></>}/>
         </Routes>



            </BrowserRouter>
        </div>
    )
  }