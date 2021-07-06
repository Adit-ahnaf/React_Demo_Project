import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Test2 = () => {


   
    const [users, setUser] = useState([]);


    useEffect(()=>{
     fetchUser();
    }, []);


    const fetchUser = async ()=>{
        const result = await axios.get("https://my-json-server.typicode.com/istiak227/blog-server/blogs");
        console.log(result)
        setUser(result.data) 
    };

    return (
        <div >
        {users.map((user) => (
            <div class="text-justify p-5 mx-60"  >
           <Link  class="text-4xl text-red-500 font-extrabold" to={{
               pathname:'/details/description',
               state: user,
           }}>{user.title}</Link>
           <h4  class="text-blue-800 font-medium">{user.date}</h4><br></br>
           <h3 >{user.subtitle}</h3>

           </div>
            ))}
       </div>
    );
};

export default Test2;