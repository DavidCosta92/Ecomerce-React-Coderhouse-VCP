import { useState,useEffect } from "react";
import db from "../../firebaseConfig";
import { collection, getDocs,query,where} from "firebase/firestore";
import SearchResults from "../../pages/SearchResults";

function AuxListProductSearch(){
    if(JSON.parse(localStorage.getItem("auxListProduct"))){
        let auxListProduct=JSON.parse(localStorage.getItem("auxListProduct"));
        console.log("TOME LISTA DESDE LOCAL STORAGE", auxListProduct)
    } else {
        const queryCollection= collection (db, "products");  
        const queryFilter=query(queryCollection);
        getDocs(queryFilter)
        .then(res=> getAuxListProduct(res));
    }
/*
    if (!localStorage.getItem("auxListProduct")){
        const queryCollection= collection (db, "products");  
        const queryFilter=query(queryCollection);
        getDocs(queryFilter)
        .then(res=> getAuxListProduct(res));

    } else{
        auxListProduct=JSON.parse(localStorage.getItem("auxListProduct"));
        console.log("TOME LISTA DESDE LOCAL STORAGE")
    }

*/
    console.log("esto viendo cuantas veces me renderizo dentro AuxListProductSearch..")
   // const [auxListProduct, setAuxListProduct]= useState([]);



   const getAuxListProduct= (res)=>{
    let auxListProduct;
    setTimeout(()=>{        
        res.docs.map(product=> ( 
            auxListProduct.push({id: product.id, ...product.data()})
        ));
    },2000)
    console.log("TOME LISTA DESDE  FIREBASE",auxListProduct)
    localStorage.setItem("auxListProduct",JSON.stringify(auxListProduct));
}
    



    return (
        <>
            <p>Buscando...</p>
        </>
    )
}

export default AuxListProductSearch;