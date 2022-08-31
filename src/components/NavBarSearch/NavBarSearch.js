import "./NavBarSearch.css"
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const NavBarSearch = () =>{    
    const [searchData, setSearchData]=useState("")
    function handleChange(e){
        setSearchData(e.target.value)
        redirectSearch();        
    }
    
    const navigate = useNavigate();

    function redirectSearch(){
       navigate(`/search/search=${searchData}`);     
    }

    function handleSubmit(e){
        e.preventDefault();
        redirectSearch();
    }
  
    return (
        <div className="containerNavBarSearch" >
            <form noValidate onSubmit={handleSubmit} onChange={handleChange}>
                <TextField id="outlined-basic" label="PENDIENTE AUN.." variant="outlined"  value={searchData}/>
                <input type="submit" className="botonEnvio"/>
            </form>            
        </div>
    )
}

export default NavBarSearch;