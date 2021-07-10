import React from 'react';
import {useState} from 'react'
import axios from 'axios';

const Sighnup = () => {

  const [users, setUser] = useState({
    name:"",
    email:"",
    password:""
  })


  const onInputChange =(e)=>{
    setUser({ ...users, [e.target.name]: e.target.value });
  }

  const onSubmit = async e => {
    e.preventDefault();
      await axios.post("http://localhost:8000/users", users)
      .then(response=>{
        console.log(response)
      })


  };

  const {name, email, password} = users
    return (
        <div class="p-8 m-8">
        <form class="w-full max-w-sm" onSubmit={e=>onSubmit(e)}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
       Name
      </label>
    </div>
    <div class="md:w-2/3">
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => onInputChange(e)} name="name" value={name}id="name" type="text" placeholder="name"></input>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => onInputChange(e)} id="email" name="email" value={email} type="email" placeholder="email"></input>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" onChange={e => onInputChange(e)}  name="password" value={password} id="password" type="password" placeholder="******************"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      
    </label>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
    </div>
  </div>
</form>
</div>
    );
};

export default Sighnup;