import React from 'react';
function Login()
{
    return(
        <div className='container-fluid'>
            <div className='bg-dark p-2'>
                <div className="row">
                <div className="col-md-1">
                <h1 className="text-danger"><a href="/" className="text-danger" style={{textDecoration:"none"}}>Netflix</a></h1>       
                </div>
                <div className="col-md-9">
                     
                </div>
                <div className="col-md-1">
                    {/* <a href="/login" className="btn btn-outline-danger text-light mt-2">Sign In</a>  */}
                </div>
                </div>
            </div>
            <h1 className="mt-5">Login</h1>
            <hr style={{width:"50%"}}/>
            <form method="get" action="/dashboard" className="form-group">
                <label>Username</label>
                <div className="form-group">
                    <input type="text" id="txtUsername" style={{width: "50%"}} className="form-control"/><br/>
                </div>
                <label>Password</label><br/>
                <div className="form-group">
                    <input type="password" id="txtPassword" className="form-control" style={{width: "50%"}}/><br/>
                </div>
                 <button type="submit" className="btn btn-danger" style={{width: "50%"}} id="btnRegister">Login</button>
            </form>
            <a href="/register">Does not have account?</a>
        </div>
    );
}

export default Login;