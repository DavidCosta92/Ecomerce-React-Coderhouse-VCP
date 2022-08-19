import "./Form.css"

const Form = ()=>{
    return (
        <div className="formularioContacto">
            <form className="formulario">
                <label className="name">Nombre
                    <input type="text" required name="name"/>
                </label>
                <label className="mail">Mail
                    <input type="mail" required name="mail" placeholder="Solo lo usaremos para contactarnos contigo.."/>
                </label>
                <label className="mensaje">¿Que nos deseas contar?
                    <textarea name="mensaje" required placeholder="Te leemos.."></textarea>
                </label>
                <input type="submit" class="botonEnvio"/>
            </form>
        </div>
    )
}
export default Form;