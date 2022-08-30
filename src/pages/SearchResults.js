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
    //const [auxListProduct, setAuxListProduct]= useState([]);
    let auxListProduct=[];
    let auxSearch= search.toLowerCase();

    const queryCollection= collection (db, "products");  
    const queryFilter=query(queryCollection);
    getDocs(queryFilter)
        .then(res=> getAuxListProduct(res));

    const getAuxListProduct= (res)=>{
        //setAuxListProduct(res.docs.map(product=> ({id: product.id, ...product.data()})));
        let listP=[];
        res.docs.map(product=> ( 
            listP.push({id: product.id, ...product.data()})
        ));
        auxListProduct=listP;
    }


    /// DEBO REVISAR, PORQUE CADA VEZ QUE BUSCO RE CARGA TODA LA PAGINA!, ASI QUE DEBERIA ARREGLAR... EMPEZE A SOLUCIONAR.. DEBO VER DONDE LLAMAR AL SEARCH PRODUCTS

    function searchProducts(){
        setSpinner(true)
        let listProductSearch=[];
        console.log("mostrando aux list pr",auxListProduct)
        auxListProduct.map((product)=>{
            let keyWords= product.keyWords.toLowerCase()
            console.log("keyWords",keyWords)
            if(keyWords.includes(auxSearch)){
                listProductSearch.push(product);
        }})
        setListProducts(listProductSearch);
        console.log("mostrando lista a renderizar",listProductSearch)
        setSpinner(false);
    }
    function renderProducts(){
        return (
            <div>
                <ItemList listProducts={listProducts}/>
            </div>
        )

    }

    useEffect(()=>{
        renderProducts();
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
            {renderProducts()}
        </div>
    )
}
export default SearchResults;