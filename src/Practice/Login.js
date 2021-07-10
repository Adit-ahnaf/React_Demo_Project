import React from 'react';


import { Redirect, useHistory} from 'react-router-dom'
import App from '../App';



const khuljasimsim=()=>{
  return <Redirect to="/"/>
}

const Login = (props) => {
    return (
    
        <div class="w-full max-w-xs p-6  ">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label  class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"></input>
                  <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                      
                  </div>
                  <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={()=>{khuljasimsim()}} type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/sighnup">
        sighn up 
      </a>
    </div>
  
                </div>

            </form>

        </div>
    );
};

export default Login;