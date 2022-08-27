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

    let auxSearch= search.toLocaleLowerCase();
    useEffect(()=>{
        const queryCollection= collection (db, "products")  
        auxSearch=auxSearch[0].toUpperCase()+auxSearch.substring(1);
        const queryFilter=query(queryCollection, where ("category","==",auxSearch)) // podria usar includes para buscar!!
        
        /*
        BUSQUEDA DEBERIA SER MAS FLEXIBLE, SIN IMPORTAR MAYUSCULAS O MINUSCULA, QUE BUSQUE POR CATEGORIA O NOMBRE DE PRODUCTOS.p.
        */
            setSpinner(true);
            setTimeout(()=>{
                setSpinner(false);
                getDocs(queryFilter)
                .then(res=> productRender(res))
            },500)  
    }, [auxSearch])
    
    return (
        <div>
            <h1>Resultados de busqueda</h1>
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