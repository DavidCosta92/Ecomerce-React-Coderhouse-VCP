import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
const Categories =()=>{    
    const {Category} = useParams();
    return (
        <div>
            <ItemListContainer Category={Category}/>
        </div>
    )
}
export default Categories;