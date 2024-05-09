export function Login(){
    var userName = "John";
    return(
        <div className="container-fluid d-flex justify-content-center">
            <form className="border mt-4 w-25 p-2 border-2 border-primary rounded rounded-2">
            <h2> <span className="bi bi-person-fill"></span> User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" /></dd>
            </dl>
            <button className="btn btn-primary w-100">Login</button>

            

          <input type="text"  value={userName} />    

          </form>
        </div>
    )
}


