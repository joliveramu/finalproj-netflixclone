import userEvent from '@testing-library/user-event';
import React, {useEffect, useState} from 'react';
import Header from "./Header";

function Dashboard()
{
    //GET API Key from https://developers.themoviedb.org/
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=bcc9a3219577d3d1e575d2734b502e52&language=en-US&page=1`;
    const newURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=bcc9a3219577d3d1e575d2734b502e52&language=en-US&page=1`;
    const watchURL = `https://api.themoviedb.org/3/movie/414906/recommendations?api_key=bcc9a3219577d3d1e575d2734b502e52&language=en-US&page=1`;
    let [movieList, setMovieList] = useState([]);
    let [newMovieList, setNewMovieList] = useState([]);
    let [continueMovieList, setContinueMovieList] = useState([]);
    useEffect(() =>{
        fetchPopular();
        fetchNew();
        fetchContinue();
    },[])
    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        setMovieList(movies.results);
      };
      const fetchNew = async () => {
        const data = await fetch(newURL);
        const movies = await data.json();
        setNewMovieList(movies.results);
      };
      const fetchContinue = async () => {
        const data = await fetch(watchURL);
        const movies = await data.json();
        setContinueMovieList(movies.results);
      };
    return(
        <div className="container-fluid">
            <Header />
            <div className='mt-5' >
                <h1>Continue Watching</h1>
                <details>
                <summary>View</summary>
            <ul className="list-group mt-5" style={{height:"250px",scroll:"auto"}}>
                {continueMovieList.map(item =>{
                    return  <a href="" className="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{item.original_title}</h5>
                      <small>Release date&nbsp;<b>{item.release_date}</b></small>
                    </div>
                    <p class="mb-1 text-warning font-weight-bold"><img src={`https://api.themoviedb.org/`+item.poster_path} height="100px" width="150"/></p>
                    <small>{item.overview}</small>
                  </a>
                })}
            </ul>
            </details>
            </div>
            {/* Trending */}
            <div className='mt-5' >
                <h1>Trending Now</h1>
                <details>
                <summary>View</summary>
            <ul className="list-group mt-5" style={{height:"250px",scroll:"auto"}}>
                {movieList.map(item =>{
                    return  <a href="" className="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{item.original_title}</h5>
                      <small>Release date&nbsp;<b>{item.release_date}</b></small>
                    </div>
                    <p class="mb-1 text-warning font-weight-bold"><img src={`https://api.themoviedb.org/`+item.poster_path} height="100px" width="150"/></p>
                    <small>{item.overview}</small>
                  </a>
                })}
            </ul>
            </details>
            </div>

            {/* New */}
            <div className='mt-5' >
                <h1>New Releases Movies</h1>
                <details>
                <summary>View</summary>
            <ul className="list-group mt-5" style={{height:"250px",scroll:"auto"}}>
                {newMovieList.map(item =>{
                    return  <a href="" className="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{item.original_title}</h5>
                      <small>Release date&nbsp;<b>{item.release_date}</b></small>
                    </div>
                    <p class="mb-1 text-warning font-weight-bold"><img src={`https://api.themoviedb.org/`+item.poster_path} height="100px" width="150"/></p>
                    <small>{item.overview}</small>
                  </a>
                })}
            </ul>
            </details>
            </div>
           
        </div>
    )
}

export default Dashboard;