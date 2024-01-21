import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";


const CategoryBox = ({ category, selected }) => {
    const { label, icon: Icon } = category;
    const [params, setParams] =useSearchParams();
    const navigate =useNavigate();
    params.get('category')
  
    const handelClick =()=>{
        let currentQuery = {};
        if(params){
            currentQuery=qs.parse(params.toString());

            const updateQuery ={...currentQuery, category:label};
            
            const url=qs.stringifyUrl({
                url:'/',
                query:updateQuery
            })
            navigate(url);
        }
    } 
    return (
        <div onClick={handelClick} className={`flex flex-col justify-center items-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected? 'border-b-neutral-800 text-neutral-800':'border-transparent text-neutral-500'}`}>
            <Icon size={26}></Icon>
            <h2 className="text-sm">{label}</h2>

        </div>
    );
};

export default CategoryBox;