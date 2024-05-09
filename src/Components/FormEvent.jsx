
import { useState } from "react"

export function FormEvent(){

    function FormSubmit(e){
        e.preventDefault();
        alert(JSON.stringify({'Name':'TV', 'Price':45000.33}));
    }

    return (
        <div className="container-fluid">
            <form onSubmit={FormSubmit}>
                <button>Submit</button>
            </form>
        </div>
    )
}
