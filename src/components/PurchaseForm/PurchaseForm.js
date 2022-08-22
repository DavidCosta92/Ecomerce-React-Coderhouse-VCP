import "./PurchaseForm.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {useState } from 'react'
import db from "../../firebaseConfig"
import { collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore'


const PurchaseForm =()=>{
    const {cartProducts,subtotal, buyCart}=useContext(CartContext)
    const [success,setSuccess] = useState();
    
    const [formData, setFormData]=useState({
        name:"",
        lastName:"",
        phone:"",
        email:"",
        address:""
    })
    


    const [order, setOrder]=useState({
        items:cartProducts.map((product)=>{
            return{
                id: product.id,
                title: product.title,
                srcA: product.srcA,
                amount: product.inCart,
                size: product.size,
                unitPrice: product.price,
                TotalPrice: product.price*product.inCart
            }
        }),
        buyer: {},
        total: subtotal(cartProducts),
        date: new Date().toLocaleString() // poner otro tipo de fecha, que diga hace 5 horas fue comprado...
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData=(e)=>{
        e.preventDefault();
        let newOrder={...order, buyer: formData}
        pushData(newOrder)
    }
    
    async function getProductStock (productID,amount,size){
        const docRef = doc(db, "products", productID)
        const docSnapshot = await getDoc(docRef)
        let product=docSnapshot.data()
        let productStock;
        switch (size){            
            case "XS":
                productStock=product.stockXS-amount;
                break;
            case "S":
                productStock=product.stockS-amount;
                break;
            case "M":
                productStock=product.stockM-amount;
                break;
            case "L":
                productStock=product.stockL-amount;
                break;
            case "XL":
                productStock=product.stockXL-amount;
                break;
        }
        return productStock;
    }

    async function updateStock (productID,amount,size){    
       const updateRef= doc(db, "products", productID);
       getProductStock(productID,amount,size)
       .then((resp)=>{
        let data;
        switch (size){            
            case "XS":
                data={ stockXS: resp};
                break;
            case "S":
                data={ stockS: resp};
                break;
            case "M":
                data={ stockM: resp};
                break;
            case "L":
                data={ stockL: resp};
                break;
            case "XL":
                data={ stockXL: resp};
                break;
        }
        const updateStock= setDoc(updateRef, data,{ merge:true });
       })       
    }

    function updateAllStocks (){
        cartProducts.map((product)=>{
            updateStock (product.id,product.inCart,product.size);
        })
    }

    const pushData = async (newOrder)=>{
        const collectionOrder = collection(db, 'purchase orders');
        const orderDoc = await addDoc(collectionOrder,newOrder);
        updateAllStocks ()
        setSuccess(orderDoc.id);
        buyCart(newOrder,orderDoc.id);
    }



    return (
        <>  
            {!success&& (
            <div className="formularioContacto">
                <fieldset>
                <legend>Completa los datos para terminar la compra</legend>
                <form className="formulario" onSubmit={submitData} >
                    <label className="name">Nombre 
                        <input type="text" onChange={handleChange} value={formData.name} required name="name" />
                    </label>
                    <label className="lastName">Apellido 
                        <input type="text" onChange={handleChange} value={formData.lastName} required name="lastName" />
                    </label>
                    <label className="email">Email
                        <input type="email" onChange={handleChange} value={formData.email} required name="email" placeholder="Solo lo usaremos para contactarnos contigo.."/>
                    </label>
                    <label className="phone">Telefono
                        <input type="number" onChange={handleChange} value={formData.phone} required name="phone" placeholder="Solo lo usaremos para contactarnos contigo.."/>
                    </label>
                    <label className="address">Direccion
                        <input type="text" onChange={handleChange} value={formData.address} required name="address" placeholder="Solo lo usaremos para contactarnos contigo.."/>
                    </label>
                    <input type="submit" class="botonEnvio"/>
                </form></fieldset>
            </div>
            )}
            
            
        </>
    )
}
export default PurchaseForm;