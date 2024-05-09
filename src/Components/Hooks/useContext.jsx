import { createContext, useContext, useState } from "react"

// let UserContext = createContext(null);

// export function VideosComponent(){
//     let context = useContext(UserContext);
//     return(
//         <div className="container-fluid bg-danger text-white p-3">
//             <h4>Videos Component - {context.UserName}</h4>
//         </div>
//     )
// }


// export function HomeComponent(){
//     let context = useContext(UserContext);
//     return(
//         <div className="container-fluid bg-light text-dark p-3">
//             <h3>Home Component - {context.UserName}</h3>
//             <VideosComponent />
//         </div>
//     )
// }


// export function ContextDemo()
// {
//     const [userName, setUserName] = useState('');

//     function handleNameChange(e){
//         setUserName(e.target.value);
//     }

//     return(
//         <div className="container-fluid bg-dark text-white p-3">
//            <UserContext.Provider value={{UserName:userName}}>
//             <h2>Index Component <input onChange={handleNameChange} type="text" placeholder="UserName"/> </h2>
//             <HomeComponent />
//            </UserContext.Provider>
//         </div>
//     )
// }


//===============================================

let UserContext=createContext(null);
export function VideosComponent(){
    let Context=useContext(UserContext);
    return(
        <div className="container-fluid bg-danger text-white p-3">
            <h4>Videos Component-{Context.UserName}</h4>
        </div>
    )
}



export function HomeComponent(){
    let context=useContext(UserContext);
    return(
        <div className="container-fluid bg-success text-dark p-3">
            <h3>Home Component-{context.UserName}</h3>
            <VideosComponent/>
        </div>
    )
}


export function ContextDemo(){
    const[userName, setUserName]=useState('');
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid bg-dark text-white p-3">
            <UserContext.Provider value={{UserName:userName}}>
                <h2>Parent component<input onChange={handleNameChange}type="text" placeholder="UserName"/></h2>
                <HomeComponent/>
            </UserContext.Provider>
        </div>
    )
}