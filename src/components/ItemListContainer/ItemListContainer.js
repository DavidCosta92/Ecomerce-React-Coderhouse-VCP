import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { Skeleton } from "@mui/material";
import { collection, getDocs,query,where} from "firebase/firestore";
import db from "../../firebaseConfig"
import ColorToggleButton from "../ToggleButtonGroup/ToggleButtonGroup";


const ItemListContainer=({Category})=>{
    const[listProducts, setListProducts] = useState([]);
    const [loading, setLoading]=useState(true);
    const [orderProducts, setOrderProducts]=useState("");  

    function orderProductsBy(order){
        switch(order){
            case "priceAsc": 
                listProducts.sort(compareByPrice);
                break;
            case "priceDesc": 
                listProducts.sort(compareByPriceDesc);
                break;
            case "category": 
                listProducts.sort(compareByCategory);
                break;
            case "discount": 
                listProducts.sort(compareByDiscount);
                break;
            default:
                listProducts.sort(compareByPrice);
                break;
        }
        setOrderProducts(order);
        setListProducts(listProducts);
    }

    function compareByPrice(a,b){
        if ( a.price < b.price) return -1;
        if ( a.price > b.price) return 1;
        return 0;
    }
    function compareByPriceDesc(a,b){
        if ( a.price > b.price) return -1;
        if ( a.price < b.price) return 1;
        return 0;
    }
    function compareByCategory(a,b){
        if ( a.category < b.category) return -1;
        if ( a.category > b.category) return 1;
        return 0;
    }
    function compareByDiscount(a,b){
        if ( a.discount > b.discount) return -1;
        if ( a.discount < b.discount) return 1;
        return 0;
    }



    const productRender= (res)=>{
        setTimeout(()=>{
            setLoading(false);
            setListProducts(res.docs.map(product=> ({id: product.id, ...product.data()})));
        },1500)           
    }

    
    useEffect(()=>{
        const queryCollection= collection (db, "products")   
        if(Category==="Ofertas"){
            const queryFilter=query(queryCollection, where ("oferta","==",true )) 
            getDocs(queryFilter)
            .then(res=> productRender(res))
            .catch((error)=>{
                console.log("llamada a Ofertas fallo ",error)
                })
        }
        else if (Category==="verTodo"){
            getDocs(queryCollection)
            .then(res=> productRender(res))
           .catch((error)=>{
                console.log("llamada a Ver Todo fallo ",error)
                })
        }
        else if (Category!=="verTodo"){
            const queryFilter=query(queryCollection, where ("category","==",Category ))
            getDocs(queryFilter)
            .then(res=> productRender(res))
            .catch((error)=>{
                console.log("llamada a categoria fallo ",error)
                })
        }
    }, [Category])

    let title;
    Category==="verTodo"? title="Todos nuestros productos":title=Category.toUpperCase(); 

    const renderSkeleton=()=>{
        let productListSkeleton=[];
        for (let p=0; p<10;p++){
            productListSkeleton.push(
                <div className="productCard" key={p}>
                    <Skeleton  className="skeletonTxt"  height={33} duration={0.5}/>               
                    <Skeleton  variant="rectangular" className="skeletonImg" height={300} duration={0.5}/>
                    <Skeleton  className="skeletonTxt" height={200} duration={0.5}/>
                </div>)
        }
        return (
            <div>
                <Skeleton  className="skeletonTxtTitle" height={100} duration={0.5}/>
                <div className="productContainer containerSkeleton">
                    {productListSkeleton}
                </div>
            </div>
        )
    }

    const renderContent=()=>{
        return(
            <div>
                <p className="tituloProductoContainer">{title}</p>
                <ColorToggleButton orderProductsBy={orderProductsBy}/>
                <div className="productContainer">                                
                    <ItemList listProducts={listProducts}/>
                </div>
            </div>
        )
    }
    
    return(
        <div>
            {loading? renderSkeleton():renderContent()}
        </div>
    )
}

export default ItemListContainer;