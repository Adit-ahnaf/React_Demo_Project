import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Test2 = () => {


   
    const [user, setUser] = useState([]);


    useEffect(()=>{
     fetchUser();
    }, []);


    const fetchUser = async ()=>{
        const result = await axios.get("https://my-json-server.typicode.com/istiak227/blog-server/blogs");
        console.log(result)
        setUser(result.data) 
    };

    return (
        <div>
        {user.map((user) => (
            <div >
           <Link to={`/details/${user.id}`}>{user.title}</Link>
           <h4>{user.date}</h4>
           <h3>{user.subtitle}</h3>

           </div>
            ))}
       </div>
    );
};

export default Test2;