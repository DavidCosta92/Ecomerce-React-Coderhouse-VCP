import "./PurchaseForm.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {useState } from 'react'
import db from "../../firebaseConfig"
import { collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useForm } from "react-hook-form";

const PurchaseForm =()=>{
    const { register, handleSubmit, formState: { errors } }  = useForm();
    const {cartProducts,subtotal, buyCart}=useContext(CartContext)
    const [success,setSuccess] = useState();

    const { setFocus } = useForm()

    setFocus("lastName", { shouldSelect: true })

    
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
        date: new Date().toLocaleString(), // poner otro tipo de fecha, que diga hace 5 horas fue comprado...
    })

    const handleChange = (e) => {
        console.log("estoy manejando el cambio en form",e)
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    const submitData=(e)=>{
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
        const updateStock= setDoc(updateRef, data,{ merge:true })
        // OPCIONAL PARA ERROR DE UPCDATE, DEBERIA HACER UN TOSTY O MODAL
        .then(()=>{
            console.log("Update exitoso")
        })
        .catch((error)=>{
            console.log("Update erroneo", error)
        });
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
    const payMethods=()=>{
        return (
            <FormControl className="formMediosPagos" >
              <FormLabel id="payMethod">Metodos de pago</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="payMethod"  
              >
                <FormControlLabel onChange={handleChange} value="Efectivo" control={<Radio />} label="Efectivo" className="radioBtnMedioPago" />
                <div className="medioPago">
                    <MonetizationOnIcon/>
                    <p>Pago efectivo contado, 10% OFF<div className="mediosPagoPrecio"> ${Math.round(subtotal(cartProducts)*0.9)}</div></p>
                </div>
               
                <FormControlLabel onChange={handleChange} value="Transferencia" control={<Radio />} label="Transferencia" className="radioBtnMedioPago"/>
                <div className="medioPago">
                    <AccountBalanceIcon/>
                    <p>Pago con transferencia, 5% OFF<div className="mediosPagoPrecio"> ${Math.round(subtotal(cartProducts)*0.95)}</div></p>
                </div>
               
                <FormControlLabel onChange={handleChange} value="Tarjeta Credito" control={<Radio />} label="Tarjeta Credito" className="radioBtnMedioPago"/>
                <div className="medioPago">
                    <CreditCardIcon/>
                    <p>Credito, hasta 6 cuotas sin interes de<div className="mediosPagoPrecio"> ${Math.round(subtotal(cartProducts)/6)}</div></p>
                </div>
              </RadioGroup>
            </FormControl>
          );
    }

    {<div className="labelFormContacto">
        <label >Nombre
        <input type="text" name="name" {...register("name", { required: true})} />
        {errors.name && <p className="errorForm">Necesitamos tu nombre para conocerte</p>}
        {errors.mensaje && errors.mensaje.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
        {errors.mensaje && errors.mensaje.type ==="maxLength" && <p className="errorForm">Mensaje demasiado largo, mantente en los 200 caracteres por favor</p>}
        </label>
    </div>}

    return (
        <>  
            {!success&& (
            <div className="formularioContacto">
                <fieldset>
                <legend>Completa los datos para terminar la compra</legend>
                <form className="formulario" onSubmit={handleSubmit(submitData)} onChange={handleChange}>

                    <label className="name">Nombre 
                        <input type="text"  name="name" {...register("name", { required: true})}/>
                        {errors.name && <p className="errorForm">Necesitamos tu nombre para realizar tu facturar</p>}
                    </label>

                    {console.log("estoy CAMBIANDO LA INFO DE FORMDATA?",formData)}

                    <label className="lastName">Apellido 
                        <input type="text" name="lastName" {...register("lastName", { required: true})} />
                        {errors.lastName && <p className="errorForm">Necesitamos tu nombre para realizar tu facturar</p>}
                    </label>

                    <label className="email">Email
                        <input type="email"  name="email" {...register("email", { required: true})}  placeholder="Solo lo usaremos para contactarnos contigo.."/>
                        {errors.email && <p className="errorForm">Necesitamos tu email para contactarnos en caso de ser necesario</p>}
                    </label>

                    <label className="phone">Telefono
                        <input type="number"  name="phone" {...register("phone", { required: true})} placeholder="Solo lo usaremos para contactarnos contigo.."/>
                        {errors.phone && <p className="errorForm">Necesitamos tu numero de telefono para contactarnos en caso de ser necesario</p>}
                    </label>

                    <label className="address">Direccion
                        <input type="text"  name="address" {...register("address", { required: true})} placeholder="Requerido para realizar envio"/>
                        {errors.text && <p className="errorForm">Necesitamos tu direccion para enviarte la compra</p>}
                    </label>

                    {payMethods()}

                    <input type="submit" class="botonEnvio"/>
                </form></fieldset>
            </div>
            )}
            
            
        </>
    )
}
export default PurchaseForm;