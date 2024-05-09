
import { useEffect } from "react";
import { useState } from "react"
import './eventBinding.css';

export function EventBinding(){

    const [mobiles, setMobiles ] = useState([{img_src:''}]);
    const [preview, setPerview] = useState('images/m1.jpg');

    useEffect(()=>{
        fetch("mobile.json")
        .then(res=> res.json())
        .then(pics=>{
            setMobiles(pics);
        })
    },[]);

    function DisplayImage(e){
        setPerview(e.target.src);
    }
   
    return(
        <div className="container-fluid">
           <h2>Realme</h2>
           <div className="row">
             <div className="col-2">
                {
                    mobiles.map(mobile=>
                        <div className="mb-4 border border-primary border-2" style={{width:'105px'}}>
                            <img src={mobile.img_src} width="100" height="100" onMouseOver={DisplayImage} />
                        </div>
                        )
                }
             </div>
             <div className="col-10">
                 <img width="500" src={preview} height="600"/>
             </div>
           </div>
        </div>
    )
}




// import { useState } from "react"

// export function EventBinding2(){

//     const [styleObject, setStyleObject] = useState({position:'', top:'', left:''});

//     function GetPosition(e){
//         setStyleObject({
//             position: 'fixed',
//             top: e.clientY + 'px',
//             left: e.clientX + 'px'
//         })
//     }

//     return(
//         <div className="container-fluid" onMouseMove={GetPosition}>
//             <div style={{height:'1000px'}}>
//                 <p>Move your mouse pointer to test</p>
//             </div>
//             <img style={styleObject} src="nitin.jpg" width="200" height="300" />
//         </div>
//     )
// }






// export function EventBinding2(){

//     return(
//         <div className="container-fluid">
//             <marquee scrollamount="15" className="mt-4" onMouseOut={(e)=>{e.target.start()}} onMouseOver={(e)=>{e.target.stop()}} >
//                 <img src="nitin.jpg" width="200" height="200" className="me-4" />
//                 <img src="nitin.jpg" width="200" height="200" className="me-4"  />
//                 <img src="nitin.jpg" width="200" height="200" className="me-4"  />
//                 <img src="nitin.jpg" width="200" height="200" className="me-4"  />
//                 <img src="nitin.jpg" width="200" height="200" className="me-4"  />
//             </marquee>
//         </div>
//     )
// }



// export function EventBinding(){

//     const [msg, setMsg] = useState('');

//     function dataOperations(e){
//         switch(e.target.name){
//             case "Insert":
//             setMsg("Record Inserted");
//             break;
//             case "Update":
//             setMsg("Record Updated");
//             break;
//             case "Delete":
//             setMsg("Record Deleted");
//             break;
//         }
//     }

//     return(
//         <div className="container-fluid">
//             <h3>Event Binding</h3>
//             <button onClick={dataOperations} name="Insert">Insert</button>
//             <button onClick={dataOperations} name="Update">Update</button>
//             <button onClick={dataOperations} name="Delete">Delete</button>
//             <p>{msg}</p>
//         </div>
//     )
// }



// export function EventBinding(){

//     function DetailsClick(products,e){
//         alert(`${products.Name}\n${products.Price}\n${e.clientX}`);
//     }
   
//     return(
//         <div className="container-fluid">
//             <h3>Event Binding</h3>
//             <button onClick={(e)=>{ DetailsClick({Name:'TV', Price:45660.33}, e) }}>Details</button>      
//         </div>
//     )
// }




