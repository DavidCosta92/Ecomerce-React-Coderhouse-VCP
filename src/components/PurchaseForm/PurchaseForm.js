import "./PurchaseForm.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {useState } from 'react'
import db from "../../firebaseConfig"
import { collection, addDoc } from 'firebase/firestore'

const PurchaseForm =()=>{
    const {cartProducts,totalPrice, buyCart}=useContext(CartContext)
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
                /* deberia dar cantidad */
                /* deberia dar talle  */
                price: product.price
            }
        }),
        buyer: {},
        total: totalPrice,
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
    const pushData = async (newOrder)=>{
        const collectionOrder = collection(db, 'purchase orders');
        const orderDoc = await addDoc(collectionOrder,newOrder);
        setSuccess(orderDoc.id);
        buyCart();
        console.log('ORDEN GENERADA', orderDoc)
    }



    return (
        <>  
            {!success&& (
            <div className="formularioContacto">
                <form className="formulario" onSubmit={submitData}>
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
                </form>
            </div>
            )}
            
            
        </>
    )
}
export default PurchaseForm;