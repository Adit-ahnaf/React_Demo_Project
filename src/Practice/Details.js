import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';


const Details = () => {
    
    const { id } = useParams();
   
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetchUser();
       }, []);

       const fetchUser = async ()=>{
        const response = await axios.get(`https://my-json-server.typicode.com/istiak227/blog-server/blogs/${id}`);
        console.log(response)
        setUser(response.data)
       
    };
   
    return (
        <div>
          <h1>{user.title}</h1>
          <h2>{user.description}</h2>

           </div>
    
    
    );
};

export default Details;