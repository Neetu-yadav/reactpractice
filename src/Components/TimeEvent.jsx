// import { useEffect, useState } from "react"

// export function TimeEvent(){
   
//     const [clock, setClock] = useState(Date());
//     const [msg, setMsg] = useState('');

//     function ShowClock(){
//         var time = new Date();
//         setClock(time.toLocaleTimeString());
//     }

//     useEffect(()=>{
//         setInterval(ShowClock,1000);
//         var date = new Date();
//         var hrs = date.getHours();
//         if(hrs>=0 && hrs<=12){
//             setMsg('Good Morning');
//         } else if(hrs>12 && hrs<=15) {
//             setMsg('Good Afternoon');
//         } else if(hrs>15 && hrs<=23){
//             setMsg('Good Evening');
//         }
//     },[])

//     return(
//         <div className="container-fluid" >
//             <p className="text-center mt-3">
//                 {clock} <br />
//                 {msg}
//             </p>
//         </div>
//     )
// }


// import { useEffect, useState } from "react"

// export function TimeEvent(){

//     const [buttonContainer, setButtonContainer] = useState({display:'block'});
//     const [loadingContainer, setLoadingContainer] = useState({display:'none'});
//     const [imageContainer, setImageContainer] = useState({display:'none'});
//     const [count, setCount] = useState(0);

//     var i = 0;
//     function LoadImage(){
//         i++;
//         let j = i*10;
//         setCount(j);
//         if(j==100){
//             setLoadingContainer({display:'none'});
//             setImageContainer({display:'block'});
//             return;
//         }
//     }

//     function LoadClick(){
//         setInterval(LoadImage,200);
//         setButtonContainer({display:'none'});
//         setLoadingContainer({display:'block'});
//     }
   
//     useEffect(()=>{
 
//     },[])

//     return(
//         <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
//             <div>
//                 <div style={buttonContainer}>
//                     <button onClick={LoadClick} className="btn btn-primary">Load Image</button>
//                 </div>
//                 <div style={loadingContainer} className="text-center">
//                     <div className="spinner-border text-success"></div>
//                     <div>{count} % completed</div>
//                 </div>
//                 <div style={imageContainer}>
//                     <img src="mobile.png" width="300" height="400"/>
//                 </div>
//             </div>  
//         </div>
//     )
// }


import { useState } from "react"

export function TimeEvent(){

    const [msg, setMsg] = useState('');

    function GetDetails(e){
        switch(e.target.id){
            case "men":
            setMsg('40% OFF on Men Clothing - Offer Ends 31-Aug-2023');
            break;
            case "women":
            setMsg('SALE on Women Fashion - 50% OFF');
            break;
        }
    }

    return (
        <div className="container-fluid">
            <h3>Fashion Store</h3>
            <img src="mobile.png" id="men" onTouchStart={GetDetails} width="200" height="300"/>
            <img src="mobile.png" id="women" onTouchStart={GetDetails} width="200" height="300" />
            <h3>{msg}</h3>
        </div>
    )
}


