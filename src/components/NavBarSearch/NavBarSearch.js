import "./NavBarSearch.css"
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { collection, getDocs,query,where} from "firebase/firestore";
import db from "../../firebaseConfig"



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
    const[spinner, setSpinner]=useState(false);
    const [searchData, setSearchData]=useState("")

    function handleChange(e){
       // e.preventDefault()
        setSearchData(e.target.value)
        console.log("Mostrando termino de busqueda", searchData)
    }

    const[listProducts, setListProducts] = useState([]);
    const productRender= (res)=>{
            setListProducts(res.docs.map(product=> ({id: product.id, ...product.data()})));

            /// enviar a una nueva pagina... que envie el product list como prop y los renderize!


    }

    useEffect(()=>{
        const queryCollection= collection (db, "products")   
        const queryFilter=query(queryCollection, where ("category","==",searchData)) // podria usar includes para buscar!!
            getDocs(queryFilter)
            .then(res=> productRender(res))
    }, [searchData])





    return (
        <div className="containerNavBarSearch" >
            <form noValidate autoComplete="off" onChange={handleChange} >
                <TextField id="outlined-basic" label="PENDIENTE AUN.." variant="outlined"  value={searchData}/>
            </form>
            <div>
                <ItemList listProducts={listProducts}/>
            </div>
            
        </div>
    )
}

export default NavBarSearch;