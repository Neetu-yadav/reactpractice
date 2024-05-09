import { useState } from "react";

// export function ButtonDemo(){

//     // function ViewLarge(){
//     //     window.open('kids.png','Kids','width=500 height=600');
//     // }

//     // function DisableContext(){
       
//     //     document.oncontextmenu = function(){
//     //         alert("Right Click Disabled");
//     //         return false;
//     //     }
//     // }


//     function ViewLarge(){
//         document.onDoubleClick = function(){
//             alert("Double Click is Disabled");
//             return false;
//         }
//     }
//     return(
//         <div className="container-fluid" onContextMenu={DisableContext} >
//             <h2>Button Events</h2>
//             <img onDoubleClick={ViewLarge} src="mobile.png" width="100" height="100" />
//             <p>Double Click to View Large</p>
//         </div>
//     )
// }


// import { useState } from "react"

// export function ButtonDemo(){
//     const [msg, setMsg] = useState('');
//     const [cityError, setCityError] = useState('');
   
//     function NameBlur(e){
//         if(e.target.value==""){
//             setMsg('User Name Required');
//         } else {
//             setMsg('');
//         }
//     }
//     function VerifyCity(e){
//         if(e.target.value=="-1"){
//             setCityError('Please Select Your City');
//         } else {
//             setCityError('');
//         }
//     }

//     return(
//         <div className="container-fluid" >
//             <div>
//                 <p>Selecting Text is disable in this page.</p>
//                 <dl>
//                     <dt>User Name</dt>
//                     <dd><input type="text" onBlur={NameBlur} placeholder="Name in Block Letters"/></dd>
//                     <dd className="text-danger">{msg}</dd>
//                     <dt>Your City</dt>
//                     <dd>
//                         <select onChange={VerifyCity}>
//                             <option value="-1">Select Your City</option>
//                             <option value="Delhi">Delhi</option>
//                             <option value="Hyd">Hyd</option>
//                         </select>
//                     </dd>
//                     <dd className="text-danger">{cityError}</dd>
//                 </dl>
//             </div>
//         </div>
//     )
// }


// export function ButtonDemo(){
//     const [msg, setMsg] = useState('');
//     const [cityError, setCityError] = useState('');
   
//     function NameBlur(e){
//         if(e.target.value===""){
//             setMsg('User Name Required');
//         } else {
//             setMsg('');
//         }
//     }
//     function VerifyCity(e){
//         if(e.target.value==="-1"){
//             setCityError('Please Select Your City');
//         } else {
//             setCityError('');
//         }
//     }

//     return(
//         <div className="container-fluid" >
//             <div>
//                 <p>Selecting Text is disable in this page.</p>
//                 <dl>
//                     <dt>User Name</dt>
//                     <dd><input type="text" onBlur={NameBlur} placeholder="Name in Block Letters"/></dd>
//                     <dd className="text-danger">{msg}</dd>
//                     <dt>Your City</dt>
//                     <dd>
//                         <select onChange={VerifyCity}>
//                             <option value="-1">Select Your City</option>
//                             <option value="Delhi">Delhi</option>
//                             <option value="Hyd">Hyd</option>
//                         </select>
//                     </dd>
//                     <dd className="text-danger">{cityError}</dd>
//                 </dl>
//             </div>
//         </div>
//     )
// }



export function ButtonDemo(){
    const [msg, setMsg] = useState('');
   
    function Cut(){
        setMsg('Removed - Copied to Clipboard');
    }
    function Copy(){
        setMsg('Copied to Clipboard');
    }
    function Paste(){
        setMsg('Inserted from Clipboard');
    }

    return(
        <div className="container-fluid" >
            <div>
               <textarea onCut={Cut} onCopy={Copy} onPaste={Paste} rows="4" cols="40"></textarea>
               <p>{msg}</p>
            </div>
        </div>
    )
}
