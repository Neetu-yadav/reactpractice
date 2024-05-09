
import { useState } from "react";
// export function DataBinding(){
//   return(
//     <div className="container-fluid">
//       <button className="btn btn-danger">danger</button>
//     </div>
//   )
// }

// export function DataBinding(){
   
//   var id = 1;
//   var name = "Nike Casuals";
//   var stock = false;

//   return(
//       <div className="container-fluid">
//           <h2>Product Details</h2>
//           <dl>
//               <dt>Product Id</dt>
//               <dd>{id}</dd>
//               <dt>Name</dt>
//               <dd>{name}</dd>
//               <dt>Stock</dt>
//               <dd>{(stock==true)?"Available":"Out of Stock"}</dd>
//           </dl>
//       </div>

//   )
// }

// export function DataBinding(){
//   var num=10/3;
//   return(
//     <p> Division : {Math.round(num)} </p>
//   )
// }


// export function DataBinding(){
  
//   var msg = "Welcome to React";
//   return(
   
//   <p> {msg.toUpperCase().slice(7)} </p>

//   )
// }

// export function DataBinding(){
//   var price =0; // 0 consider as undefined
//    return(
//     <p> Price = {(price)?price: "Price not defined"} </p>

// )}



// export function DataBinding(){
//   var price = prompt("Enter Price");

//   return(
//       <div className="container-fluid">
//           {/* <p>Price = {(price=="")?"Please Provide price":price}</p> */}
//           <p> Price = {(price==="")?"Please Enter Price":price} </p>
//       </div>
      

     
  
//   )
// }


// EXAMPLE OF SYMBOL
// let b = 10;
// for(var i=1; i<=b; i++){
//   let c = i+b;
//   function myGreeting() {
// console.log(c);
// }
//   setTimeout(myGreeting, 2000);
// }


// export function DataBinding(){
//     var categories = ["A", "B", "C"];
// return(

//   categories.map(category=> <p> { category } </p>)
// )}


// export function DataBinding(){
//     var categories = ["All", "Electronics", "Footwear", "Fashion"];
//     return(
//         <div className="container-fluid">
//             <nav className="btn-group-vertical">
//                 {
//                     categories.map(category=><button className="btn btn-danger mb-1">{category}</button>)
//                 }
//             </nav>
//            <h2>Categories</h2>
//            <ol>
//              {
//                 categories.map((category)=><li>{category}</li>)
//              }
//            </ol>
//            <select>
//               {
//                  categories.map((category)=><option value={category}>{category}</option>)
//               }
//            </select>
//            <ul>
//               {
//                 categories.map((category)=><li><input type="checkbox"/> <span>{category}</span> </li>)
//               }
//            </ul>
//         </div>

//     )
// }


// data binding map() example

// export function DataBinding(){
//     var categories=["Neetu","Peetu", ]

//     return(
//         <div className="container-fluid">
//             <div className="btn btn-group-vertical">
//                 {
//                     categories.map(category=><button className="btn btn-danger mb-1">{category}</button>)
//                 }
            
//             </div>
           
//         </div>
//     )
// }

// export function DataBinding(){
    
//         var products={
//             "Name":"TV",
//             "Price":3456,
//             "Stock":true,
//             "City":"delhi"

//         }
//         return(
//             <p>{products.products}</p>
//     )
// }


// export function DataBinding(){
//     var product = {
//         "Name": "TV",
//         "Price": 45000.33,
//         "Stock": true,
//         "Cities": ["Delhi", "Hyd"],
//         "Rating": { "Rate":4.2, "Count": 5000 }
//     }
//      return(
//         <>  
//           <p> Name : { product.Name} </p>
//     <p> Name : { product.Price} </p>
//     </>
//      )
// }



// export function DataBinding(){
//     var mobile = {
//         "title": "realme C53 (Champion Black, 64 GB)",
//         "price": 10999,
//         "image": "images/mobile.png",
//         "rating": {"rate":4.5, "count":12644, "reviews":575},
//         "features": [
//             "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
//             "17.12 cm (6.74 inch) HD Display",
//             "108MP + 2MP | 8MP Front Camera",
//             "5000 mAh Battery",
//             "T612 Processor",
//             "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
//         ]
//     }
//     return(
//         <div className="container-fluid">
//             <div className="mt-3 row">
//                 <div className="col-3">
//                     <img src={mobile.image} style={{width:"100%"}} />
//                 </div>
//                 <div className="col-6">
//                     <h3 className="text-primary">{mobile.title}</h3>
//                     <div>
//                         <span className="bg-success p-2 rounded rounded-2 text-white">
//                             {mobile.rating.rate} <span className="bi bi-star-fill"></span>
//                         </span>
//                         <span className="ms-2 fw-bold">
//                             {mobile.rating.count} Ratings & {mobile.rating.reviews} Reviews
//                         </span>
//                     </div>
//                     <div>
//                         <ul className="mt-3">
//                             {
//                                 mobile.features.map(feature=>
//                                     <li>{feature}</li>
//                                     )
//                             }
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="col-2">
//                     <h2>
//                        &#8377; {mobile.price}
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function DataBinding(){
// var product = {
//     "Name": "TV",
//     "Price": 45000.33,
//     "Stock": true,
//     "Cities": ["Delhi", "Hyd", "Bih"],
//     "Rating": { "Rate":4.2, "Count": 5000 },
//     "iu": ["abc", "bcd", "cde"]
// }

// return(
//     <div className="container-fluid">
//         <p>{product.Rating.Count}</p>
//         <ol>
//             {product.Cities.map(buttons=><li className="mt-2"><button className="btn btn-success" >{buttons}</button></li>)}
//         </ol>

//         <select>{product.Cities.map(drop=><option value={product.iu.map(elements=><p>{elements}</p>)}>{drop}</option>)}</select>
//         {product.iu.map(elements=><p>{elements}</p>)}
        
//     </div>
// )
// }

// export function DataBinding(){
   
//     var topics = [
//         {"title": "HTML", "description": "It is a markup language"},
//         {"title": "CSS", "description": "It configures styles for HTML"}
//     ];

//     return(
//         <div className="container-fluid">
//             <h2>Topics</h2>
//             <dl>
//                 {
//                     topics.map(topic=>
//                        <div>  <dt>{topic.title}</dt>
//                        <dd>{topic.description}</dd></div>
                       
                        
//                         )
//                 }
//             </dl>
//         </div>

//     )
// }




// export function DataBinding(){
//     var products = [
//        {
//          "title": "iphone (Champion Black 64 GB)",
//          "image": "images/mobile.png",
//          "price": 10999
//        },
//        {
//          "title": "iphone 14(Champion Gold 128 GB)",
//          "image": "images/mobile.png",
//          "price": 15999
//        },
//        {
//         "title": "iphone (Champion Black 64 GB)",
//         "image": "images/mobile.png",
//         "price": 10999
//       }
//     ];

//     return(
//         <div className="container-fluid">
//            <div className="mt-3 d-flex">
//               {
//                  products.map(product=>
//                     <div className="card p-2 m-2 w-25" key={product.title}>
//                         <div className="card-header bg-dark text-white">
//                             <h3>{product.title}</h3>
//                         </div>
//                         <div className="card-body">
//                             <img src={product.image} style={{width:"100%"}} />
//                         </div>
//                         <div className="card-footer">
//                             <h3>&#8377; {product.price}</h3>
//                             <button className="btn btn-danger w-100">
//                                 <span className="bi bi-cart4"></span>
//                                 Buy
//                             </button>
//                         </div>
//                     </div>
//                     )
//               }
//            </div>
//         </div>

//     )
// }



// export function DataBinding(){
   
//     var menu = [
//          {"Category":"Electronics", "Products": ["TV", "Mobile", "Watch"]},
//          {"Category":"Footwear", "Products": ["Casuals", "Sneakers", "Boots"]}
//     ];

//     return(
//         <div className="container-fluid">
//             <h2>Menu</h2>
//             <ol>
//                 {
//                    menu.map(copy=><li>{copy.Category}
                   
//                    <ul>
//                     {
//                      copy.Products.map(items=><li>{items}</li>)   
//                     }
//                     </ul></li>
                  
//                    ) 
//                 }
//             </ol>
//         </div>

//     )
// }



// export function DataBinding(){
   
//     var menu = [
//          {"Category":"Electronics", "Products": ["TV", "Mobile", "Watch"]},
//          {"Category":"Footwear", "Products": ["Casuals", "Sneakers", "Boots"]}
//     ];

//     return(
//         <div className="container-fluid">
//             <h2>Menu</h2>
        
//         <select>
//             {menu.map(data=><optgroup label={data.Category}>{data.Category}
//                 {data.Products.map(items=><option>{items}</option>)}
//             </optgroup>)}
//         </select>
//         </div>

//     )
// }


// export function DataBinding(){
   
//     var topics = [
//         {"title": "HTML", "description": "It is a markup language"},
//         {"title": "CSS", "description": "It configures styles for HTML"}
//     ];

//     return(
//         <div className="container-fluid">
//             <h2>Topics</h2>
//             <dl>
//                {
                
//                    topics.map(items=>
//                    <>
//                    <dt>{items.title}</dt>
//                <dd>{items.description}</dd>
//                 </>
             
//                 )
//                }
//             </dl>
//         </div>

//     )
// }

// export function DataBinding(){
//    var data = {
//     "Heading": ["Maths", "Physics", "Chemistry"],
//     "Below" : [10, 20, 30]
//    }
    
//     return(
//         <div className="container-fluid">
//            <table className="table table-bordered">
//                 {data.map(rows=><tr><td>{rows}</td></tr>)}
//            </table>
//         </div>

//     )
// }



// export function DataBinding(){
   
//     const [categories] = useState(["All", "Electronics", "Footwear"]);    
   
//     return(
//         <div className="container-fluid">
//              <ul>
//                 {
//                     categories.map(category=>
//                         <li key={category}>{ category }</li>
//                         )
//                 }
//              </ul>
//         </div>

//     )
// }


	

// export function DataBinding(){
   
//     const [userName, setUserName] = useState('');

//     function handleNameChange(e){
//         setUserName(e.target.value);
//     }
   
//     return(
//         <div className="container-fluid">
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" value={userName} onChange={handleNameChange} /></dd>
//             </dl>
//             <p>Hello ! {userName} </p>
//         </div>

//     )
// }



// export function DataBinding(){
   
//     const [product, setProduct] = useState({Name:'TV', Price:0, City: 'Select City', Stock: true})

//     function NameChange(e){
//         setProduct({
//             Name: e.target.value,
//             Price: product.Price,
//             City: product.City,
//             Stock: product.Stock
//         })
//     }
//     function PriceChange(e){
//         setProduct({
//             Price: e.target.value,
//             Name: product.Name,
//             City: product.City,
//             Stock: product.Stock
//         })
//     }
//     function CityChange(e){
//         setProduct({
//             City: e.target.value,
//             Name: product.Name,
//             Price: product.Price,
//             Stock: product.Stock
//         })
//     }
//     function StockChange(e){
//         setProduct({
//             Stock: e.target.checked,
//             Name: product.Name,
//             Price: product.Price,
//             City: product.City
//         })
//     }

//     return(
//         <div className="container-fluid">
//            <div className="row mt-4">
//                 <div className="col-4">
//                     <dl>
//                         <dt>Name</dt>
//                         <dd><input onChange={NameChange} type="text" value={product.Name}className="form-control"/></dd>
//                         <dt>Price</dt>
//                         <dd><input onChange={PriceChange} type="number" value={product.Price} className="form-control"/></dd>
//                         <dt>City</dt>
//                         <dd>
//                             <select onChange={CityChange} className="form-select" value={product.City}>
//                                 <option>Select City</option>
//                                 <option>Delhi</option>
//                                 <option>Hyd</option>
//                                 <option>Chennai</option>
//                             </select>
//                         </dd>
//                         <dt>Stock</dt>
//                         <dd className="form-switch">
//                             <input type="checkbox" onChange={StockChange} checked={product.Stock} className="form-check-input"/> <label> {(product.Stock==true)?"Available":"Out of Stock"} </label>
//                         </dd>
//                     </dl>
//                 </div>
//                 <div className="col-8">
//                     <h2>Product Details</h2>
//                     <dl>
//                         <dt>Name</dt>
//                         <dd>{product.Name}</dd>
//                         <dt>Price</dt>
//                         <dd>{product.Price}</dd>
//                         <dt>City</dt>
//                         <dd>{product.City}</dd>
//                         <dt>Stock</dt>
//                         <dd>
//                             {(product.Stock==true)?"Available":"Out of Stock"}
//                         </dd>
//                     </dl>
//                 </div>
//            </div>
//         </div>

//     )
// }



// export function DataBinding(){
   
//     const [product, setProduct] = useState({Name:'TV', Price:0, City: 'Select City', Stock: true})
//     const [updatedproduct, setUpdatedProduct] = useState({Name:'TV', Price:0, City: 'Select City', Stock: true});
//     function NameChange(e){
//         setProduct({
//             Name: e.target.value,
//             Price: product.Price,
//             City: product.City,
//             Stock: product.Stock
//         })
//     }
//     function PriceChange(e){
//         setProduct({
//             Price: e.target.value,
//             Name: product.Name,
//             City: product.City,
//             Stock: product.Stock
//         })
//     }
//     function CityChange(e){
//         setProduct({
//             City: e.target.value,
//             Name: product.Name,
//             Price: product.Price,
//             Stock: product.Stock
//         })
//     }
//     function StockChange(e){
//         setProduct({
//             Stock: e.target.checked,
//             Name: product.Name,
//             Price: product.Price,
//             City: product.City
//         })
//     }

//     function UpdateClick(){
//        setUpdatedProduct({
//           Name: product.Name,
//           Price: product.Price,
//           City: product.City,
//           Stock: product.Stock
//        })
//     }

//     return(
//         <div className="container-fluid">
//            <div className="row mt-4">
//                 <div className="col-4">
//                     <dl>
//                         <dt>Name</dt>
//                         <dd><input onChange={NameChange} type="text" value={product.Name} className="form-control"/></dd>
//                         <dt>Price</dt>
//                         <dd><input onChange={PriceChange} type="number" value={product.Price} className="form-control"/></dd>
//                         <dt>City</dt>
//                         <dd>
//                             <select onChange={CityChange} className="form-select" value={product.City}>
//                                 <option>Select City</option>
//                                 <option>Delhi</option>
//                                 <option>Hyd</option>
//                                 <option>Chennai</option>
//                             </select>
//                         </dd>
//                         <dt>Stock</dt>
//                         <dd className="form-switch">
//                             <input type="checkbox" onChange={StockChange} checked={product.Stock} className="form-check-input"/> <label> {(product.Stock==true)?"Available":"Out of Stock"} </label>
//                         </dd>
//                     </dl>
//                     <button onClick={UpdateClick} className="btn btn-primary w-100">Update</button>
//                 </div>
//                 <div className="col-8">
//                     <h2>Product Details</h2>
//                     <dl>
//                         <dt>Name</dt>
//                         <dd>{updatedproduct.Name}</dd>
//                         <dt>Price</dt>
//                         <dd>{updatedproduct.Price}</dd>
//                         <dt>City</dt>
//                         <dd>{updatedproduct.City}</dd>
//                         <dt>Stock</dt>
//                         <dd>
//                             {(updatedproduct.Stock==true)?"Available":"Out of Stock"}
//                         </dd>
//                     </dl>
//                 </div>
//            </div>
//         </div>

//     )
// }


// export function DataBinding(){
//     const[product,setProduct] = useState({Name:'TV',Price:0, City:'Select City', Stock:true});
//  const[updatedproduct, setUpdatedProduct]=useState({Name:"TV", Price:0, City:"Select City", Stock:true});


//     function NameChange(e){
//         setProduct({
//             Name:e.target.value,
//             Price:product.Price,
//             City:product.City,
//             Stock:product.Stock
//         })
//     }


//     function PriceChange(e){
//         setProduct({
//             Price:e.target.value,
//             Name:product.Name,
//             City:product.City,
//             Stock:product.Stock
//         })
//     }

//     function CityChange(e){
//         setProduct({
//             City:e.target.value,
//             Price:product.Price,
//             Name:product.Name,
//             Stock:product.Stock
//         })
//     }
//     function StockChange(e){
//         setProduct({
//             Stock:e.target.value,
//             Price:product.Price,
//             City:product.City,
//             Name:product.Name
//         })
//     }

//     function UpdateClick(e){
//         setUpdatedProduct({
//             Name:product.Name,
//             Price:product.Price,
//             City:product.City,
//             Stock:product.Stock
//         })
//     }
// return(
//     <div className="container-fluid">
//         <div className="row mt-4">
//             <div className="col-4">
//                 <dl>
//                     <dt>Name</dt>
//                     <dd><input onChange={NameChange}type="text" value={product.Name} className="form-control"/></dd>
                



//                 <dt>Price</dt>
//                     <dd><input onChange={PriceChange} type="text" value={product.Price} className="form-control"/></dd>


                    
//                 <dt>City</dt>
//                 <dd>
//                  <select onChange={CityChange}className="form-select" value={product.City}>
//                     <option>Select City</option>
//                     <option>Delhi</option>
//                     <option>Hyd</option>
//                     <option>pune</option>
//                     </select>
//                     </dd>

//                     <dt>Stock</dt>
//                     <dd className="form-switch">
//                         <input type="checkbox" onChange={StockChange} checked={product.Stock} className="form-check-input"/>
//                         <label>{(product.Stock==true)?"Available":"Out of Stock"}</label>
                        
//                     </dd>


//                 </dl>

//                 <button onClick={UpdateClick} className="btn btn-primary w-100">Update</button>
//             </div>
//             <div className="col-8">
//                 <h2>Product Details</h2>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd>{updatedproduct.Name}</dd>
//                     <dt>Price</dt>
//                     <dd>{updatedproduct.Price}</dd>
//                     <dt>City</dt>
//                     <dd>{updatedproduct.City}</dd>
//                     <dt>Stock</dt>
//                     <dd>{(updatedproduct.Stock==true)?"Available":"out of stock"}</dd>
//                 </dl>
//             </div>
//         </div>
//     </div>
// )
// }


// {
//     "title": "realme C53 (Champion Gold, 64 GB)",
//     "price": 10999,
//     "ratings": {"rate":4.5, "count":14909, "reviews":705},
//     "features": [
//         "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
//         "17.12 cm (6.74 inch) HD Display",
//         "108MP + 2MP | 8MP Front Camera",
//         "5000 mAh Battery",
//         "T612 Processor",
//         "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
//     ],
//     "photo": "realme.jpg"
// }


export function Flipkart(){

    const [product, setProduct] = useState({title:'', price:0, ratings:{rate:0, count:0, reviews:0}, features:[], photo:''});


    

    function LoadClick(){
        fetch("product.json")
        .then(response=>{
            return response.json();
        })
        .then(product=> {
            setProduct(product);
        })
    }

    return(
        <div className="container-fluid">
            <button onClick={LoadClick} className="btn btn-primary mt-3">Load Data</button>
            <div className="row mt-4">
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
        </div>
    )
}

