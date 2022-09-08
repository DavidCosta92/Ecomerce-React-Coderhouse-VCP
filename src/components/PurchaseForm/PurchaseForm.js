import "./PurchaseForm.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {useState, useEffect } from 'react'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PurchaseForm =()=>{
    const { register, handleSubmit, formState: { errors },setFocus }  = useForm();
    const {cartProducts, buyCart,totalPrice}=useContext(CartContext)
    const [success,setSuccess] = useState();
    const [payMethod, setPayMethod]= useState("Efectivo");
    const [finalPrice, setFinalPrice]=useState(0);
    const EFECTIVO=0.9;
    const TRANSFERENCIA=0.95;
    const CREDITO=1;
   

    useEffect(() => {
        setFocus("name");
      }, [setFocus]);
    
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
        total: totalPrice,
        payMethod: payMethod,
        finalPrice: {},
        date: new Date().toLocaleString(), 
    })

    const handleChange = (e) => {
        if(e.target.name==="payMethod"){
            setPayMethod(e.target.value);
            switch (e.target.value){
                case "Efectivo":
                    setFinalPrice(totalPrice*EFECTIVO);
                    break;
                case "Transferencia":
                    setFinalPrice(totalPrice*TRANSFERENCIA);
                    break;
                case "Tarjeta Credito":
                    setFinalPrice(totalPrice*CREDITO);
                    break;
                default:

            }
        } else{
            setFormData({...formData, [e.target.name] : e.target.value})
        }
    }
    const submitData=(e)=>{
        let newOrder={...order, buyer: formData, finalPrice:finalPrice}
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
            default:
        }
        return productStock;
    }

    async function updateStock (productID,amount,size){    
        let updateStatus;
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
            default:
        }
        
        const updateStock = setDoc(updateRef, data,{ merge:true })
            .then(()=>{
                console.log("Update exitoso", updateStock)   
                updateStatus=true;   
            })
            .catch((error)=>{
                console.log("Update erroneo", error)
                updateStatus=false;   
            });
        
       }) 
       return updateStatus;
    }

    function updateAllStocks (){      
        let updateAllStock;
        cartProducts.map((product)=>{
            updateAllStock = updateStock (product.id,product.inCart,product.size);
        })
        return updateAllStock;
    }

    const pushData = async (newOrder)=>{
        const id = toast.loading("Estamos procesando el pedido..")
        const collectionOrder = collection(db, 'purchase orders');
        const orderDoc = await addDoc(collectionOrder,newOrder);

        // SIMULACION DE DEMORA EN ACTUALIZAR INFO A FIREBASE..
        let statusAllUpdates= updateAllStocks();
        setTimeout(()=>{
            if(statusAllUpdates){
                toast.update(id, { render: "¡ Pedido Aprobado !", type: "success", isLoading: false , autoClose: 4000 });
                setSuccess(orderDoc.id);
                buyCart(newOrder,orderDoc.id); 
            }else{
                toast.update(id, { render: "¡Error inesperado! Vuelve a intentar por favor", type: "error", isLoading: false });
            }
        },3000)
    }

    const payMethods=()=>{
        return (
            <FormControl className="formMediosPagos" >
              <FormLabel id="payMethod">Metodos de pago</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="payMethod" 
                onSubmit={handleSubmit(submitData)}                
              >
                <FormControlLabel onChange={handleChange} value="Efectivo" control={<Radio {...register("payMethod", { required: true})}/>} label="Efectivo" className="radioBtnMedioPago" />
                <div className="medioPago">
                    <MonetizationOnIcon/>
                    <p>Pago efectivo contado, 10% OFF<div className="mediosPagoPrecio"> ${Math.round(totalPrice*EFECTIVO)}</div></p>
                </div>
               
                <FormControlLabel onChange={handleChange} value="Transferencia" control={<Radio {...register("payMethod", { required: true})}/>} label="Transferencia" className="radioBtnMedioPago"/>
                <div className="medioPago">
                    <AccountBalanceIcon/> 
                    <p>Pago con transferencia, 5% OFF<div className="mediosPagoPrecio"> ${Math.round(totalPrice*TRANSFERENCIA)}</div></p>
                </div>
               
                <FormControlLabel onChange={handleChange} value="Tarjeta Credito" control={<Radio {...register("payMethod", { required: true})}/>} label="Tarjeta Credito" className="radioBtnMedioPago"/>
                <div className="medioPago">
                    <CreditCardIcon/>
                    <p>Credito, hasta 6 cuotas sin interes de<div className="mediosPagoPrecio"> ${Math.round(totalPrice*CREDITO/6)}</div></p>
                </div>
                {errors.payMethod && <p className="errorForm">Debes seleccionar una forma de pago</p>}
              </RadioGroup>
            </FormControl>
          );
    }
/*
    <div className="labelFormContacto">
        <label >Nombre
        <input type="text" name="name" {...register("name", { required: true})} />
        {errors.name && <p className="errorForm">Necesitamos tu nombre para conocerte</p>}
        {errors.mensaje && errors.mensaje.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
        {errors.mensaje && errors.mensaje.type ==="maxLength" && <p className="errorForm">Mensaje demasiado largo, mantente en los 200 caracteres por favor</p>}
        </label>
    </div>
*/

    return (
        <>  
            <ToastContainer
                    position="bottom-left"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
            pauseOnHover/>
            {!success&& (
            <div className="formularioContacto ">
                <fieldset>
                <legend>Completa los datos para terminar la compra</legend>
                <form className="formulario" onSubmit={handleSubmit(submitData)} onChange={handleChange}>

                    <label className="name">Nombre 
                        <input type="text"  name="name" {...register("name", { required: true})}/>
                        {errors.name && <p className="errorForm">Necesitamos tu nombre para realizar tu factura</p>}
                    </label>

                    <label className="lastName">Apellido 
                        <input type="text" name="lastName" {...register("lastName", { required: true})} />
                        {errors.lastName && <p className="errorForm">Necesitamos tu nombre para realizar tu factura </p>}
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