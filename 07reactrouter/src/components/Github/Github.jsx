import React, { useState , useEffect} from "react";

// useLoader method which is optimized, when you just hover on it its data are loaded and cached immediately.
import { useLoaderData } from "react-router-dom";

// This is a normal api fetching using useEffect but react router provide optimization for same task i.e useLoader.
function Github(){
    const data= useLoaderData();

    // const[data, setData]= useState({})
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     });
        
    // },[]);

    return(
        <>
        <h1 className="bg-gray-600 text-3xl text-center">Github Follower: {data.followers}</h1>
        <img src={data.avatar_url} alt="picture" width= {300} />
        </>
    );
}

// We get an attribute in <Route> to attach a loader. this is attached to Github Route.
export const GithubInfoLoader= async ()=> {  
    const response= await fetch('https://api.github.com/users/djay-devloper')
    return response.json()
}

export default Github;