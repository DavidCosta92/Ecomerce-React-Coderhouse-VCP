
import "./Form.css"
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ()=>{
    const { register, handleSubmit, formState: { errors } }  = useForm();
    const onSubmit=()=>{
        renderAlert("¡Gracias por escribirnos, en breve estaremos respondiendo!")
    }
    
    function renderAlert(msj){
        let theme='light';
        JSON.parse(localStorage.getItem("userThemePreference")) && (theme=JSON.parse(localStorage.getItem("userThemePreference")));
        if(theme=== 'light'){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }else if(theme=== 'dark'){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
        }
    }

    return (
        <>
            <div className="formularioContacto">
                <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                    <div className="labelFormContacto">
                        <label >Nombre</label>
                        <input type="text" name="name" {...register("name", { required: true})} />
                        {errors.name && <p className="errorForm">Necesitamos tu nombre para conocerte</p>}
                    </div>

                    <div className="labelFormContacto">
                        <label >Email</label>
                        <input type="email" name="email" {...register("email", { required: true, minLength:8 })}/>
                        {errors.email && errors.email.type ==="required" && <p className="errorForm">Solo lo usaremos para contactarnos contigo.</p>}
                        {errors.email && errors.email.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
                    </div>
                    <div className="labelFormContacto">
                        <label >¿Que nos deseas contar? </label>
                        <textarea type="text" name="mensaje" {...register("mensaje", { required: true, minLength:8, maxLength:200 })} placeholder="Te leemos.."></textarea>
                        {errors.mensaje && errors.mensaje.type ==="required" && <p className="errorForm">Por favor cuentanos en que podemos ayudarte!</p>}
                        {errors.mensaje && errors.mensaje.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
                        {errors.mensaje && errors.mensaje.type ==="maxLength" && <p className="errorForm">Mensaje demasiado largo, mantente en los 200 caracteres por favor</p>}
                        
                    </div>
                        <input type="submit" class="botonEnvio"/>
                </form>
            </div>
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
        </>
    )
}
export default Form;