import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
const Categories =()=>{    
    const {category} = useParams();
    return (
        <div>
            <ItemListContainer category={category}/>
        </div>
    )
}
export default Categories;