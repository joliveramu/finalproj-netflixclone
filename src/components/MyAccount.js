import React from 'react';
import Header from "./Header";

function MyAccount()
{
    function redirect(){
        window.location.href="/finalproj-netflixclone";
    }
    return(
        <div className="container-fluid">
            <Header/>
            <h1>Account Settings</h1>
            <div className="container-fluid">
                <h2>Update Account</h2>
                <hr/>
                <form method="GET" action="/finalproj-netflixclone/Dashboard">
                <label>Old Password</label>
                <div className="form-group">
                    <input type="password" name="txtPasswordOld" id="txtPasswordOld" placeholder='Enter old password' required className="form-control" style={{width:"50%"}}/>
                </div>
                <label>New Password</label>
                <div className="form-group">
                    <input type="password" name="txtNewPassword" id="txtNewPassword" placeholder='Enter new password' required className="form-control" style={{width:"50%"}}/>
                </div>
                <label>Re-enter New Password</label>
                <div className="form-group">
                    <input type="password" name="txtNewPassword" id="txtNewPassword" placeholder='Re-enter new password' required className="form-control" style={{width:"50%"}}/>
                </div>
                <div className="form-group mt-2">
                    <button type="submit" className="btn btn-outline-info">Update Password</button>
                </div>
                </form>
                <div className="form-group mt-2">
                    <button type="button" className="btn btn-outline-danger" onClick={redirect}>Delete Account?</button>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;