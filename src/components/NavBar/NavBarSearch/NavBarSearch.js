import "./NavBarSearch.css"
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

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
                <TextField id="outlined-basic" label="Buscar.." variant="outlined"  value={searchData}/>
                <SearchIcon className=" botonEnvio lupa"><input type="submit"/></SearchIcon>
            </form>            
        </div>
    )
}

export default NavBarSearch;