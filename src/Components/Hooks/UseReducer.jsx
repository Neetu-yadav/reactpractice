import { useReducer } from "react";

// let initialState = {count: 0};

// function reducer(state, acting){
//     switch(acting.type){
//         case "join":
//         return {count : state.count + 1};
//         case "exit":
//         return {count : state.count - 1};
//     }
// }

// export function ReducerDemo(){

//     const [state, dispatch] = useReducer(reducer, initialState);

//     function handleJoinClick(){
//         dispatch({type: 'join'});
//         console.log(state);
//     }
//     function handleExitClick(){
//         dispatch({type: 'exit'});
//         console.log(state);
//     }

//     return(
//         <div className="container-fluid">
//             <h2>NareshIT - Youtube</h2>
//             <div className="mt-4 mb-4">
//                 <button onClick={handleJoinClick} className="btn btn-primary"> <span className="bi bi-youtube"></span> Join</button>
//                 <button onClick={handleExitClick} className="btn btn-danger ms-2"> Exit</button>
//             </div>
//             <iframe src="https://www.youtube.com/embed/Ft-v5aLDWqc" width="400" height="300" />
//             <div className="mt-4">
//                 <div>
//                     Live Viewers : {state.count}
//                 </div>
//             </div>
//         </div>
//     )
// }



//======================================


let initialState={count:0};


function reducer(stat, acting){
    switch(acting.type){
        case"join":
        return{count:stat.count+1};
        case"exit":
        return{count:stat.count-1}
    }
}
export function ReducerDemo(){
    const[stat, dispatc]= useReducer(reducer, initialState);


    function handleJoinClick(){
        dispatc({type:'join'}
        )
    }

    
    function handleExitClick(){
        dispatc({type:'exit'}
        )
    }
    return(
        <div className="container-fluid">
            <h2>Practice</h2>
            <div className="mt-4 mb-4">
                <button onClick={handleJoinClick} className="btn btn-success"><span className="bi bi-youtube">Join</span></button>
                <button onClick={handleExitClick} className="btn btn-danger ms-2">
                    Exit
                </button>
            </div>
            <iframe src="https://www.youtube.com/watch?v=A8h7Atk5sX4&ab"width="500" height="400"/>
            <div className="mt-4">
                <div>
                    Live Viewers: {stat.count}
                </div>
            </div>
        </div>
    )
}