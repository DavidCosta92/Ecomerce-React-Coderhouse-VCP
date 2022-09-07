import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList";
import db from "../firebaseConfig";
import { collection, getDocs} from "firebase/firestore";
import Home from "./home";
import { Box } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import "./css/SearchResults.css"

const SearchResults =()=>{
    const {search} =useParams();
    const [loading, setLoading]=useState(true);
    const [busqueda, setBusqueda]=useState([]);
    let auxSearch= search.toLowerCase();    

    function getProductList(){
        console.log("llame funcion getProductList, LLAMANDO A FIREBASE")
        const queryCollection= collection (db, "products");
        getDocs(queryCollection)
            .then(res=> saveProducts(res))
            .catch((error)=>{
                    console.log("llamada a verTodo fallo",error)
                    }) 
    }

    function saveProducts(res){
        let productListFirebase=[];
        res.docs.map((product)=>{
            productListFirebase.push({id: product.id, ...product.data()})
        })
        setTimeout(()=>{
            searchProducts(productListFirebase)
            setLoading(false);
        },2000)
    }

    function searchProducts(listProducts){
        let auxList=[];
        listProducts.forEach((product)=>{
            let productKeyWords=product.keyWords.toLowerCase();
            if(productKeyWords.includes(auxSearch)){
                    auxList.push(product);
            }
        })
        setBusqueda(auxList);
    }

    useEffect(()=>{
        setLoading(true)
         getProductList(); 
    }, [search])
    
    function renderEmptySearch(){
        return (
            <div className="emptySearhTxt">
                <p className="emptySearhTitle">¡Ups, no pudimos encontrar lo que buscas!</p> 
                <p>¿Quieres probar con otra palabra?</p>
                <p>O talvez, te mostramos algunos productos tentadores</p>
                <Home/>
            </div>
        )
    }

    function renderProductsSearch(){
        return (
            <div>                 
                {busqueda.length===0? renderEmptySearch() : <div className="searchProducts"><p>Resultados de busqueda</p><ItemList listProducts={busqueda}/></div>}
            </div>
        )
    }
    function renderSpiner(){
        return(
            <div className="spinner"> 
                <p>Estamos buscando..</p>
                <Box sx={{ display: 'flex' }}  className="spinnerWheel">
                    <CircularProgress />
                </Box>
                
            </div>           
        )
    }

    return (
        <div>
          {loading?  renderSpiner() : renderProductsSearch()}
        </div>
    )
}
export default SearchResults;