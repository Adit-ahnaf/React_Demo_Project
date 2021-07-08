import React from 'react';
import {useState, useEffect, Component} from 'react';
import {useParams, Redirect} from 'react-router-dom'
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';


const Details = (props) => {
    
    const value = props.location.state




    return (
        <div class="p-8 mx-50">
          <h1 class="text-4xl text-red-500 font-extrabold">{value.title}</h1><br></br>
          <h3 class="font-medium text-justify">{value.description}</h3>
           </div>
    
    
    );

};

export default Details;