import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList";
import db from "../firebaseConfig";
import { collection, getDocs,query,where} from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const SearchResults =()=>{
    const[spinner, setSpinner]=useState(false);
    const {search} =useParams();
    const[listProducts, setListProducts] = useState([]);


    const productRender= (res)=>{
        setListProducts(res.docs.map(product=> ({id: product.id, ...product.data()})));
    }

    useEffect(()=>{
        const queryCollection= collection (db, "products")   
        const queryFilter=query(queryCollection, where ("category","==",search)) // podria usar includes para buscar!!
            setSpinner(true);
            setTimeout(()=>{
                setSpinner(false);
                getDocs(queryFilter)
                .then(res=> productRender(res))
            },500)  





    }, [search])
    
    return (
        <div>
            <h1>soy los resultados de busquedas con el parametro:</h1>
            {spinner&&(
                    <div className="spinner"> 
                        <Box sx={{ display: 'flex' }} >
                            <CircularProgress />
                        </Box>
                    </div>
            )}
            <div>
                <ItemList listProducts={listProducts}/>
            </div>
        </div>
    )
}
export default SearchResults;