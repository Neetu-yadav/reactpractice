// import { useEffect, useState } from "react"

// export function StyleBinding(){

//     const [styleObject, setStyleObject] = useState({border:'', boxShadow:''})

//     useEffect(()=>{
//         setStyleObject({
//             border: '1px solid blue',
//             boxShadow: '2px 2px 2px blue'
//         })
//     },[]);

//     function handleNameChange(e){
//         if(e.target.value==""){
//             setStyleObject({
//                 border: '1px solid red',
//                 boxShadow: '2px 2px 2px red'
//             })
//         } else {
//             setStyleObject({
//                 border: '1px solid green',
//                 boxShadow: '2px 2px 2px green'
//             })
//         }
//     }

//     return(
//         <div className="container-fluid">
//             <h3>User Login</h3>
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" placeholder="Name Required" onChange={handleNameChange} style={styleObject} /></dd>
//             </dl>
//         </div>
//     )
// }




import { useEffect, useState } from "react"

export function StyleBinding(){

    const [styleObj, setStyleObj] = useState({display:'none'});

    function  handlePreviewChange(abcd){
        if(abcd.target.checked){
            setStyleObj({
                display:'block',
                backgroundColor:'green'
                
            })
        } else {
            setStyleObj({
                display:'none'
            })
        }
    }

    return(
        <div className="container-fluid">
           <h2>Product Details</h2>
           <dl>
            <dt>Name</dt>
            <dd>Realme C55</dd>
            <dt>Preview <span className="form-switch"> 
                <input type="checkbox" onChange={handlePreviewChange} className="form-check-input" /> 
            </span> </dt>
            <dd style={styleObj}>
                <img src="mobile.png" style={{width:'500px'}} />
            </dd>
           </dl>
        </div>
    )
}
