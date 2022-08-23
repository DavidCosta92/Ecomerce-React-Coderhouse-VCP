import "./NavBarSearch.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";

/*
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
*/

const NavBarSearch = () =>{

    const [searchData, setSearchData]=useState("")

    function handleChange(e){
        e.preventDefault()
        setSearchData(e.target.value)
        console.log("Mostrando termino de busqueda", searchData)
    }

    return (
        <div className="containerNavBarSearch" >
            <form noValidate autoComplete="off" onChange={handleChange} >
                <TextField id="outlined-basic" label="PENDIENTE AUN.." variant="outlined"  value={searchData}/>
            </form>

        </div>
    )
}

export default NavBarSearch;