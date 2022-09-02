import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList";
//import db from "../firebaseConfig";
//import { collection, getDocs,query,where} from "firebase/firestore";
//import CircularProgress from '@mui/material/CircularProgress';
//import Box from '@mui/material/Box';
import AuxListProductSearch from "../components/NavBarSearch/AuxListProducsSearch";


const SearchResults =()=>{
    const[listProducts, setListProducts] = useState([]);
    const {search} =useParams();
    let auxSearch= search.toLowerCase();

    //const [auxListProduct, setAuxListProduct]= useState([]);
   // const {auxListProduct} = useContext(AuxContext)

/*
    useEffect(()=>{
        const queryCollection= collection (db, "products");  
        const queryFilter=query(queryCollection);
        getDocs(queryFilter)
        .then(res=> getAuxListProduct(res));

        const getAuxListProduct= (res)=>{
            let listP=[];
            res.docs.map(product=> ( 
                listP.push({id: product.id, ...product.data()})
            ));
            setAuxListProduct(listP);
            console.log("esto viendo cuantas veces me renderizo dentro de un useEfect con corchetes vacios..")
            localStorage.setItem("auxListProduct",JSON.stringify(listP));
        }
    }, []) // corchete vacio para que solo descargue productos una unica vez...
    console.log("lista actual aux de productos, osea TODOS=>",auxListProduct)
*/


    useEffect(()=>{
        setTimeout(() => {
            searchProducts();       
        }, 2000); 
        console.log("estoy renderizando el useEfect segun aux search?")
    }, [auxSearch])

// FUNCION SEARCH PARA OBTENER PRODUCTOS DESDE LOCAL STORAGE

/*

**************************** DEBO SOLUCIONAR CANTIDAD DE LLAMADAS A BD
- INTENTE LLAMANDO A BD, GUARDANDO PRODUCTOS EN LOCAL STORAGE Y LUEGO TRATANDO DE TOMARLOS DE AHI...
AUN QUEDA POR EXPLORAR, YA QUE ME SALE UNDEFINED EL STORAGE.. ALGUN ERROR HAY POR ALLI...

*/


    function searchProducts(){
           let listProductSearch=[];
           if (localStorage.getItem("auxListProduct")){
            let productListLocalStorage= JSON.parse(localStorage.getItem("auxListProduct"));
            productListLocalStorage.forEach((product)=>{
                let productKeyWords=product.keyWords.toLowerCase();
                if(productKeyWords.includes(auxSearch)){
                    listProductSearch.push(product);
                }
               })
           } 
           setListProducts(listProductSearch);
           //  setSpinner(false);
       }
   


    function renderProducts(){
        return (
            <div>
                <ItemList listProducts={listProducts}/>
            </div>
        )
    }

    return (
        <div>
            <AuxListProductSearch/>
            <h1>Resultados de busqueda</h1>
            {/*spinner&&(
                    <div className="spinner"> 
                        <Box sx={{ display: 'flex' }} >
                            <CircularProgress />
                        </Box>
                    </div>
            )*/}
            {renderProducts() }
        </div>
    )
}
export default SearchResults;