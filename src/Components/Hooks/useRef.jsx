// import { useRef, useState } from "react"

// export function ReferenceDemo(){
//     const [msg, setMsg] = useState('');
//     let m1 = useRef(null);
//     let m2 = useRef(null);
//     let m3 = useRef(null);

//     function Message1(){
//         setMsg("Hello !");
//     }
//     function Message2(){
//         setMsg("How are you ?");
//     }
//     function Message3(){
//         setMsg("Welcome to React");
//     }

//     function handleStartClick(){
//         console.log(`Start Click`);
//         m1 = setTimeout(Message1, 3000);
//         m2.current = setTimeout(Message2, 6000);
//         m3 = setTimeout(Message3, 10000);
//     }
   

//     function handleCancelClick(){
//         clearInterval(m2.current);
//         console.log('Cancel Clicked');
//     }

//     return(
//         <div className="container-fluid">
//             <button className="mt-4" onClick={handleStartClick}>Start</button>
//             <button className="mt-4" onClick={handleCancelClick}>Cancel Message 2</button>
//             <p className="mt-4 text-center h3">{msg}</p>
//         </div>
//     )
// }



//==================================================================================

import { useEffect, useRef, useState } from "react";

// export function ReferenceDemo(){

//     const [product, setProduct] = useState({});
//     const [status, setStatus] = useState('');
//     let productId = useRef(1);
//     console.log(productId);
//     let slideshow = useRef(null);

//     function LoadProduct(){
//         fetch(`http://fakestoreapi.com/products/${productId.current}`)
//         .then(res=>res.json())
//         .then(product=>{
//             setProduct(product);
//         })
//     }

//     function ChangeImagesAuto(){
//         productId.current = productId.current + 1;
//         fetch(`http://fakestoreapi.com/products/${productId.current}`)
//         .then(res=>res.json())
//         .then(product=>{
//             setProduct(product);
//         })
//     }

//     useEffect(()=>{
//         LoadProduct();
//     },[]);

//     function handlePrevClick(){
//         productId.current = productId.current - 1;
//         LoadProduct();
//     }
//     function handleNextClick(){
//         productId.current = productId.current + 1;
//         LoadProduct();
//     }

//     function handlePlayClick(){
//         slideshow.current = setInterval(ChangeImagesAuto, 5000);
//         setStatus('Slide Show - Started');
//     }
//     function handlePauseClick(){
//         clearInterval(slideshow.current);
//         setStatus('Slide Show - Paused');
//     }


//     return(
//         <div className="container-fluid d-flex justify-content-center">
//             <div className="card p-2 mt-4 w-50">
//                 <div className="card-header text-center" style={{height:'80px'}}>
//                     <span>{product.title}</span>
//                     <div className="text-danger fw-bold">[{status}]</div>
//                 </div>
//                 <div className="card-body text-center">
//                    <div className="row">
//                       <div className="col-1">
//                         <button  onClick={handlePrevClick} className="btn btn-primary"> &lt;  </button>
//                       </div>
//                       <div className="col-10">
//                       <img width="100%" src={product.image}  height="300"/>
//                       </div>
//                       <div className="col-1">
//                         <button onClick={handleNextClick} className="btn btn-primary"> &gt; </button>
//                       </div>
//                    </div>
//                 </div>
//                 <div className="card-footer text-center">
//                     <button onClick={handlePlayClick} className="btn btn-outline-primary">
//                         <span className="bi bi-play"></span>
//                     </button>
//                     <button onClick={handlePauseClick} className="btn btn-outline-danger ms-2">
//                         <span className="bi bi-pause"></span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
//============================================



export function ReferenceDemo(){
    
    const[product, setProduct]=useState({});
    const[status, setStatus] = useState('');
    let productId= useRef(1);
    let slideshow=useRef(null);

    function LoadProduct(){
        fetch(`http://fakestoreapi.com/products/${productId.current}`)
        .then(res=>res.json())
        .then(product=>{
            setProduct(product);
        })
    }

function ChangeImageAuto(){
    productId.current=productId.current+1;
    fetch(`http://fakestoreapi.com/products/${productId.current}`)
    .then(res=>res.json())
    .then(product=>{
        setProduct(product);
    })
}

useEffect(()=>{
    LoadProduct();
})


function handlePrevClick(){
    productId.current=productId.current-1;
    LoadProduct();
}

function handleNextClick(){
    productId.current=productId.current+1;
    LoadProduct();
}

function handlePauseClick(){
    clearInterval(slideshow.current);
    setStatus('slide show-paused')
}

function handlePlayClick(){
    slideshow.current=setInterval
    (ChangeImageAuto,5000);
    setStatus('slide show - started')
}





    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 mt-4 w-50">
                <div className="card-header text-center" style={{height:'80px'}}>
                    <span>{product.title}</span>
                    <div className="text-danger fw-bold">[{status}]</div>
                </div>
                <div className="card-body text-center">
                    <div className="row">
                        <div className="col-1">
                            <button onClick={handlePrevClick} className="btn btn-primary">&lt;</button>
                            </div>
                            <div className="col-10">
                                <img width="100%" src={product.image} height="300"/>
                                
                            </div>
                            <div className="col-1">
                            <button onClick={handleNextClick} className="btn btn-primary">&gt;</button>
                            </div>

                            <div className="card-footer text-center">
                          <button onClick={handlePlayClick} className="btn btn-outline-primary">
                        <span className="bi bi-play"></span>
                     </button>
                    <button onClick={handlePauseClick} className="btn btn-outline-danger ms-2">
                       <span className="bi bi-pause"></span>                    
                       </button>
                 </div>
                            
                    </div>
                    
                </div>
            </div>

        </div>
    )
}