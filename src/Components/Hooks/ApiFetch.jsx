import{useState, useEffect} from 'react'


export function ApiData(url)


{
    const [data, setData] = useState();
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(result=>{
            setData(result);
            console.log(result)
        })
    },[url]);
    return data;
}




    const categories = ApiData('http://fakestoreapi.com/products/categories');
    const products = ApiData('http://fakestoreapi.com/products');

