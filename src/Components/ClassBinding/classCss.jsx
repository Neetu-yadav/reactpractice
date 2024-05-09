import { useState } from "react";
import './classCss.css';

export function ClassBinding(){

    const [colorTheme, setColorTheme] = useState('light-theme');
    const [headingClr, setHeadingClr] = useState('pinky-clr')
    const [buttonTheme, setButtonTheme]= useState('btn btn-dark w-100');
    const [showCard, setShowCard] = useState();
    const [changeBtn, setChangeBtn] = useState('Hide Button');
 

    function handleThemeChange(e){
        if(e.target.checked) {
            setColorTheme('dark-theme');
            setButtonTheme('btn btn-light w-100');
            setHeadingClr('blue-clr');
        }else {
            setColorTheme('light-theme');
            setButtonTheme('btn btn-dark w-100');
            setHeadingClr('pinky-clr');
        }
    }

    function handleSideBlock(e){
        if(changeBtn == 'Hide Button'){
            setChangeBtn('Show Button');
        }else{
            setChangeBtn('Hide Button');
        }
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <form className={colorTheme} style={{marginRight:'10px'}}>
                    <div className="form-switch">
                        <input type="checkbox" onChange={handleThemeChange}  className="form-check-input"/> Dark Theme
                    </div>
                    <h3 className={headingClr}>User Login</h3>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"/></dd>
                    </dl>
                    <button className={buttonTheme}>Login</button>
                    <button className={buttonTheme} onChange={handleSideBlock} style={{marginTop: '10px'}}>{changeBtn}</button>
                </form>

                <form style={{padding: '20px', border: '2px solid gray', borderRadius: '10px'}}>
                    <div className="form-switch">
                        <input type="checkbox" className="form-check-input"/> Dark Theme
                    </div>
                    <h3 className={headingClr}>User Login</h3>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"/></dd>
                    </dl>
                    <button className={buttonTheme}>Login</button>
                    
                </form>
            </div>
        </div>
    )
}

// Ex: Class Binding with bootstrap classes

// import { useState } from "react";


// export function ClassBinding(){

//     const [colorTheme, setColorTheme] = useState('bg-light text-dark p-4 border border-3 border-dark rounded rounded-3');
//     const [buttonTheme, setButtonTheme]= useState('btn btn-dark w-100');

//     function handleThemeChange(e){
//         if(e.target.checked) {
//         setColorTheme('bg-dark text-white p-4 border border-3 border-warning rounded rounded-3');
//             setButtonTheme('btn btn-light w-100');
//         } else {
//             setColorTheme('bg-light text-dark p-4 border border-3 border-dark rounded rounded-3');
//             setButtonTheme('btn btn-dark w-100');
//         }
//     }

//     return(
//         <div className="container-fluid">
//             <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
//                 <form className={colorTheme}>
//                     <div className="form-switch">
//                         <input type="checkbox" onChange={handleThemeChange}  className="form-check-input"/> Dark Theme
//                     </div>
//                     <h3>User Login</h3>
//                     <dl>
//                         <dt>User Name</dt>
//                         <dd><input type="text" className="form-control"/></dd>
//                         <dt>Password</dt>
//                         <dd><input type="password" className="form-control"/></dd>
//                     </dl>
//                     <button className={buttonTheme}>Login</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
