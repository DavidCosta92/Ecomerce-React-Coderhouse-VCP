import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
const Categorias =()=>{    
    const {categoriaElegida} = useParams();
    return (
        <div>
            <ItemListContainer categoria={categoriaElegida}/>
        </div>
    )
}
export default Categorias;