
import { useState , useEffect} from "react";

// export function Flipkart(){

//     const [product, setProduct] = useState({title:'', price:0, ratings:{rate:0, count:0, reviews:0}, features:[], photo:''});


    

//     function LoadClick(){
//         fetch("product.json")
//         .then(response=>{
//             return response.json();
//         })
//         .then(product=> {
//             setProduct(product);
//         })
//     }

//     return(
//         <div className="container-fluid">
//             <button onClick={LoadClick} className="btn btn-success mt-3">Load Data</button>
//             <div className="row mt-4">
//                 <div className="col-3">
//                     <img src={product.photo} width="250"/>
//                 </div>
//                 <div className="col-7">
//                     <p className="text-primary h4">{product.title}</p>
//                     <div>
//                         <span className="bg-success text-white p-2 rounded">
//                             {product.ratings.rate} <span className="bi bi-star-fill"></span>
//                         </span>
//                         <span className="ms-3">
//                             <b>{product.ratings.count} Ratings & {product.ratings.reviews} Reviews</b>
//                         </span>
//                     </div>
//                     <ul className="mt-4">
//                         {
//                             product.features.map(feature=>
//                                 <li key={feature}>{feature}</li>
//                                 )
//                         }
//                     </ul>
//                 </div>
//                 <div className="col-2">
//                     <p className="h3">&#8377; {product.price} </p>
//                 </div>
//             </div>
//         </div>
//     )
// }


export function Flipkart(){

    const [products, setProducts] = useState([{title:'', price:0, ratings:{rate:0, count:0, reviews:0}, features:[], photo:''}]);

    function LoadProducts(){
        fetch("products.json")
        .then(res=>res.json())
        .then(products=>{
            setProducts(products);
        })
    }

    useEffect(()=>{
       LoadProducts();
    },[]);

    return(
        <div className="container-fluid">
             {
                products.map(product=>
                    <div className="row mt-4" key={product.title}>
                    <div className="col-3">
                        <img src={product.photo} width="250"/>
                    </div>
                    <div className="col-7">
                        <p className="text-primary h4">{product.title}</p>
                        <div>
                            <span className="bg-success text-white p-2 rounded">
                                {product.ratings.rate} <span className="bi bi-star-fill"></span>
                            </span>
                            <span className="ms-3">
                                <b>{product.ratings.count} Ratings & {product.ratings.reviews} Reviews</b>
                            </span>
                        </div>
                        <ul className="mt-4">
                            {
                                product.features.map(feature=>
                                    <li key={feature}>{feature}</li>
                                    )
                            }
                        </ul>
                    </div>
                    <div className="col-2">
                        <p className="h3">&#8377; {product.price} </p>
                    </div>
                   
                    </div>
                   
                    )
             }
        </div>
    )
}
