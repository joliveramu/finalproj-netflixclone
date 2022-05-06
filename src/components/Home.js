import React from 'react';
function Home()
{
    return(
        <div>
            <div className='bg-dark p-2'>
                <div className="row">
                <div className="col-md-1">
                    <h1 className="text-danger">Netflix</h1>    
                </div>
                <div className="col-md-9">
                     
                </div>
                <div className="col-md-1">
                    <a href="/finalproj-netflixclone/login" className="btn btn-outline-danger text-light mt-2">Sign In</a> 
                </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <h1>Unlimited movies, TV shows, and more!</h1>
                <h2>Watch any time. Cancel any time!</h2>
                <label>Ready to watch? Enter your email to create or restart your membership.</label>    
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form method="get" action="/finalproj-netflixclone/register">
                            <input type="email" id="txtEmail" placeholder='Enter your email' className='form-control mt-2'/>
                            <button type="submit" className="btn btn-danger mt-1">Get Started{">"}</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>

            </div>
        </div>
    )
}

export default Home;