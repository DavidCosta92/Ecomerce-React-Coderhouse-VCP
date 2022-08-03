import {useParams} from "react-router-dom"
const Categorias =()=>{
    const {categoria} =useParams();
    console.log(categoria)
    return (
        <div>
            <h1>mi categoria es ver todos</h1>
        </div>
    )
}
export default Categorias;