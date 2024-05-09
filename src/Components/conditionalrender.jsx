// import { useState } from "react"

// function ViewComponent(props){
//     return(
//         <tr>
//             <td>Your Name</td>
//             <td><label>{props.uname}</label></td>
//             <td><button>Edit</button></td>
//         </tr>
//     )
// }
// function EditComponent(props){
//     return(
//         <tr>
//             <td>Your Name</td>
//             <td><input type="text" value={props.uname} /></td>
//             <td><button>Save</button></td>
//         </tr>
//     )
// }

// export function RenderDemo(){

//     const [component, setComponent] = useState(<ViewComponent uname='John'/>);

//     function ViewClick(){
//         setComponent(<ViewComponent uname='John' />);
//     }
//     function EditClick(){
//         setComponent(<EditComponent uname='hello' />)
//     }

//     return(
//         <div className="container-fluid">
//             <h3>User Details <button onClick={ViewClick} className="bi bi-eye-fill"></button> <button onClick={EditClick} className="bi bi-pen-fill"></button> </h3>
//             <table className="table table-hover w-50">
//                 <tbody>
//                     {component}
//                 </tbody>
//             </table>
//         </div>
//     )
// }








































// import { useEffect, useState } from "react"


// function ViewComponent(props){
//     return (
//         <label>{props.UserName}</label>
//     )
// }
// function EditComponent(props){
//     return(
//         <input type="text"  value={props.UserName} />
//     )
// }

// export function RenderDemo(){

//     const [userName, setUserName] = useState('John');
//     const [btnText, setBtnText] = useState('Edit');
//     const [component, setComponent] = useState('');

//     useEffect(()=>{
//         setComponent(<ViewComponent UserName={userName} />)
//     },[]);

//     function ToggleComponent(){
//         if(btnText==="Edit"){
//             setBtnText("Save");
//             setComponent(<EditComponent UserName={userName} />)
//         } else {
//             setBtnText("Edit");
//             setComponent(<ViewComponent UserName={userName} />)
//         }
//     }

//     return(
//         <div className="container-fluid">
//             <h3>User Details  </h3>
//             <table className="table table-hover w-50">
//                 <tbody>
//                    <tr>
//                     <td>Your Name</td>
//                     <td> {component} </td>
//                     <td>
//                         <button onClick={ToggleComponent} className="btn btn-primary me-2"> {btnText} </button>
//                         <button className="btn btn-danger">Cancel</button>
//                     </td>
//                    </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }


// import { useEffect, useState } from "react"


// export function RenderDemo(){

//     const [userName, setUserName] = useState('John');
//     const [btnText, setBtnText] = useState('Edit');
//     const [component, setComponent] = useState('');

//     useEffect(()=>{
       
//     },[]);

//     function ToggleComponent(){
//         if(btnText==="Edit") {
//             setBtnText("Save");
//         } else {
//             setBtnText("Edit");
//         }
//     }

//     function NameChange(e){
//         setUserName(e.target.value);
//     }

//     return(
//         <div className="container-fluid">
//             <h3>User Details  </h3>
//             <table className="table table-hover w-50">
//                 <tbody>
//                    <tr>
//                     <td>Your Name</td>
//                     <td>
//                         {
//                             (btnText==="Edit")?<label onDoubleClick={ToggleComponent}>{userName}</label>:<input type="text" onChange={NameChange} value={userName} />
//                         }
//                      </td>
//                     <td>
//                         <button onClick={ToggleComponent} className="btn btn-primary me-2"> {btnText} </button>
//                         <button className="btn btn-danger">Cancel</button>
//                     </td>
//                    </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }





